## Ambiente


Primeiro, precisamos ter o Node.js instalado em nossa máquina.

Para obter o Node.js, acesse https://nodejs.org

As ferramentas mais comuns para se trabalhar com transpilação do JSX são Babel e WebPack.

#### Babel

A ferramenta mais comum para fazer transpilação de JavaScript hoje em dia é o Babel. Ele nasceu com o nome "6to5".

Sua principal função era permitir que a gente escrevesse JavaScript com as sintaxes inseridas no EcmaScript 6, posteriormente renomeado para ES2015. Como os navegadores da época não davam suporte ainda ao ES6, o 6to5 convertia nosso código em JavaScript que os navegadores entendiam, o EcmaScript 5.

Como foi anunciado que o JavaScript agora teria atualizações menores e com mais frequência, não fazia sentido manter o nome da ferramenta como 6to5. Então rebatizaram a ferramenta para Babel.

Hoje em dia ele não é apenas utilizado para transpilar ES2015, ES2018, etc, mas também é usado para transpilar JSX.

Para conhecer melhor, acesse: https://babeljs.io/

#### WebPack

O WebPack é um construtor de módulos. Isso significa que ao invés de ficarmos importando nossos scripts no HTML, podemos criar arquivos bem separados, como módulos, e importá-los, assim como faríamos no Back End.

Ok, isso o Browserify já fazia. O WebPack vai além. Ele também aceita que a gente importe HTML, CSS, Sass, Imagens, CoffeeScript, etc.

Em conjunto com o Babel nós podemos fazer com que o WebPack transpile o JSX antes dele arrumar as dependências do projeto para poder formar o pacote que será entregue ao usuário.

Além disso, o WebPack também é capaz de subir um servidor com LiveReload para podermos acessar nossas páginas.

Para conhecer melhor, acesse: https://webpack.js.org/

Caso queira saber mais sobre WebPack, não se esqueça de conferir nosso curso completo de WebPack, onde aprendemos várias funcionalidades e técnicas que vão ajudar no seu trabalho.

> npx create-react-app meu-app