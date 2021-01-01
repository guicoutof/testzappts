import React from 'react';

import Image from '../../assets/images/component.png'
import './styles.css';

const images = [
    Image,
    Image,
    Image,
    Image
]

function Slider(){


    return(
        <div className="carousel">
            <div>
                <img alt="image" src={images[0]} className="componentImg"/>
            </div>
            <div className="carouselText">
                <h2 className="carouselTitle">Marcenas mattis egestas</h2>
                <h3 className="carouselSubTitle">Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta</h3>
            </div>
            
        </div>
    )
}

export default Slider;