import React, { Component } from 'react'
import ProjectCard from './ProjectCard.js';
import './Portfolio.css'

class Portfolio extends Component {
  render() {
    return <div className="portfolio-container">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  }
}

export default Portfolio;