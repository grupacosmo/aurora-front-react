import React from "react";
import "./ExperimentTile.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserAstronaut, faSpaceShuttle} from '@fortawesome/free-solid-svg-icons'

const ExperimentTile = () => {
    return (
        <div id="tileContainer">
            <FontAwesomeIcon style={{fontSize: 80}} icon={faUserAstronaut}/>
            <h2 style={{fontSize:30, fontWeight:500}}>RANDOM TITLE</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue facilisis augue, eu consequat magna
                rhoncus in. Etiam tincidunt eros vitae ultricies efficitur. Maecenas varius vitae dui vehicula dapibus.
                Vivamus a finibus odio, eget ultrices lectus. Nam nibh eros, consectetur a nulla vel, luctus venenatis
                tellus</p>
        </div>
    )
}

export default ExperimentTile