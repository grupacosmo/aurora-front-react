import React, {useEffect} from 'react';
import "./star.css";

export default function Star(props) {

  const {y, id, opacity, size} = props;

  // set random blinking
  const animationDuration = Math.random() * 4 + 1;
  const animationDelay = Math.random() * animationDuration;

  // prepare style
  const style = {
    animationDuration: `${animationDuration}s`,
    animationDelay: `-${animationDelay}s`,
    width: `${size}px`,
    height: `${size}px`,
    left: props.x + "%",
    top: y + "%",
    opacity: opacity
  };

  // add moving
  useEffect(() => {
    let {x} = props;

    setInterval(() => {
      x = x - 0.003;
      if (x < 0) {
        x = 99;
      }
      document.getElementById(id).style.left = `${x}%`;
    }, 1)
  })

  return (
    <div className="star" style={style} id={id}/>
  );
}
