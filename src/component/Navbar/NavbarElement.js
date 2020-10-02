import React, {useEffect, useRef} from 'react';
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
  const {title, icon, target, color} = props
  const lighterColor = getLighterColor(color);

  const defaultColor = [89, 89, 89];
  const defaultColorLighter = getLighterColor(defaultColor);

  const navbarElement = useRef();

  const refreshNavbarColors = (container, navbarElement) => {
    const position = window.scrollY + 100;
    const top = container.offsetTop;
    const bottom = top + container.offsetHeight;

    if (position >= top && position < bottom) {
      navbarElement.current.querySelector(".navbarElement_icon").style.background = toCssRgb(color);
      navbarElement.current.querySelector(".navbarElement_title").style.background = toCssRgb(lighterColor);
    }
    else {
      navbarElement.current.querySelector(".navbarElement_icon").style.background = toCssRgb(defaultColor);
      navbarElement.current.querySelector(".navbarElement_title").style.background = toCssRgb(defaultColorLighter);
    }
  }

  useEffect(() => {
    const container = document.querySelector(target);
    refreshNavbarColors(container, navbarElement);

    window.addEventListener('scroll', function(e) {
      refreshNavbarColors(container, navbarElement);
    });
  });

  return (
    <div ref={navbarElement} className="navbarElement">
      <div className="navbarElement_icon" style={{background: toCssRgb(defaultColor)}}>
        <FontAwesomeIcon icon={icon} style={{width: "100%", height: "100%", display: "block"}}/>
      </div>
      <div className="navbarElement_title" style={{background: toCssRgb(defaultColorLighter)}}>{title}</div>
    </div>
  );
}
