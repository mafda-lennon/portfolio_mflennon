import React, { Component } from 'react'
import ProjectCard from './ProjectCard.js';
import './Portfolio.css';
import bojack from '../../images/bojack.jpg';
import Modal from './Modal.js'

class Portfolio extends Component {
  render() {
    return <div className="portfolio-container">
      <ProjectCard projectName="Laborum" projectType="WEB APP" image={bojack}/>
      <ProjectCard projectName="Burger Queen" projectType="PWA" image={bojack}/>
      <ProjectCard projectName="Data Lovers" projectType="WEB DEV" image={bojack}/>
      <ProjectCard projectName="Tic Tac Toe" projectType="PWA" image={bojack}/>
      <ProjectCard projectName="Transbank" projectType="WEB DESIGN" image={bojack}/>
      <ProjectCard projectName="Fundación Itaú" projectType="WEB DESIGN" image={bojack}/>
      <Modal projectName="Laborum" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas lectus lacus, non cursus lorem efficitur sed. Sed id pretium diam. Aliquam suscipit vel turpis ac venenatis. Nullam pellentesque felis magna, lacinia tincidunt justo iaculis ac. Proin eget lobortis dui. Nunc felis purus, tempus id rutrum et, mollis nec dolor. Donec id convallis leo. In congue metus a pellentesque dignissim. Ut eu laoreet mi, eu tempus ex. Suspendisse ornare ligula in mi dignissim, vel tristique libero imperdiet. Etiam vehicula tincidunt sagittis. Vivamus nisi nibh, tincidunt sed dignissim in, imperdiet sit amet dui. Cras sed egestas dolor. Duis gravida odio commodo orci venenatis pellentesque. Aenean eu nisl lectus. Donec eu nisi ut libero volutpat vulputate. Aliquam est sem, efficitur non ante et, lobortis cursus mauris. Pellentesque malesuada pretium metus vel fringilla."
        btnCode="https://github.com/mafda-lennon/SCL011-Laborum-Postulante" btnDemo="https://laborum-postulante.firebaseapp.com/" />
    </div>
  }
}

export default Portfolio;