import React,{ useState} from 'react';
import axios from 'axios';
import classes from './randomGif.module.scss';
import ImageContainer from '../../containers/imageContainer/imageContainer';

const RandomGif = () => {
    const [data,setData] = useState(undefined)
    const[Rating, setRating] = useState("g");
    const handleSubmit = (event) => {
        const fetchData = async () => {
            const response = await axios('https://api.giphy.com/v1/gifs/random', {
            params:{
                    'rating':Rating,
                    'api_key':'YDXFn0LazKqfuxSxYwpNYxQYhfuWZqLi'
                }
            });
           
            setData(response.data.data);
        };
        fetchData();
    }
    const renderSearchResults = () => {
        if(data === undefined){
            return(
                <div></div>
            )
        }
        else{
                return(
                    <div key={data.id} className={classes["banner-element"]}>
                        <ImageContainer
                            image={data.images.fixed_height.url}
                            caption={data.title}/>
                    </div>  
                )
        }
        
    }

    return (
            <div className={classes["submit"]}>
                
                <button onClick={(e) => handleSubmit()}> Get a Random Gif</button>
                <div className={classes["button-group"]}>
                    <span>Please select a  maximum Rating for gifs:</span>
                    <input type="radio" onChange={(e) => setRating("g")} value="g" name="rating" checked={Rating === "g"} /> G
                    <input type="radio" onChange={(e) => setRating("pg")} value="pg" name="rating" checked={Rating === "pg"}/> PG
                    <input type="radio" onChange={(e) => setRating("pg-13")} value="pg-13" name="rating" checked={Rating === "pg-13"} /> PG13
                </div>
                <div className={classes["banner"]}>{renderSearchResults()}</div>
            </div>
            );
}
export default RandomGif;