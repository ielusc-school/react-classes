import './Logo.css';
import brand from '../../../assets/images/demo-logo.png';
import React from 'react';

export default props => 
  <aside className="logo">
    <a href="/" className="logo">
      <img 
        src={brand} 
        alt="Nosso negócio é a chave do sucesso..."/>
    </a>
  </aside>