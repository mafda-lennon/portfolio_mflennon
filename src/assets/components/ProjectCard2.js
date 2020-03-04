import React, { Component } from 'react';
import './ProjectCard.css';

class ProjectCard2 extends Component {
  render() {
    return <div>
      <div className="card-container card">
        <img src={this.props.image} alt="imagen-proyecto" className="image"/>
        <div className="info-container">
          <div className="info">
            <h3>
              {this.props.projectName}
            </h3>
            <p>
              {this.props.projectInfo}
            </p>
          </div>
          <div className="btns-container">
            <a href={this.props.btnGoToBehance} target="_blank" rel="noopener noreferrer"><button className="dialog-btn">Design</button></a>
            <a href={this.props.btnGoToWeb} target="_blank" rel="noopener noreferrer"><button className="dialog-btn">Web</button></a>
          </div>
        </div>
      </div>
    </div>
  }
}

export default ProjectCard2;
