import React, {useEffect, useRef} from 'react';
import "./style.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-scroll'
import {getLighterColor, toCssRgba} from "../../util/ColorUtil";

export default function SideNavbarElement(props) {
  const colorStep = 25;
  const {title, icon, target, color} = props
  const lighterColor = getLighterColor(color, colorStep);

  const defaultColor = [89, 89, 89];
  const defaultColorLighter = getLighterColor(defaultColor, colorStep);

  const navbarElement = useRef();
  const opacity = 0.8;

  const refreshNavbarColors = (container, navbarElement) => {
    const top = container.offsetTop;
    const bottom = top + container.offsetHeight;
    const position = window.scrollY + window.innerHeight / 2;

    if (position >= top && position < bottom) {
      navbarElement.current.querySelector(".navbarElement_icon").style.background = toCssRgba(color, opacity);
      navbarElement.current.querySelector(".navbarElement_title").style.background = toCssRgba(lighterColor, opacity);
    }
    else {
      navbarElement.current.querySelector(".navbarElement_icon").style.background = toCssRgba(defaultColor, opacity);
      navbarElement.current.querySelector(".navbarElement_title").style.background = toCssRgba(defaultColorLighter, opacity);
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
        <div className="navbarElement_icon" style={{background: toCssRgba(defaultColor)}}>
          <FontAwesomeIcon icon={icon} style={{width: "100%", height: "100%", display: "block"}}/>
        </div>
        <div className="navbarElement_title" style={{background: toCssRgba(defaultColorLighter)}}>{title}</div>
      </div>
    </Link>
  );
}
