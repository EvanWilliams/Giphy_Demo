import React,{ useState} from 'react';
import classes from './imageContainer.scss'
export const ImageContainer = (props) => {

    const [modalOpen, setModalOpen] = useState(false)




     return(
        <div>
            <div className={props.className} onClick={(e) => setModalOpen(true)}>
                <div className={"image-wrapper"}>
                    {props.title ? <h3>{props.title}</h3> : null}
                    <figure>
                        <img alt={props.alt} src={props.image}></img>
                        <figcaption className={"caption"}>
                            {props.caption}
                        </figcaption>
                    </figure>
                </div>
                {props.hr ? <hr/> : null}
            </div>
            <div className={`modal ${modalOpen ? "active" : "inactive"}`}>
                <div className={"modal-content"}>
                <div className={"modal-exit"}> 
                    <span onClick={(e) => setModalOpen(false)} 
                    >&times;</span>
                </div>
                <div className={"image-wrapper"} onClick={(e) => setModalOpen(true)}>
                    <div>
                        {props.title ? <h3>{props.title}</h3> : null}
                        <figure>
                            <img alt={props.alt} src={props.image} className={"modal-image"}></img>
                            <figcaption className={"caption"}>
                                <h3>{props.caption}</h3>
                            </figcaption>
                        </figure>
                    </div>
                    {props.hr ? <hr/> : null}
                </div>
                </div>
            </div>
        </div>
     )
}

export default ImageContainer;