import React, { Component } from 'react'
import ProjectCard from './ProjectCard.js';
import ProjectCard2 from './ProjectCard2.js';
import './Portfolio.css';
import burger from '../../images/burger.jpg';
import cultivate from '../../images/cultivate.jpg';
import transbank from '../../images/transbank.jpg';
import fitau from '../../images/fitau.jpg';

class Portfolio extends Component {
  render() {
    return <div>
      <div className="portfolio-container">
        <ProjectCard projectName="Burger Queen" projectInfo="Progressive Web App que agiliza desde el pedido de comanda hasta la organización en cocina dentro de un restaurant. Con integración de Firebase."
          image={burger}
          btnCode="https://github.com/mafda-lennon/SCL011-Burger-Queen"
          btnDemo="https://burger-6d85a.firebaseapp.com/" />

        <ProjectCard projectName="Cultívate" projectInfo="Red social enfocada en crear comunidad en torno a la horticultura y la autosustentabilidad. Con integración de Firebase para registrar usuarios."
          image={cultivate}
          btnCode="https://github.com/mafda-lennon/SCL011-Social-Network"
          btnDemo="https://camila-61ade.firebaseapp.com/" />

        <ProjectCard2 projectName="Transbank" projectInfo="Diseño sitio web de Transbank durante el año 2016 para Agencia People&Chess. Maquetación, diseño de iconografía y revestimiento del sitio."
          image={transbank}
          btnGoToBehance="https://www.behance.net/gallery/93211739/Transbank" 
          btnGoToWeb="https://publico.transbank.cl/"/>

        <ProjectCard2 projectName="Fundación Itaú" projectInfo="Diseño sitio web de Fundación Itaú durante el año 2018 para Agencia People&Chess. Maquetación, diseño de iconografía y revestimiento del sitio."
          image={fitau}
          btnGoToBehance="https://www.behance.net/gallery/75029205/Fundacion-Itau"
          btnGoToWeb="https://www.fundacionitau.cl/"/>
      </div>
    </div>
  }
}

export default Portfolio;