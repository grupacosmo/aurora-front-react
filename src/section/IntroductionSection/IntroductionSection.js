import React, {useState, useEffect, useRef} from "react";
import {Row, Col} from "antd"
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'

import "./IntroductionSection.css"
import "./Animation.css"
import city from "../../assets/img/city.jpg"
import city2 from "../../assets/img/city2.jpg"
import europe from "../../assets/img/europe.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const IntroductionSection = () => {
    const [topPhotoPointer, setTopPhotoPointer] = useState(0)
    const [bottomPhotoPointer, setBottomPhotoPointer] = useState(1)
    const [toggle, setToggle] = useState(true)
    const topPhotoRef = useRef()

    const pictures = [city, europe, city2]

    useEffect(() => {
        if (toggle) {
            setTimeout(() => {
                setTopPhotoPointer((prev) => {
                    if (prev >= pictures.length - 2) {
                        return (prev + 2) % pictures.length
                    }
                    return prev + 2
                })
                setToggle(prev => !prev)
            }, 10000)
        } else {
            setTimeout(() => {
                setBottomPhotoPointer((prev) => {
                    if (prev >= pictures.length - 2) {
                        return (prev + 2) % pictures.length
                    }
                    return prev + 2
                })

                //Usuwanie i dodawanie tej klasy startuje od nowa animacje co zsynchronizować zmienianie się zdjęć
                //właśnie z tą animacją
                topPhotoRef.current.classList.remove("topPhoto")
                topPhotoRef.current.classList.add("topPhoto")

                setToggle(prev => !prev)
            }, 10000)
        }

    }, [toggle])

    return (
        <div id="IntroSection">
            <div id="PhotoContainer">
                <img id="photo" className="bottomPhoto" src={pictures[bottomPhotoPointer]} alt="bottomPhoto"/>
                <img id="photo" ref={topPhotoRef} className="topPhoto" src={pictures[topPhotoPointer]} alt="topPhoto"/>
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