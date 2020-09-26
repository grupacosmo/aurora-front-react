import React, {useEffect} from 'react';

const OPACITY_RANGE = 0.2;

function getMinOpacity(opacity) {
  const minOpacity = opacity - OPACITY_RANGE;
  if (minOpacity < 0) {
    return 0;
  }
  return minOpacity;
}

function getMaxOpacity(opacity) {
  const maxOpacity = opacity + OPACITY_RANGE;
  if (maxOpacity > 1) {
    return 1;
  }
  return maxOpacity;
}

export default function Star(props) {

  const {y, id} = props;

  const size = Math.random() + 1;

  const style = {
    position: "absolute",
    zIndex: 0,
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "100%",
    backgroundColor: "white",
    left: props.x + "%",
    top: y + "%",
    opacity: props.opacity
  };

  useEffect(() => {
    let {x, opacity} = props;

    const maxOpacity = getMaxOpacity(opacity);
    const minOpacity = getMinOpacity(opacity);
    const opacityStep = Math.random() * 0.0002 + 0.0006;
    let opacityDirection = Math.random() >= 0.5 ? opacityStep : -opacityStep;

    opacity = Math.random() * OPACITY_RANGE * 2 - OPACITY_RANGE;

    setInterval(() => {
      x = x - 0.003;
      if (x < 0) {
        x = 99;
      }

      opacity += opacityDirection;
      if (opacity <= minOpacity) {
        opacity = minOpacity;
        opacityDirection = opacityStep;
      } else if (opacity >= maxOpacity) {
        opacity = maxOpacity;
        opacityDirection = -opacityStep;
      }

      document.getElementById(id).style.left = `${x}%`;
      document.getElementById(id).style.opacity = opacity;
    }, 1)
  })

  return (
    <div style={style} id={id}/>
  );
}
