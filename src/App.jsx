import {Routes, Route } from 'react-router-dom';

import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

function App() {
  return (
    
    <Routes>
     <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="contact" element={<Contact />} />
    </Route>
  </Routes>
   
  );
}
export default App;