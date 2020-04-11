# PersonAPI

1. crie nosso diretório da aplicação `personApp`
> mkdir personApp

2. Acesse o diretório
> cd personApp

3. crie nosso diretório para consumir nossa `personAPI`
> mkdir personAPI

4. Acesse o diretório para começarmos.
> cd personAPI

5. Vamos informar que esse projeto será uma "base node", para isso rode o seguinte comando:
> npm init  

6. Ele irá fazer uma série de perguntas apenas dê enter ou insira as respostas que 
julgar necessário, no final ficaremos com algo assim:
```
{
  "name": "person-api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "MIT"
}
```

7. Ele irá perguntar: `Is this OK? (yes) `
> yes

8. Instale o JSON-Server | [Doc Oficial](https://github.com/typicode/json-server)
> npm i --save json-server@0.13.0 -E

**OBS:** 

 `i` é um ALIAS para install

`--save` é para dependencias de desenvolvimento

`-E` é para instalar exatamente essa versão

9. Na raiz do projeto tu vai criar um arquivo `db.json` e insira um objeto JSON com as informações do user, `id, name e email`:

```
{
  "users": [{
  "id": 1,
  "name": "Cintia Santos",
  "email": "cintia.santos@ielusc.br"
  },
  {
    "id": 2,
    "name": "Carlos Santos",
    "email": "carlos.santos@ielusc.br"
  }]
}
```

9. Abra o arquivo package.json e adicione dentro de scrips:

> "start": "json-server --watch db.json --port 5000

```
  "scripts": {
   "start": "json-server --watch db.json --port 5000"
  },
```
Aqui estamos falando que quando for iniciar nosso Back-end ele deverá
rodar atravésde um comando `npm run start` da qual ele irá ficar assistindo
os arquivos do `db.json` na porta `5000`.

10. Rodando nosso APP, então ficaria:
> npm run start

OBS: Ele irá te servir uma webApp na porta 5000 do seu browser.

Isso é tudo que precisamos para fazer nossa API.

