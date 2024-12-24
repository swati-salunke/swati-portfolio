// src/components/Portfolio.js
import React, { useState, useEffect } from 'react';
import Project1 from '../../assets/images/dareixtechnosoft.png';
import Project2 from '../../assets/images/matflymarketing.png';
import Project3 from '../../assets/images/matflytourism.png';
import Project4 from '../../assets/images/nailefy.png'
import Project5 from '../../assets/images/hygenix.png';
import Project6 from '../../assets/images/mayraformwork.png';
import Project7 from '../../assets/images/SUKH-SAGAR.png';
import Project8 from '../../assets/images/Homely-Interior.png';
import Loader from 'react-loaders';
import AnimateLetters from '../AnimateLetters';
import Carousel from './Carousel/Carousel';
import './index.scss'


const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [activeProject, setActiveProject] = useState('html');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const handleButtonClick = (project) => {
    setActiveProject(project);
  };

  const projectData = {
    html: [
      { image: Project2, title: "HTML Project 1", link: "https://matflymarketing.com/" },
      { image: Project1, title: "HTML Project 2", link: "https://dareixtechnosoft.online/" },

    ],
    wordpress: [
      { image: Project3, title: "WordPress Project 1", link: "https://matflytourism.com/" },
      {image : Project4 , title: "", link: ""},
      { image: Project5, title: "Hyhenix", link: "https://hygenix.in" },
      {image : Project6 , title: "Mayra Aluminium Formwork", link: "https://mayraformwork.com/"},

    ],
    react: [
      { image: Project7, title: "React Project 1", link: "https://swati-salunke.github.io/SUKH-SAGAR/" },
      { image: Project8, title: "React Project 2", link: "https://swati-salunke.github.io/Homely-Interior/" },
    ],
  };

  return (
    <>
    <div className="container portfolio-page">
      <div className="text-zone">
        <h1>
          <AnimateLetters
            letterClass={letterClass}
            strArray={['M', 'Y', ' ', 'P', 'R', 'O', 'J', 'E', 'C', 'T', 'S']}
            idx={15}
          />
        </h1>
        <div className="button-container">
          <button onClick={() => handleButtonClick('html')} className={activeProject === 'html' ? 'active' : ''}>HTML, CSS & JS</button>
          <button onClick={() => handleButtonClick('wordpress')} className={activeProject === 'wordpress' ? 'active' : ''}>WordPress</button>
          <button onClick={() => handleButtonClick('react')} className={activeProject === 'react' ? 'active' : ''}>ReactJS</button>
        </div>
      </div>

      <div className="project-zone">
        {activeProject && (
          <Carousel projects={projectData[activeProject]} />
        )}
      </div>
    </div>
    <Loader type="pacman" /> 
    </>
  );
};

export default Portfolio;