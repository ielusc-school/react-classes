import React, {useEffect, useState} from 'react';
import * as S from './styled';
import {Link} from 'react-router-dom';

export default function Repositores() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    repositoriesName = JSON.parse(repositoriesName);
    setRepositories(repositoriesName);
    console.log(repositoriesName);
    localStorage.clear();
  }, []);
  return (
    <>
    <S.Container>
    <S.Title> Repositórios</S.Title>
    <S.List>
      { repositories.map(repository => {
        return (
        <S.ListItem key={repository}> 
          Repositório: {repository} 
        </S.ListItem>
        )
      })}
    </S.List>
    <Link to="/">Voltar para página principal</Link>
    </S.Container>
    </>
  )
}
