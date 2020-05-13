let vue = new Vue({
  el: "#app",
  data: {
    hello: "Olá Mundo",
  },

  methods: {
    sayHello() {
      this.hello = "estou chamando aqui dentro da minha fn";
    },
  },
});
