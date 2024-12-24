import { useEffect, useState } from 'react';
import {
 
  faBootstrap,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders'; 
import AnimateLetters from '../AnimateLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';


const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1 style={{display: 'flex', justifyContent: 'flex-start', gap: '40px'}}>
            <AnimateLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>I am born in the small picturesque town of Indapur, Pune, Maharastra.</p>
          <p>I transitioned into my academic pursuits, i dedicated myself to the pursuit of excellence. my educational journey reached a milestone when i earned a Master's in Computer Management (MCM). This academic achievement not only enriched my understanding of the digital landscape but also became a stepping stone for the remarkable career that awaited me.</p>
          
          <p>I did not get support from my family for my career.  But still I continued my studies.  After a lot of effort, I finally got permission to do the job.  After that I did most of my career in wordpress internetreel and now I am working in <span className='links'>Matfly Digital Marketing</span> Agency as a <span className='links'>Web Developer.</span></p>
          {/* <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p> */}
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
          If I were to define myself in one sentence, I would say I am a dedicated family person, a loving mother of handsome son, someone passionate about balancing my family's needs with a fulfilling professional life, and a frontend developer with a strong enthusiasm for technology, creativity, and continuous learning."
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face2">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face3">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face6">
            <FontAwesomeIcon icon={faBootstrap} color="#563d7c" />
            </div>
          </div>
        </div>
      </div>

     
      <Loader type="pacman" /> 
    </>
  );
};

export default About;