import React, { Component } from 'react';
import './ProjectCard.css';
import bojack from '../images/bojack.jpg'

class ProjectCard extends Component {
  render() {
    return <div>
      <div className="card-container card card-grid">
        <img src={bojack} alt="bojack" className="image"/>
        <p>
          <h3>
            Burguer Queen
          <br />
            -
          <br />
          </h3>
          WEB APP
        </p>
      </div>
    </div>
  }
}

export default ProjectCard;
