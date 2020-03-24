import React, { Component } from 'react';

export default class Saudacao extends Component {

  setTipo(e) {
    // console.log(e.target.value);
     //this.props.tipo = e.target.value;
     this.setState({tipo: e.target.value});
  } 

  setNome(e) {
    // console.log(e.target.value);
     //this.props.tipo = e.target.value;
     this.setState({nome: e.target.value});
  }

  // state = {
  //   tipo:'Fala',
  //   nome: 'Cristofer'
  // }

  state = {
    tipo: this.props.tipo,
    nome: this.props.nome
  }

  render () {
    // dois params
    // saudacao and name
    // class não recebe props

    const {tipo, nome } = this.state;
    return (
      <div>
        <h1> {tipo} {nome} !</h1>
        <hr/>
        <input type="text" placeholder="Tipo" value={tipo} onChange={e => this.setTipo(e)} />
        <input type="text" placeholder="Nome" value={nome} onChange={e => this.setNome(e)} />
      </div>
    )
  }
}