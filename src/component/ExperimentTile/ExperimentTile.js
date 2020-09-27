import React, {useEffect, useState} from "react";
import "./ExperimentTile.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserAstronaut} from '@fortawesome/free-solid-svg-icons'

const ExperimentTile = (props) => {
    const [isRendered, setIsRendered] = useState(false)
    const [opacity, setOpacity] = useState(0)
    const [translate, setTranslate] = useState("100px")


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 24 && !isRendered) {
                setIsRendered(true);
                setOpacity(1)
                setTranslate("0px")
            }
            if (currentScrollY < 24 && isRendered) {
                setIsRendered(false);
                setOpacity(0)
                setTranslate("100px")
            }

        }

        window.addEventListener("scroll", handleScroll, {passive: true});
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isRendered])


    const style = {
        opacity: opacity,
        transform: `translate(${props.translate}${translate})`,
        transition: "opacity 1s, transform 1s"
    }

    return (
        <div id="tileContainer" style={style}>
            <FontAwesomeIcon style={{fontSize: 80}} icon={faUserAstronaut}/>
            <h2 style={{fontSize: 30, fontWeight: 500}}>RANDOM TITLE</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue facilisis augue, eu consequat magna
                rhoncus in. Etiam tincidunt eros vitae ultricies efficitur. Maecenas varius vitae dui vehicula dapibus.
                Vivamus a finibus odio, eget ultrices lectus. Nam nibh eros, consectetur a nulla vel, luctus venenatis
                tellus</p>
        </div>
    )
}

export default ExperimentTile