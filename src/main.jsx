import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
  <BrowserRouter future={{ v7_startTransition: true , v7_relativeSplatPath: true }} basename="/swati-portfolio">
  <App />
</BrowserRouter>
   
  </React.StrictMode>
);