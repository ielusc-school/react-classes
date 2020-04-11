import './App.css';
import React from 'react';

import Logo from '../components/template/logo/Logo';
import NavBar from '../components/template/nav/Nav';
import Main from '../components/template/main/Main';
import Footer from '../components/template/footer/Footer';


export default props =>
<div className="App">
  <Logo />
  <NavBar />
  <Main />
  <Footer />
</div>