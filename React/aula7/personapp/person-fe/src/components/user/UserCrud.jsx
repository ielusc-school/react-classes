import React, { Component } from 'react';
import Main from '../template/main/Main'

const headerProps = {
  icon:'users',
  title: 'Usuários',
  subtitle: 'PersonAPP:  Adicionar, Listar, Alterar e Remover'
};

export default class UserCrud extends Component {
  // ciclo de vida
  render() {
    return(
      <Main {...headerProps}>
        Cadastro de Usuário
      </Main>
    )
  }

}