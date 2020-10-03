import React,{useState,useEffect} from "react";
import {Row,Col} from "antd"
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'

import "./IntroductionSection.css"
import "./Animation.css"
import city from "../../assets/img/city.jpg"
import worldMap from "../../assets/img/worldMap.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const IntroductionSection = () => {
    const [image,setImage] = useState(city)
    const [select,setSelect] = useState(1)
    const [photoClass,setPhotoClass] = useState("")

    const pictures = [city,worldMap]

    useEffect(() =>{
        setPhotoClass("photoFadeIn")
        setTimeout(() =>{
            setPhotoClass("photoFadeOut")
        },9000)
        setTimeout(() =>{
            setImage(pictures[select])
            setSelect((prev) =>{
                if(prev > pictures.length - 2){
                    return 0
                }
                return prev + 1
            })
        },10000)
    },[select])

    return (
        <div id="IntroSection">
            <div id="PhotoContainer">
                <img id="photo"
                     className={photoClass}
                     src={image}
                     alt="city"
                />
            </div>
            <div id="Background"/>
            <div id="ContentContainer">
                <Row>
                    <Col span={24}>
                        <h1>Cel Projektu</h1>
                    </Col>
                    <Col span={12} offset={6}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue facilisis augue, eu
                            consequat magna rhoncus in. Etiam tincidunt eros vitae ultricies efficitur</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={6} offset={9}>
                        <FontAwesomeIcon className="IntroIcon" icon={faAngleDown}/>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default IntroductionSection