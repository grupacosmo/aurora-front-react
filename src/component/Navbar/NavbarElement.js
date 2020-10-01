import React from 'react';
import "./style.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const colorStep = 25;
function getLighterColor(color) {
  color = JSON.parse(JSON.stringify(color));

  for (let i = 0; i < 3; i++) {
    color[i] = color[i] + colorStep < 255 ? color[i] + colorStep : 255;
  }

  return color;
}


function toCssRgb(color) {
  return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}

export default function NavbarElement(props) {
  const defaultColor = [89, 89, 89];
  const defaultColorLighter = getLighterColor(defaultColor);

  const {title, icon} = props;

  return (
    <div className="navbarElement">
      <FontAwesomeIcon className="navbarElement_icon" icon={icon} style={{background: toCssRgb(defaultColor)}}/>
      <div className="navbarElement_title" style={{background: toCssRgb(defaultColorLighter)}}>{title}</div>
    </div>
  );
}
