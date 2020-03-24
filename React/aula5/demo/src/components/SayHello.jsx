import React from 'react';

export default props => {
 return (
   <div>
      <h1>Olá, Cristofer Sousa!</h1>
    </div>
 )
}

// import React from 'react';

// export default props => {
//  return (
//    <div>
//       <h1>Olá, {props.name}!</h1>
//     </div>
//  )
// }


// import React from 'react';

// export default props => {
//  return (
//    <div>
//       <h1>Olá, {props.name}!</h1>
//       <h2> Até, breve! </h2>
//     </div>
//  )
// }


// usando com fragment
// import React, { Fragment } from 'react';

// export default props => 
//    <Fragment> ou <React.Fragment>
//       <h1>Olá, {props.name}!</h1>
//       <h2> Até, breve! </h2>
//   </Fragment> ou </React.Fragment>


// usando com array
// import React from 'react';

// export default props => [
//       <h1 key="h1">Olá, {props.name}!</h1>,
//       <h2 key="h2"> Até, breve! </h2>
// ]

/*
Warning: Each child in a list should have a unique "key" prop. See https://fb.me/react-warning-keys for more information.
adiciona um key sempre em arrays
*/