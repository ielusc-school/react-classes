import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import './App.css';
import React from 'react';

import Logo from '../components/template/logo/Logo';
import NavBar from '../components/template/nav/Nav';
import Home from '../components/template/home/Home';
import Footer from '../components/template/footer/Footer';


export default props =>
<div className="app">
  <Logo />
  <NavBar />
  <Home />
  <Footer />
</div>