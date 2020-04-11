import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import './App.css';
import React from 'react';


// import { HashRouter } from 'react-router-dom'; // usando hashrouter

import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

import Logo from '../components/template/logo/Logo';
import NavBar from '../components/template/nav/Nav';
import Footer from '../components/template/footer/Footer';

export default props =>
  <BrowserRouter>
    <div className="app">
      <Logo />
      <NavBar />
      <Routes />
      <Footer />
    </div>
  </BrowserRouter>
