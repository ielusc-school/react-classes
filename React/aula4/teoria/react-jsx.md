### JSX 

[Documentação OFicial](https://pt-br.reactjs.org/docs/introducing-jsx.html)


- Opcional
- Separado
- Transpilado / Babel
- Scape {
} 
- HTML vs JSX
 - usar ClassName
 - usar htmlFor
 - style = {{color: '#000', fontSize: '10px', }}
- todas as tags devem ser fechadas
- atributos são camelCase



#### O que é JSX?
O JSX nos permite escrever algo como HTML (ou XML) no meio do nosso código JavaScript, que após transpilado produz elementos do React.

É uma extensão que nos permite escrever código parecido com XML no meio do JavaScript.

```
const myTitle = "TreinaWeb";
<div>{ myTitle }</div>

```

> Sintaxe do JSX

Para dar um "escape" para executar JavaScript, basta usar chaves:

Condições precisam ser escritas com operadores ternários:

```
<button>
    {
        isOpen ? "Fechar" : "Abrir"
    }
</button>
```

Por ser JavaScript, comentários devem ser escritos como comentários de JavaScript, e não HTML.


{/* comentário */}

Outros pontos que não podemos esquecer:

var meuEstilo = {"fontSize": "15px", "marginTop": "1em"};
<span style={meuEstilo} ></span>


A palavra "class" e "for" são reservadas no JavaScript. Para se criar uma classe, em sua tag utilize a palavra "className", e para "for", "htmlFor".
Style deve ser um objeto e o nome dos atributos, ao invés de serem separados por traço, devem estar em camelCase:
No HTML5 algumas tags não precisam ser fechadas. No JSX todas precisam
Os atributos são escritos em camelCase, como o onclick:
<button onClick={minhaFuncao} >Clique Aqui</button>



### O que é transpilação?

Na aula passada vimos sobre o JSX, mas ele não é suportado pelos navegadores. Temos que fazer uma transpilação do nosso código para JavaScript, permitindo que o navegador entenda nosso código.

Essa transpilação seria como uma "conversão". Lembre-se que foi mostrado um JSX e depois foi dito que ele será transformado em JavaScript.

Seria como uma compilação. Compilação é um termo genérico usado para indicar quando temos um código e transformamos ele em uma outra linguagem, como é o caso do C++ ser compilado para linguagem de máquina.

A Transpilação é um termo usado para indicar quando transformamos um código de uma linguagem para uma outra linguagem com um nível similar de abstração. No caso, estamos apenas transformando um "JavaScript com XML" para um JavaScript puro.

Outros exemplos de transpilação é o CoffeeScript para JavaScript, Sass para CSS ou até mesmo C++ para C.

https://stackoverflow.com/questions/34737898/a-simple-hello-world-in-react-js-not-working/41623601#41623601

https://medium.com/@to_pe/how-to-add-react-to-a-simple-html-file-a11511c0235f

https://medium.com/jeremy-gottfrieds-tech-blog/tutorial-how-to-deploy-a-production-react-app-to-heroku-c4831dfcfa08

