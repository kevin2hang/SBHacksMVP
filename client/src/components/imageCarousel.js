import React, {useState, useEffect} from 'react';
import "../styles/imageCarousel.css";
// images
import AppleLogo from "../images/appleLogo.svg";
import MicrosoftLogo from "../images/microsoftLogo.svg";
import AMD from "../images/amd.png";

const ImageCarousel = () => {
    const [carouselItemClasses, setCarouselItemClasses] = useState("carouselItem");
    const images = [MicrosoftLogo, AMD, AppleLogo];
    const [index, setIndex] = useState(0);
    const [allowClick, setAllowClick] = useState(true);
    const animationDuration = 800;

    const right = () => {
        setAllowClick(false);
        setCarouselItemClasses("carouselItem moveLeft")
        setTimeout(() => {
            let newI = (index+1) % images.length;
            setIndex(newI);
            setCarouselItemClasses("carouselItem slideInFromRight");
            setTimeout(() => {
                setCarouselItemClasses("carouselItem");
                setAllowClick(true);
            }, animationDuration);    // 500 ms for duration of slideInFomrRigthAnimation
        }, animationDuration);  // 500ms for duration of moveLeft animation
        
    };
    const left = () => {
        setAllowClick(false);
        
        // start animation
        setCarouselItemClasses("carouselItem moveRight"); // exit aniamtion
        setTimeout(() => {
            let newI = index-1;
            if (newI < 0) {
                newI = images.length + newI;
            }
            setIndex(newI);
            setCarouselItemClasses("carouselItem slideInFromLeft")    // enter animation
            setTimeout(() => {
                setCarouselItemClasses("carouselItem");
                setAllowClick(true);
            }, animationDuration)
        }, animationDuration);
        
    }


    return(
        <div className="carousel">
            <div className="miniTitle">Sponsors</div>
            <div className="carouselContainer">
                <div className="left arrow" onClick={left}>{'\u21E6'}</div>
                    <div className={carouselItemClasses}>
                        <img className="carouselImg" src={images[index]}/>
                    </div>
                <div className="right arrow" onClick={right}>{'\u21E8'}</div>
            </div>
        </div>
    );
}

export default ImageCarousel;