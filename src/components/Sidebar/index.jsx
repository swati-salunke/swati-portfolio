import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faEnvelope, faUser, faHome, faBrain, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import icons
import './index.scss';
import Logos from '../../assets/images/logo-s.png';
import MyPhoto from '../../assets/images/my-photo.png';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons/faProjectDiagram';


function Sidebar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <>
    <button className="nav-toggle" onClick={toggleNav}>
        <FontAwesomeIcon icon={navOpen ? faTimes : faBars} />
      </button>
    <div className={`nav-bar ${navOpen ? 'nav-open' : ''}`}>
      <Link to="/" className="logo"><img src={Logos} alt="Logo" /></Link>
      <Link to="/" className="my-photo"><img src={MyPhoto} alt="profile-photo" /></Link>
      {/* <p className="logo-name">Swati Salunke</p> */}
      <nav>
        <NavLink exact="true" activeclassname="active" className="home-link" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="skills-link" to="/skills">
          <FontAwesomeIcon icon={faBrain} />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
          <FontAwesomeIcon icon={faProjectDiagram} />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/swati-salunke-563576228/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://github.com/swati-salunke">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://wa.link/fka6wh">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </li>
      </ul>
    </div>
    </>
  );
}

export default Sidebar;