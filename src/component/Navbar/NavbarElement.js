import React from 'react';
import "./style.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function NavbarElement(props) {
  const {title, icon} = props;

  return (
    <div className="navbarElement">
      <FontAwesomeIcon className="navbarElement_icon" icon={icon}/>
      <div className="navbarElement_title">{title}</div>
    </div>
  );
}
