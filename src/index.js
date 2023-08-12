import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App';
import Header from './components/header/Header';
import VantaDotsBackground from './components/VantaBackground';
import SplashScreen from './components/splash_screen/SplashScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <VantaDotsBackground />
    <App />
    <SplashScreen/>
  </React.StrictMode>
);


setTimeout(() => {
  root.render(
    <React.StrictMode>
      <VantaDotsBackground />
      <Header />
      <App />
    </React.StrictMode>
  )
}, 2000);