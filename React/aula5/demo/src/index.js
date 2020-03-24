import React from 'react';
import ReactDOM from 'react-dom';
// import First from './components/First';
// import Say from './components/SayHello';

// import CA from './components/Multiplos';

// ReactDOM.render(<Say name='Cristofer Sousa'/>, 
//   document.querySelector('#root')
// );


// exemplo com multiplus
// ReactDOM.render(
//   <div>
//     <CA.BoaTarde name="Ana"/>
//     <CA.BoaNoite name= "Andre"/>
//   </div>, 
//   document.querySelector('#root')
// );


import Saudacao from './components/Saudacao';

ReactDOM.render(
  <div>
    <Saudacao tipo="Olá, tudo bem?!" nome="Thiago" />
  </div>,
  document.querySelector('#root')
);