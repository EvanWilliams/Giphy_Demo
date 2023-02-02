import React,{ useState} from 'react';
import axios from 'axios';
import classes from './searchBox.module.scss';
import ImageContainer from '../../containers/imageContainer/imageContainer';

const SearchBox = () => {
    const [data,setData] = useState([])
    const [queryParam, setQueryParam] = useState("")
    const[Rating, setRating] = useState("g");
    const handleSubmit = (event) => {
        event.preventDefault();
        const fetchData = async () => {
            const response = await axios('https://api.giphy.com/v1/gifs/search', {
            params:{
                    'q':queryParam,
                    'rating':Rating,
                    'api_key':'YDXFn0LazKqfuxSxYwpNYxQYhfuWZqLi'
                }
            });

            setData(response.data.data);
        };
        fetchData();
    }
    const renderSearchResults = () => {
        
        return data.map( (el,index) => {
                return(
                    <div key={el.id} className={classes["banner-element"]}>
                        <ImageContainer
                            title={""}
                            image={el.images.fixed_height.url}
                            caption={""}/>
                        
                    </div>  
                )
            });
        
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