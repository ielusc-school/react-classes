### React DOM

O React é uma biblioteca desenvolvida pelo time do Facebook com o intuito de se aplicar o conceito de componentização durante o desenvolvimento de uma aplicação web. Isso quer dizer que, com o auxílio do React e do JavaScript, você poderá desenvolver componentes reutilizáveis na interface de sua aplicação web. Isso certamente acelera e facilita o trabalho que o desenvolvedor teria normalmente para desenvolver a interface da aplicação web.

Essa ideia de componentização na verdade não é nova. Ela já era usada há muitos anos no desenvolvimento de aplicações Desktop. Porém, no começo da Internet, o desenvolvimento Web era totalmente voltado a sites simples, criados para exibir informações estáticas.

O próprio Facebook define o React como sendo "uma biblioteca declarativa, eficiente e flexível baseada em JavaScript para construção de interfaces".

Como você pode reparar, o React se baseia na ideia de criarmos componentes que podem ser reutilizados em toda a aplicação e até em outras aplicações.

![](https://d2v0x26thbzlwf.cloudfront.net/prod/382/img/rId5musskyvq.haz.png)

Veja a imagem acima. Ela apresenta um menu de navegação. Imagine criar um componente que contenha todo o código necessário para esse menu e, quando quisermos utilizá-lo, bastaria chamá-lo por uma tag criada por nós mesmos como "<MeuMenu />". Assim fica fácil reutilizá-lo onde quisermos, além da nossa View ficar mais limpa ao invés de várias <div> para todos os lados.

O React tem boa performance, pois evita acessar diretamente o DOM.

Como o objetivo do React é focar na criação de componentes, muitas funcionalidades ficam por conta dos desenvolvedores como: requisições, roteamento, internacionalização, etc.

Isso pode até parecer ruim, mas na verdade nos dá flexibilidade para integrar com qualquer biblioteca que quisermos.

# Quem usa React

Várias startups e gigantes do mundo todo usam React, pois sua versatilidade está revolucionando o modo como criamos nossas aplicações tanto web quanto mobile.

Isso mesmo! Com React também podemos desenvolver aplicações nativas para dispositivos móveis, como é o caso do Instagram. Isso nós veremos no curso de React Native.


![adicionar aqui as imagens das empresas principais que adotam React]()

## DOM e Virtual Dom

O DOM (Document Object Model) é uma interface gerida pelos navegadores entre o HTML e o JavaScript. Quando você manipula um elemento HTML através de código JavaScript, ele acessa este elemento justamente através do DOM. É como se cada nó do DOM apontasse para o seu respectivo elemento HTML e o JavaScript, para evitar ficar realizando parse do HTML toda hora em que for necessária a manipulação de HTML, o representasse através desta estrutura virtual.

Repare no exemplo abaixo. Na ilustração, nós temos uma representação básica do que seria uma árvore DOM montada por um navegador qualquer.

https://d2v0x26thbzlwf.cloudfront.net/prod/382/img/rId7vjosrnpw.k3a.png

Sendo assim, toda vez que um código JavaScript precisar acessar um elemento HTML, quer seja para realizar uma modificação ou mesmo somente verificar como está o estado atual do elemento, ele "navega" através da árvore DOM para encontrar o elemento e, após encontrá-lo na árvore DOM, ele consegue encontrar sua correspondência dentro do HTML.

https://d2v0x26thbzlwf.cloudfront.net/prod/382/img/rId8qzme1vs5.vwo.png


Se quisermos deixar o HTML dinâmico, teremos que utilizar a árvore DOM para realizar as modificações necessárias nos elementos HTML. O problema é que o acesso e navegação dentro do DOM é muito lenta.

Para melhorar este aspecto, o React mantém uma cópia do DOM em memória, chamada de Virtual DOM. Quando algum dado é alterado e é necessária uma alteração na view (ou seja, no seu HTML), o React verifica pelo Virtual DOM quais as partes que devem ser alteradas. Com isso, ele acessa o DOM o menor número possível de vezes, alterando unicamente onde é necessário. Isso garante uma ótima velocidade às aplicações que utilizam a estratégia do Virtual DOM, como React e Vue.js.


## Resumo 

O que é React?

O React é uma biblioteca criada pelo Facebook para se criar interfaces de usuário baseadas em componentes.

O React usa uma cópia do DOM em memória (Virtual DOM) para fazer modificações, acessando o DOM o menor número de vezes possível.

Principais funções
Podemos criar elementos com "React.createElement()", onde passamos o nome do elemento, um objeto com propriedades e o conteúdo do elemento.

> ReactDOM.render(element, container[, callback])

> React.createElement('h1', {id: "meuTitulo"}, "Hello World!"),


Iniciamos o React executando "ReactDOM.render()", passando primeiro um elemento a ser renderizado e um elemento onde iremos inserir tal elemento.


```
ReactDOM.render(
    React.createElement('h1', {id: "meuTitulo"}, "Hello World!"),
    document.querySelector("#minhaDiv")
);

```

> [Exemplo](https://codepen.io/pen/?editors=1010)

O Que é React-DOM?

O pacote react-dom provê métodos específicos para o DOM que podem ser usados no nível superior de sua aplicação como uma válvula de escape para sair do modelo do React se você precisar. A maioria de seus componentes não devem precisar deste módulo.

- render()
- hydrate()
- unmountComponentAtNode()
- findDOMNode()
- createPortal()

> [Documentação sobre Render](https://pt-br.reactjs.org/docs/react-dom.html#render)

