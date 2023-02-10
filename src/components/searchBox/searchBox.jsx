import React,{ useState} from 'react';
import post from '../../services/axios/post/post';
import classes from './searchBox.module.scss';

import ImageContainer from '../../containers/imageContainer/imageContainer';

const SearchBox = () => {
    const [data,setData] = useState([])
    const [queryParam, setQueryParam] = useState("")
    const[Rating, setRating] = useState("g");
    const handleSubmit = (event) => {
        event.preventDefault();
        const fetchData = async () => {
            const response = await post('https://api.giphy.com/v1/gifs/search',{
                'q':queryParam,
                'rating':Rating,
                'api_key':'YDXFn0LazKqfuxSxYwpNYxQYhfuWZqLi'
            });
            filterResults(response);
        };
        fetchData();
    }
    const filterResults = (response) => {
        let tempData = {
            unfilteredResults : response.data || {},
            gResults:{},
            pgResults:{},
            pg13Results:{}
        }
        tempData.gResults = response.data.filter((element) => {
            return element.rating === 'g'
        });
        tempData.pgResults = response.data.filter((element) => {
            return element.rating === 'pg'
        });
        tempData.pg13Results = response.data.filter((element) => {
            return element.rating === 'pg-13'
        });
        setData(tempData);
    }
    const renderSearchResults = () => {
        if(Rating === 'pg-13' && data.pg13Results !== undefined){
            return data.pg13Results.map( (el,index) => {
                return(
                    <div key={el.id} className={classes["banner-element"]}>
                        <ImageContainer
                            title={""}
                            image={el.images.fixed_height.url}
                            caption={el.title}/>     
                    </div>  
                )
            });
        }
        else if(Rating === 'pg' && data.pgResults !== undefined){
            return data.pgResults.map( (el,index) => {
                return(
                    <div key={el.id} className={classes["banner-element"]}>
                        <ImageContainer
                            title={""}
                            image={el.images.fixed_height.url}
                            caption={el.title}/>
                    </div>  
                )
            });
        }
        else if(Rating === 'g' && data.gResults !== undefined){
            return data.gResults.map( (el,index) => {
                return(
                    <div key={el.id} className={classes["banner-element"]}>
                        <ImageContainer
                            title={""}
                            image={el.images.fixed_height.url}
                            caption={el.title}/>
                    </div>  
                )
            });
        }
    }

    return (
            <div className={classes["submit"]}>
                <form onSubmit={handleSubmit}>
                    <label>Enter in a query for gifs that are grouped as a result of inquiry:</label>
                    <input
                    type="text" 
                    value={queryParam}
                    onChange={(e) => setQueryParam(e.target.value)}
                    />
                    <div className={classes["button-group"]}>
                        <span>Please select a  maximum Rating for gifs:</span>
                        <input type="radio" onChange={(e) => setRating("g")} value="g" name="rating" checked={Rating === "g"} /> G
                        <input type="radio" onChange={(e) => setRating("pg")} value="pg" name="rating" checked={Rating === "pg"}/> PG
                        <input type="radio" onChange={(e) => setRating("pg-13")} value="pg-13" name="rating" checked={Rating === "pg-13"} /> PG13
                    </div>
                </form>
                <div className={classes["banner"]}>{renderSearchResults()}</div>
            </div>
            );
}
export default SearchBox;