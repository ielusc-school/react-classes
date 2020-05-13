import React from 'react';
import useGet from './api/useGet';

const url = 'https://cotacao-react.firebaseio.com/habibs.json'
const randomUserAPI = 'https://randomuser.me/api/?results=10'

function App() {
  const data = useGet(url);
  const user = useGet(randomUserAPI);
 
  return (
    <div>
      <h1>Habibs App</h1>
      {JSON.stringify(data)}
      {data.loading && <p> Carregando informações da API....</p> }
      <pre>
        { JSON.stringify(user)}
      </pre>
    </div>
  );
}

export default App;
