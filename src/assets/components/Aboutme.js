import React, { Component } from 'react';
import SocialIcons from './SocialIcons.js';
import Skills from './Skills.js';
import './AboutMe.css';

class AboutMe extends Component {
  render() {
    return <div className="aboutme-container">
        <h2>
          DISEÑADORA UI.<br />FRONT-END DEVELOPER.
        </h2>
        <p>
          Me llamo María Fernanda. Tengo experiencia en diseño y desarrollo web. Siempre curiosa, con afinidad por las ciencias, música y videojuegos.<br /><br />Hobbies? la paleontología, el skate y últimamente obsesionada por saber cómo funciona Minecraft.<br /><br />Sígueme en mis redes o contactémonos por correo :)
        </p>
        <SocialIcons />
        <a class="mailto" href="mailto:mf.lennon@gmail.com"><button className="contact-btn">
          CONTACTO
        </button></a>
        <Skills />
    </div>
  }
}

export default AboutMe;
