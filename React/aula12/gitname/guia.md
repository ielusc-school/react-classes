## Guia - UserGithub


Class {
  estados:  didMount, destroy ...
}

function hooks

Components
 - State
 - Fragments
 - Props
 - Eventos

1.  Programação Declarativa vs Programação Imperativa


Evento em JavaScript
 - onChange
 - onKeyUp
 - onKeyDown


 # Hooks,


São uma API para manipular o React, anteriormente usavamos o classComponents.

Hook UseState -> 
 - Citar Estados e Modificar Estados
 - Se trata de um fn que retorna um Array.

 [valor do estado, fn para settar a fn]

 Vamos usar o conceito de destruct



Components, Estados e Propriedades


 props, fragments, hooks, estados, 


# Eventos

onclick =fn
onKeyDown
onKeyUp



Componentes Controlados
- Estados sempre devem ser a fonte da verdade, única fonte da verdade.
- Temos sempre dois estados:
 - Estado do Aplicatio
 - Estado do Input



0. Criando nosso App.JS

```js
import React, { useState} from 'react';
import axios from  'axios';

function App(props) {
  const [user, setUsuario] = useState('');

  function handlePesquisa() {
    const url = `https://api.github.com/users/${user}/repos`;
    axios.get(url).then(response => {
      console.log(response.data);
    })
  }

  return (
    <>
    <h1> {props.user}</h1>
      <input 
        type="text" 
        className="user"
        value={user}
        placeholder="insira o userName"
        onChange={e => setUsuario(e.target.value)}/>
        <button type="button" onClick={handlePesquisa}>
        Pesquisar</button>
    </>
  );
}
export default App;
```


 ## Instalando o React-Router


1. https://api.github.com/
2. https://api.github.com/user/::username
3. https://api.github.com/users/cristofersousa/repos


2. Instalando o react-router-dom
> npm i react-router-dom

3. Criar um arquivo em components/repos/repositories.jsx

4. Criar um arquivo em `src/routes.js`

```js
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Repositores from '../src/components/repos/repositories.jsx';
import Home from './Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/repositories' component={Repositores} />
      </Switch>
    </BrowserRouter>
  )
}
```



5. Criar um arquivo em `src/Home.jsx`

Vamos pegar toda a nossa estrutura feita em APP e passar ela para o Home.

6. Nosso arquivo App.js
```js
import React from 'react';
import Routes from './routes';

function App(props) {
  return (
    <Routes />
  );
}
export default App;

```

7. Vamos organizar nossos arquivos:

7.1 Crie um diretório `src/components`
7.2 Crie um diretório `src/Pages`
7.1 Crie um diretório `src/Pages/Respositores`
7.2 Crie um diretório `src/Pages/Home`
7.3 Renomeie os arquivos de Repositores e Pages para index.js

7.4 Ajuste os paths do seus arquivos em `routes.js`

```js
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Repositores from './pages/Repositories/index';
import Home from './pages/Home/index';

export default function Routes() {
  return (
    <BrowserRouter> 
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/repositories' component={Repositores} />
      </Switch>
    </BrowserRouter>
  )
}

```



8.  Vamos manipular nossoss arquivos em `src/Repositories`

```js

import React from 'react';

export default function Repositores() {
  return (
    <>
    <h1> Repositórios</h1>
    <ul>
      <li>Repositórios 1</li>
      <li>Repositórios 2</li>
      <li>Repositórios  3</li>
      <li>Repositórios 4</li>
      <li>Repositórios  5</li>
      <li>Repositórios  6</li>
      <li>Repositórios  7</li>
      <li>Repositórios  8</li>
      <li>Repositórios  9</li>
      <li>Repositórios  10</li>
    </ul>
    </>
  )
}
```

9.  Instalando o `styled-components`
> npm i styled-components

10. Crie um arquivo `src/Repositories/styled.js`

```js
import styled from 'styled-components';

export const Title = styled.h1`
  text-align:center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #333
`

```

11. Importa seu arquivo styled no `src/Repositories/index.js`

```js
import React from 'react';
import * as S from './styled';

export default function Repositores() {
  return (
    <>
    <S.Title> Repositórios</S.Title>
    <ul>
      <li>Repositórios 1</li>
      <li>Repositórios 2</li>
      <li>Repositórios  3</li>
      <li>Repositórios 4</li>
      <li>Repositórios  5</li>
      <li>Repositórios  6</li>
      <li>Repositórios  7</li>
      <li>Repositórios  8</li>
      <li>Repositórios  9</li>
      <li>Repositórios  10</li>
    </ul>
    </>
  )
}
```

11.1 Complementando mais nosso CSS

```js
import styled from 'styled-components';

export const Title = styled.h1`
  text-align:center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #333;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
`;

export const ListItem = styled.li`
  margin: .5rem 0;
  background: #000;
  color:#fff;
  padding: .5rem;
`
```

11.2 - Adicionando mais propriedades no nosso JS

```js

import React from 'react';
import * as S from './styled';

