import React, { Component } from 'react';
import SocialIcons from './SocialIcons.js'
import './AboutMe.css'

class AboutMe extends Component {
  render() {
    // const aboutmeInfoContainer = {
    //   backgroundColor: 'aquamarine',

    // };
    // return <div style={aboutmeInfoContainer}>
    return <div className="aboutme-container">
        <h2>
          DISEÑADORA UI.<br />FRONT-END DEVELOPER.
        </h2>
        <p>
          Me llamo María Fernanda, soy Diseñadora Gráfica y fui parte del bootcamp de Laboratoria, en el track de Front-End. He trabajado en web toda mi vida profesional y ahora me estoy dedicando a UI.<br />Sígueme en mis redes o contactémonos por correo :)
        </p>
        <SocialIcons />
        <button className="contact-btn">
          CONTACTO
        </button>
    </div>
  }
}

export default AboutMe;
