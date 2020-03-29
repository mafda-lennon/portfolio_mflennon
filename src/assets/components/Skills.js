import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJs, faNodeJs, faReact, faGit, faGithub, faFigma } from '@fortawesome/free-brands-svg-icons'
import './SocialIcons.css';
import './Skills.css';

export default function Skills(){
  return (
    <div>
      <h3 className="skills-title">
      Skills:
      </h3>
      <div className="skills-container">
        <FontAwesomeIcon className="skills" icon={faHtml5} size="2x"/>
        <FontAwesomeIcon className="skills" icon={faCss3} size="2x"/>
        <FontAwesomeIcon className="skills" icon={faJs} size="2x"/>
        <FontAwesomeIcon className="skills" icon={faNodeJs} size="2x"/>
        <FontAwesomeIcon className="skills" icon={faReact} size="2x"/>
        <FontAwesomeIcon className="skills" icon={faGit} size="2x"/>
        <FontAwesomeIcon className="skills" icon={faGithub} size="2x"/>
        <FontAwesomeIcon className="skills" icon={faFigma} size="2x"/>
      </div>
    </div>
  )
}
