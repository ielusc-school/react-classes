import React, { Component } from 'react';
import axios from 'axios';

import Main from '../template/main/Main'

const headerProps = {
  icon:'users',
  title: 'Usuários',
  subtitle: 'PersonAPP:  Adicionar, Listar, Alterar e Remover'
};


const baseUrl = 'http://localhost:5000/users';
const initialState = {
  user: {name: '', email: '' },
  list: []
}

export default class UserCrud extends Component {
  // ciclo de vida

  state = {...initialState};
  
  clear() {
    this.setState({ user: initialState.user})
  }

  save() {
    const user = this.state.user;
    const method = user.id ? 'put' : 'post';
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
    axios[method](url, user)
      .then(res => {
        const list = this.getUpdateList(res.data);
        this.setState({ user: initialState.user, list })
      });
  }

  getUpdateList(user) {
    const list = this.state.list.filter(u => u.id !== user.id)
    list.unshift(user); 
    return list;
  }

  setUpdateField(event) {
    const user = {...this.state.user }
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  renderForm() {
    return(
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <label htmlFor="name">Nome</label>
            <input 
              type="text"
              className="form-control" 
              name="name"
              value={this.state.user.name} 
              onChange={e => this.setUpdateField(e)}
              placeholder="Insira seu nome..." />
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="email">E-mail</label>
            <input 
              type="email"
              className="form-control" 
              name="email"
              value={this.state.user.email} 
              onChange={e => this.setUpdateField(e)}
              placeholder="Insira seu e-mail..." />
            </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary"
              onClick={e => this.save(e)}>
              Salvar
            </button>
            <button className="btn btn-secondary ml-2"
              onClick={e => this.clear(e)}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return(
      <Main {...headerProps}>
        { this.renderForm() }
      </Main>
    )
  }
}