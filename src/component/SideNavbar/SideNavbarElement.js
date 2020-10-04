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

    const iconElement = navbarElement.current.querySelector(".navbarElement_icon");
    const titleElement = navbarElement.current.querySelector(".navbarElement_title");

    if (position >= top && position < bottom) {
      iconElement.style.background = toCssRgba(color, opacity);
      titleElement.style.background = toCssRgba(lighterColor, opacity);
    }
    else {
      iconElement.style.background = toCssRgba(defaultColor, opacity);
      titleElement.style.background = toCssRgba(defaultColorLighter, opacity);
    }
  }

  useEffect(() => {
    const container = document.querySelector(`#${target}`);
    refreshNavbarColors(container, navbarElement);

    window.addEventListener('scroll', () => refreshNavbarColors(container, navbarElement));
  });

  return (
      <div ref={navbarElement} className="navbarElement">
        <div className="navbarElement_icon" style={{background: toCssRgba(defaultColor)}}>
          <FontAwesomeIcon icon={icon} style={{width: "100%", height: "100%", display: "block"}}/>
        </div>
        <Link
          to={target}
          spy={true}
          smooth={true}
          duration={500}
          activeClass=" "
        >
          <div className="navbarElement_title" style={{background: toCssRgba(defaultColorLighter)}}>{title}</div>
        </Link>
      </div>
  );
}
