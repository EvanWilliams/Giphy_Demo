import React,{ useEffect,useState} from 'react';
import axios from 'axios';
import classes from './giphyBanner.module.scss';


const GiphyBanner = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios('https://api.giphy.com/v1/gifs/trending', {
            params:{
                    'api_key':'YDXFn0LazKqfuxSxYwpNYxQYhfuWZqLi'
                }
            });

            setData(response.data.data);
        };
        fetchData();
    },[]);

    const renderGifs = () => {
        
        return data.map( (el,index) => {
            if(index === 0)
            {
                return(
                    <div key={el.id+index} className={classes["first"]}>
                        <img src={el.images.fixed_height.url} alt={el.title}/>
                    </div>  
                )
            }
            else{
                return(
                    <div key={el.id+index} className={classes["banner-element"]}>
                        <img src={el.images.fixed_height.url} alt={el.title} />
                    </div>  
                )
            }
        })
    }

    return <div className={classes["banner"]}>{renderGifs()}</div>;
}
export default GiphyBanner;