import React, {useEffect, useState,useRef} from "react";
import "./ExperimentTile.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const ExperimentTile = (props) => {
    const [isRendered, setIsRendered] = useState(false)
    const [opacity, setOpacity] = useState(0)
    const [translate, setTranslate] = useState("100px")
    const myRef = useRef();

    useEffect(() => {
        const {y} = myRef.current.getBoundingClientRect()

        //Będzie to wysokość od której karty bedą się pojawiać
        const scrollHeight = y - window.innerHeight + 50 + window.scrollY

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > scrollHeight && !isRendered) {
                setIsRendered(true);
                setOpacity(1)
                setTranslate("0px")
            }
            if (currentScrollY < scrollHeight && isRendered) {
                setIsRendered(false);
                setOpacity(0)
                setTranslate("100px")
            }
        }

        window.addEventListener("scroll", handleScroll, {passive: true});
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isRendered,myRef])


    const style = {
        opacity: opacity,
        transform: `translate(${props.data.translate}${translate})`,
        transition: "opacity 1s, transform 1s"
    }

    return (
        <div id="tileContainer" ref={myRef} style={style}>
            <FontAwesomeIcon className="icon" icon={props.data.icon}/>
            <h2 className="TitleTile">{props.data.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue facilisis augue, eu consequat magna
                rhoncus in. Etiam tincidunt eros vitae ultricies efficitur. Maecenas varius vitae dui vehicula dapibus.
                Vivamus a finibus odio, eget ultrices lectus. Nam nibh eros, consectetur a nulla vel, luctus venenatis
                tellus</p>
        </div>
    )
}

export default ExperimentTile