import React, { Component } from 'react';
import './ProjectCard.css';

class ProjectCard extends Component {
  render() {
    return <div>
      <div className="card-container card">
        <img src={this.props.image} alt="imagen-proyecto" className="image"/>
        <div className="info-container">
          <div className="info">
            <h3>
              {this.props.projectName}
            <br />
              -
            <br />
            </h3>
              {this.props.projectType}
          </div>
          <div className="btn-more-cont">
            <button className="btn-more">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  }
}

export default ProjectCard;
