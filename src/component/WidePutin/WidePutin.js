import React from 'react';
import "./style.css";

import memeMusic from '../../assets/sound/wide-putin.mp3';

export default function WidePutin() {
  return (
    <>
      <audio
        autoPlay={true}
        controls={false}>
        <source type="audio/mp3" src={memeMusic} />
      </audio>
      <img src="https://steamuserimages-a.akamaihd.net/ugc/1477696595663509341/CF90E4FB3A04D84AD84C01D15D3AC08AF63C1053/?imw=506&imh=284&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
           alt="wide-putin" id="widePutinGif"/>
      <h1>Aurora</h1>
      <h2>Home section</h2>
      <h3>Flipper przemierza PK</h3>
    </>
  );
}
