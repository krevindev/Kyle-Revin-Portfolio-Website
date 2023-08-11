import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/header/Header';
import VantaDotsBackground from './components/VantaBackground';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <VantaDotsBackground/>
    <Header />
    <App />
  </React.StrictMode>
);