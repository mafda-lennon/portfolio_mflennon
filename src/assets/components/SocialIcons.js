import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import './SocialIcons.css';

export default function SocialIcons(){
  return (
    <div className="socialContainer">
      <a
        href="https://www.behance.net/Femrock" 
        target="_blank" rel="noopener noreferrer"
        className="behance social"
      >
        <FontAwesomeIcon icon={faBehance} size="2x"/>
      </a>
      <a
        href="https://www.linkedin.com/in/mflennon"
        target="_blank" rel="noopener noreferrer"
        className="linkedin social"
      >
        <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
      </a>
      <a
        href="https://github.com/mafda-lennon"
        target="_blank" rel="noopener noreferrer"
        className="github social"
      >
        <FontAwesomeIcon icon={faGithub} size="2x"/>
      </a>
    </div>
  )
}