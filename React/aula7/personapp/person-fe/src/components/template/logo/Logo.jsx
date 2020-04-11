import './Logo.css';
import brand from '../../../assets/images/demo-logo.png';
import React from 'react';
import { Link } from 'react-router-dom';

export default props => 
  <aside className="logo">
    <Link to="/" className="logo">
      <img 
        src={brand} 
        alt="Nosso negócio é a chave do sucesso..."/>
    </Link>
  </aside>