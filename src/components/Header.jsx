import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/components/Header.styl';
// import '../assets/styles/components/Header.scss';
import logo from '../styles/static/logo.png';

const Header = (props) => (
  <div className="Header">
    <div className="Header-img">
      <Link to="/">
        <img src={logo} alt="Servicios Online" />
      </Link>
     
      <Link to="/">
        <div className="Header-nameLogo">
            <p>Servicios</p>
            <p>Generales</p>
            </div>      
      </Link>
    </div>
    <div className="Header-message">
        <h6>Profesionales al servicio del Hogar</h6>
    </div>  
  </div>
);



export default (Header);