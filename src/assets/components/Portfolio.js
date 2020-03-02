import React, { Component } from 'react'
import ProjectCard from './ProjectCard.js';
import './Portfolio.css'
import bojack from '../../images/bojack.jpg';

class Portfolio extends Component {
  render() {
    return <div className="portfolio-container">
      <ProjectCard projectName="Burger Queen" projectType="WEB APP" image={bojack}
      />
      <ProjectCard projectName="Burger Queen" projectType="WEB APP" image={bojack}/>
      <ProjectCard projectName="Burger Queen" projectType="WEB APP" image={bojack}/>
      <ProjectCard projectName="Burger Queen" projectType="WEB APP" image={bojack}/>
      <ProjectCard projectName="Burger Queen" projectType="WEB APP" image={bojack}/>
      <ProjectCard projectName="Burger Queen" projectType="WEB APP" image={bojack}/>
    </div>
  }
}

export default Portfolio;