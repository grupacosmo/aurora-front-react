import React, {useEffect, useRef} from 'react';
import "./style.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-scroll'

const colorStep = 25;
function getLighterColor(color) {
  color = JSON.parse(JSON.stringify(color));

  for (let i = 0; i < 3; i++) {
    color[i] = color[i] + colorStep < 255 ? color[i] + colorStep : 255;
  }

  return color;
}


function toCssRgb(color, opacity=1) {
  return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${opacity})`;
}

export default function SideNavbarElement(props) {
  const {title, icon, target, color} = props
  const lighterColor = getLighterColor(color);

  const defaultColor = [89, 89, 89];
  const defaultColorLighter = getLighterColor(defaultColor);

  const navbarElement = useRef();
  const opacity = 0.8;

  const refreshNavbarColors = (container, navbarElement) => {
    const top = container.offsetTop;
    const bottom = top + container.offsetHeight;
    const position = window.scrollY + window.innerHeight / 2;

    if (position >= top && position < bottom) {
      navbarElement.current.querySelector(".navbarElement_icon").style.background = toCssRgb(color, opacity);
      navbarElement.current.querySelector(".navbarElement_title").style.background = toCssRgb(lighterColor, opacity);
    }
    else {
      navbarElement.current.querySelector(".navbarElement_icon").style.background = toCssRgb(defaultColor, opacity);
      navbarElement.current.querySelector(".navbarElement_title").style.background = toCssRgb(defaultColorLighter, opacity);
    }
  }

  useEffect(() => {
    const container = document.querySelector(`#${target}`);
    refreshNavbarColors(container, navbarElement);

    window.addEventListener('scroll', () => refreshNavbarColors(container, navbarElement));
  });

  return (
    <Link
      to={target}
      spy={true}
      smooth={true}
      duration={500}
    >
      <div ref={navbarElement} className="navbarElement">
        <div className="navbarElement_icon" style={{background: toCssRgb(defaultColor)}}>
          <FontAwesomeIcon icon={icon} style={{width: "100%", height: "100%", display: "block"}}/>
        </div>
        <div className="navbarElement_title" style={{background: toCssRgb(defaultColorLighter)}}>{title}</div>
      </div>
    </Link>
  );
}