export default function Repositores() {
  return (
    <>
    <S.Title> Repositórios</S.Title>
    <S.List>
      <S.ListItem>Repositório: Nome Repositório 1</S.ListItem>
      <S.ListItem>Repositório: Nome Repositório 2</S.ListItem>
      <S.ListItem>Repositório: Nome Repositório 3</S.ListItem>
      <S.ListItem>Repositório: Nome Repositório 4</S.ListItem>
      <S.ListItem>Repositório: Nome Repositório 5</S.ListItem>
      <S.ListItem>Repositório: Nome Repositório 6</S.ListItem>
      <S.ListItem>Repositório: Nome Repositório 7</S.ListItem>
      <S.ListItem>Repositório: Nome Repositório 8</S.ListItem>
      <S.ListItem>Repositório: Nome Repositório 9</S.ListItem>
      <S.ListItem>Repositório: Nome Repositório 10</S.ListItem>
    </S.List>
    </>
  )
}
```

11.3 Adicionando um `container` para a nossa lista para que possamos ter ela centralizada:

```js
import React from 'react';
import * as S from './styled';

export default function Repositores() {
  return (
    <>
    <S.Container>
    <S.Title> Repositórios</S.Title>
    <S.List>
      <S.ListItem>Repositório: Nome Repositório 1</S.ListItem>
      <S.ListItem>Repositório: Nome Repositório 2</S.ListItem>
      <S.ListItem>Repositório: Nome Repositório 3</S.ListItem>
      <S.ListItem>Repositório: Nome Repositório 4</S.ListItem>
      <S.ListItem>Repositório: Nome Repositório 5</S.ListItem>
      <S.ListItem>Repositório: Nome Repositório 6</S.ListItem>
      <S.ListItem>Repositório: Nome Repositório 7</S.ListItem>
      <S.ListItem>Repositório: Nome Repositório 8</S.ListItem>
      <S.ListItem>Repositório: Nome Repositório 9</S.ListItem>
      <S.ListItem>Repositório: Nome Repositório 10</S.ListItem>
    </S.List>
    </S.Container>
    </>
  )
}
```

11.5 Nosso CSS para o style:

```js
export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin:0 auto;

```

12. Adicionando estilos para o nosso `src/Home/index`

```js
import styled from 'styled-components';

export const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: .25rem 0 0 .25rem;
  height: 1.5rem;
  padding: 0 .5rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }`

  export const Container = styled.div`
    width: 100vw;
    heigth: 100vh;
    display: flex;
    align-items:center;
    justify-content: center;
  `
```
12.1 Nosso arquivo `src/Home/index`, ficará:


```js
import React, { useState} from 'react';
import axios from  'axios';
import * as S from './styled';

function App(props) {
  const [user, setUsuario] = useState('');

  function handlePesquisa() {
    const url = `https://api.github.com/users/${user}/repos`;
    axios.get(url).then(response => {
      console.log(response.data);
    })
  }

  return (
    <>
    <S.Container>
      <h1> {props.user}</h1>
      <S.Input 
        type="text" 
        className="user"
        value={user}
        placeholder="insira o userName"
        onChange={e => setUsuario(e.target.value)}/>
        <S.Button type="button" onClick={handlePesquisa}>
        Pesquisar</S.Button>
      </S.Container>
    </>
  );
}
export default App;
```

13. Acessando nosso arquivo `src/App.js` vamos adicionar um css para ele:

```js

import React from 'react';
import Routes from './routes';
import './style.css'; // importando o css

function App(props) {
  return (
    <Routes />
  );
}
export default App;

```

13.1 Adicionando o css para ele: 

```css
html, body {
  width: 100vw;
  height: 100vh;
}

