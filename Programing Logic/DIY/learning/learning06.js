// Objects:

const produto = {
  nome: "ipad",
  preco: 5600,
  desconto: 0.15,
  precoComDesconto: function () {
    return this.preco * (1 - this.desconto);
  },
};
produto.marca = "Apple";
produto.codigo = "ABC123";
console.log(produto.precoComDesconto());
console.log(produto.nome);
console.log(produto);
