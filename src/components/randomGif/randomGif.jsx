import React,{ useState} from 'react';
import axios from 'axios';
import classes from './randomGif.module.scss';
import ImageContainer from '../../containers/imageContainer/imageContainer';

const RandomGif = () => {
    const [data,setData] = useState(undefined)
    const handleSubmit = (event) => {
        const fetchData = async () => {
            const response = await axios('https://api.giphy.com/v1/gifs/random', {
            params:{
                    'rating':'g',
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
                <div className={classes["banner"]}>{renderSearchResults()}</div>
            </div>
            );
}
export default RandomGif;