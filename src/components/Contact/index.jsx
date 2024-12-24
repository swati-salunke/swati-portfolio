import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import AnimateLetters from '../AnimateLetters';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import './index.scss';

const Contact = () => {
  const position = [18.5893, 73.8288];
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_edwc37u', 'template_8my2ebh', form.current, 'tLh2eTi59-HWL2sz0')

      .then(() => {
        alert('Message successfully sent!');
        window.location.reload(false);
      }, () => {
        alert('Failed to send the message, please try again');
      });
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimateLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15} />
          </h1>
          <p>I am interested in freelance opportunities - especially on ambitious or large projects...</p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half"><input placeholder="Name" type="text" name="name" required /></li>
                <li className="half"><input placeholder="Email" type="email" name="email" required /></li>
                <li><input placeholder="Subject" type="text" name="subject" required /></li>
                <li><textarea placeholder="Message" name="message" required></textarea></li>
                <li><input type="submit" className="flat-button" value="SEND" /></li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Swati Salunke,<br />
          Pimple Gurav,<br />
          Pune - 411061<br />
          Maharastra, India<br /><br />
          <span>swatisalunke2288@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={position} zoom={13} style={{ height: '560px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
              <Popup>Pimple Gurav, Pune, Maharashtra, India<br />PIN-411061</Popup>
            </Marker>
            {/* Resize Component */}
            <ComponentResize />
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

const ComponentResize = () => {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
  }, [map]);
  return null;
};

export default Contact;