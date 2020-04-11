import './Main.css';
import React from 'react';
import  Header from '../header/Header'

/**
 * Envolvendo dois elementos dentro da minha div iremos 
 * usar o React.fragment que vimos lá nas aulas iniciais
 */

export default props => 
  <React.Fragment> 
    <Header {...props} />
    <main className="content container-fluid">
     <div className="p-3 mt-3">
       {props.children}
     </div>
    </main>
  </React.Fragment>