```

14. Vamos lidar com LocalStorage
14.1 Acesse o arquivo `src/Home/index.js` e vamos manipular ele:

```js

  function handlePesquisa() {
    const url = `https://api.github.com/users/${user}/repos`;
    axios.get(url).then(response => {

      const repositories = response.data;
      const repositoriesName = [];

      repositories.map((repository) => {
        repositoriesName.push(repository.name)
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      // JSON.stringify(repositoriesName)
      // console.log(repositoriesName);
    })
  }
```

15. Faremos transição de página, usando nosso React Router Dom, acesse o `src/Home/index.js`

15.1 Importe o `useHistory`

```js

import React, { useState} from 'react';
import axios from  'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom'; // adicionando

function App(props) {
  const [user, setUsuario] = useState('');
  const history = useHistory(); // adicionei

  function handlePesquisa() {
    const url = `https://api.github.com/users/${user}/repos`;
    axios.get(url).then(response => {

      const repositories = response.data;
      const repositoriesName = [];

      repositories.map((repository) => {
        repositoriesName.push(repository.name)
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      history.push('/repositories'); // passando a URL
    })
  }

```


16. Passando as informações do HOME para o Repositories: 

Para isso vamos usar o `useEffect`, esse hook ele fica monitorando uma mudança em cima da variável ele vai disparar uma function quando houver uma mudança.


Acesse o arquivo `src/Repositories/index`

```js

export default function Repositores() {
  useEffect(() => { 
    let repositoriesName = localStorage.getItem('repositoriesName');
    repositoriesName = JSON.parse(repositoriesName);
    console.log(repositoriesName);
  }, []);

  return (
```


16.2 Vamos usar o hook useState ele lida com estados:

```js

import React, {useEffect, useState} from 'react';
import * as S from './styled';

export default function Repositores() {
  const [repositories, setRepositories ] = useState([]);

  useEffect(() => { 
    let repositoriesName = localStorage.getItem('repositoriesName');
    repositoriesName = JSON.parse(repositoriesName);
    setRepositories(repositoriesName)
    console.log(repositoriesName);
  }, []);
```

16.3 Programação Imperativa e Programação Declarativa? 


```js
import React, {useEffect, useState} from 'react';
import * as S from './styled';

export default function Repositores() {
  const [repositories, setRepositories ] = useState([]);

  useEffect(() => { 
    let repositoriesName = localStorage.getItem('repositoriesName');
    repositoriesName = JSON.parse(repositoriesName);
    setRepositories(repositoriesName)
    // console.log(repositoriesName);
    localStorage.clear();
  }, []);

  return (
    <>
    <S.Container>
    <S.Title> Repositórios</S.Title>
    <S.List>
      { repositories.map (repository => {
      return (
      <S.ListItem> Repositório: { repository }</S.ListItem>
      )
    })}
    </S.List>
    </S.Container>
    </>
  )
}
```

17. Melhorias, vamos conhecer o Link do react-dom.

```js

import React, {useEffect, useState} from 'react';
import * as S from './styled';
import { Link } from 'react-router-dom';

export default function Repositores() {
  const [repositories, setRepositories ] = useState([]);

  useEffect(() => { 
    let repositoriesName = localStorage.getItem('repositoriesName');
    repositoriesName = JSON.parse(repositoriesName);
    setRepositories(repositoriesName)
    // console.log(repositoriesName);
    localStorage.clear();
  }, []);

  return (
    <>
    <S.Container>
    <S.Title> Repositórios</S.Title>
    <S.List>
      { repositories.map (repository => {
      return (
      <S.ListItem>Repositório: { repository }</S.ListItem>
      )
    })}
    </S.List>
    <a href="/">Voltar</a>
    <Link to="/"> Voltar</Link>
    </S.Container>
    </>
  )
}
```

```js

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  text-align:center;
  font-size: 2rem;
  font-family: sans-serif;
  color: #333;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
`;

export const ListItem = styled.li`
  margin: .5rem 0;
  background: #000;
  color:#fff;
  padding: .5rem;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin:0 auto;
`;

export const LinkHome = styled(Link)`
  display:block;
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  background: #000;
  padding: .5rem 0;
  color: #fff;
  text-decoration: none;
`;
```


18. Vamos melhorar a XP do usuário quando limpar o cache,
redirecionar ele para a tela principal...

```js

import React, {useEffect, useState} from 'react';
import * as S from './styled';
import {useHistory} from 'react-router-dom';

export default function Repositores() {
  const [repositories, setRepositories ] = useState([]);
  const history = useHistory();

  useEffect(() => { 
    let repositoriesName = localStorage.getItem('repositoriesName');
    if(repositoriesName !== null) {
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName)
      // console.log(repositoriesName);
      localStorage.clear();
    }else {
      history.push('/');
    }
  }, [history]);

  return (
    <>
    <S.Container>
    <S.Title> Repositórios</S.Title>
    <S.List>
      { repositories.map (repository => {
      return (
      <S.ListItem>Repositório: { repository }</S.ListItem>
      )
    })}
    </S.List>

    <S.LinkHome to="/"> Voltar</S.LinkHome>
    </S.Container>
    </>
  )
}
```

19. Renderização condicional:


```js

import React, { useState} from 'react';
import axios from  'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function App() {
  const [user, setUsuario] = useState('');
  const history = useHistory();
  const [erro, setErro] = useState(false); 

  function handlePesquisa() {
    const url = `https://api.github.com/users/${user}/repos`;
    axios.get(url).then(response => {

      const repositories = response.data;
      const repositoriesName = [];

      repositories.map((repository) => {
        return repositoriesName.push(repository.name)
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setErro(false); // passando o erro para false....
      history.push('/repositories'); 
    }).catch(err => {
      setErro(true);  // passando o erro para true....
    });
  }

  return (
    <>
    <S.HomeContainer>
      <S.Content>
        <S.Input 
          type="text" 
          className="user"
          value={user}
          placeholder="insira o userName"
          onChange={e => setUsuario(e.target.value)}/>
          <S.Button type="button" onClick={handlePesquisa}>
          Pesquisar</S.Button>
        </S.Content>
        { erro ? <S.ErroMsg>Ops, ocorreu um erro na sua busca.</S.ErroMsg> : '' }
      </S.HomeContainer>
    </>
  );
}
export default App;

```


```js
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100vw;
  display: flex;
  align-items:center;
  justify-content: center;
`;

export const ErroMsg = styled.span`
  display: block;
  font-size: 0.65rem;
  color: red;
  font-weight: 600;
  margin-top: 1rem;
`;


```
