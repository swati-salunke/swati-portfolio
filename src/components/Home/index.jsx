import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import Logos from '../../assets/images/logo-s.png';
import AnimateLetters from '../AnimateLetters';
import Logo from '../Home/Logo'
import Loader from 'react-loaders';

function Home() {
  const [letterClass, setLetterClass] = useState('text-animate');
  
  const nameArray = ['w', 'a', 't', 'i'];
  const surNameArray = ['a', 'l', 'u', 'n', 'k', 'e'];
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

  useEffect(() => {
    setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 3000);
}, []);
  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span> 
          <span className={`${letterClass} _12`}>i</span>
          <br />
          <span className={`${letterClass} _13`}>I</span> 
          <span className={`${letterClass} _14`}>'m</span> 
          <img src={Logos} alt="Logo" />
          <AnimateLetters letterClass={letterClass} strArray={nameArray} idx={15} />
          <img src={Logos} alt="Logo" />
          <AnimateLetters letterClass={letterClass} strArray={surNameArray} idx={18} />
          <br />
          <AnimateLetters letterClass={letterClass} strArray={jobArray} idx={24} />
        </h1>
        <h2>Frontend Developer / Javascript Expert / React Expert / Wordpress Expert</h2>
        <Link to="/contact" className="flat-button">Contact Me</Link>
      </div>
      <Logo className="home-logo-container"/>
    </div>
    <Loader type="pacman" />
    </>
  );
}

export default Home;