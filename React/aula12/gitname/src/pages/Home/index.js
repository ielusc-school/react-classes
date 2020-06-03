import React, {useState} from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const [user, setUsuario ] = useState('');
  const history = useHistory();
  const [erro, setErro] = useState(false);

function handlePesquisa() {
  //sthefanisilveira
  const url = `https://api.github.com/users/${user}/repos`;
  axios.get(url)
    .then(response => {
    const repositories = response.data;
    const repositoriesName = [];

    repositories.map((repository) => {
      repositoriesName.push(repository.name);
    });
    localStorage.setItem('repositoriesName',JSON.stringify(repositoriesName));
    setErro(false);
    history.push('/repositories'); // redirecionando para a rota....
  }).catch(err => {
    setErro(true);
  });
}

return (
  <>
    <S.Container>
    <S.Input 
        type="text" 
        placeholder="insira seu username..."
        name="user"
        id="user"
        value={user}
        onChange={e => setUsuario(e.target.value)}/>
        <S.Button 
          type="button" 
          onClick={handlePesquisa}>Pesquisar
        </S.Button>
        {erro ? <S.ErrorMsg>Ops, ocorreu um erro na sua busca.</S.ErrorMsg> : ''}
    </S.Container>
  </>
);
}