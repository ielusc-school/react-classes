##  PersonFE

Crie nosso diretório da aplicação `person-fe` dentro da `PersonAPP`

1. Acesse o diretório
> cd personApp

2. crie nossa aplicação React para consumir.
> create-react-app person-fe

3. Agora é para você localizar dentro do diretório PersonAPP, duas pastas:
 - person-api: nossa api fake de users
 - person-fe: nosso cliente com react

4. Para ganharmos velocidade no desenvolvimento de interface, para termos responsividade 
e alguns componentes ganharemos isso de bandeja com `Bootstrap` 
e a parte comportamental ficará a encargo do `React`.

5. Instalando as nossas dependências no projeto `person-fe`  abra o arquivo package.json e 
adicione as seguintes libs em `dependencies`:

```
  "axios": "0.18.0",
  "bootstrap": "4.1.1",
  "font-awesome": "4.7.0",
  "react-router": "4.2.0",
  "react-router-dom": "4.2.2"
```

6. Dentro de `src` vamos criar um diretório `components`
7. Dentro desse diretório `components` vamos criar um novo diretório `template`
8. Dentro desse diretório iremos criar alguns arquivos para compor nossa aplicação, sendo assim crie dentro de template o diretório `logo`:
 - Logo.css
 - Logo.jsx

9. Dentro de `template`, crie o diretório `header`;
- Header.css
- Header.jsx

10. Dentro de `template`, crie o diretório `nav`;
- Nav.css
- Nav.jsx

11. Dentro de `template`, crie o diretório `main`;
- Main.css
- Main.jsx

12. Dentro de `template`, crie o diretório `footer`;
- Footer.css
- Footer.jsx

13. Vamos criar dentro de `src` um novo diretório que é o `main`
 - App.css
 - App.jsx

 14. Acesse o arquivo index.js dentro de `src` e altere o path que
 fazemos a chamada para o App.

 > import App from './main/App';

 15. Dentro de `src` remova os seguintes arquivos que são gerados automaticamente pelo React, são:
```
  App.css
  App.js
  App.test.js
  logo.svg
```

16. Abra o diretório `src/main` vamos brincar com o App.css

17. Vamos trabalhar agora com o Logo da nossa aplicação.
 1. Crie um diretório novo dentro de `src` com o nome `assets`




