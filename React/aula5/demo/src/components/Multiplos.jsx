// import React from 'react'

// export const BoaTarde = props => <h1>Boa tarde, tudo bem com você,  {props.name}!</h1>

// export const BoaNoite = props => <h1>Boa noite, tudo bem com você, !{props.name}!</h1>


// modo 2

import React from 'react'

const BoaTarde = props => <h1>Boa tarde, tudo bem com você,  {props.name}!</h1>

const BoaNoite = props => <h1>Boa noite, tudo bem com você, !{props.name}!</h1>

export default {
  BoaTarde,
  BoaNoite
}

// modules
// destructuring 