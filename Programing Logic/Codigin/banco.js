/*
1 - Crie um banco de dados(const) com uma lista de usuários {name: string, user: string, password: string, value: number}
2 - Faça uma função de autenticação que recebe como parâmetros user e password
3 - Faça uma função que retira ou adiciona valores na conta de um usuário
4 - Faça uma função que recebe como parâmetro um user, uma senha, e o valor que vai ser adicionado ou retirado da conta, depois realize essas ações
5 - criar uma funçao fluxo Completo, que vai cadastrar um usuario novo, fazer login, depositar e mostrar o usuario novo com o valor atualizado!
*/

const bancoDeDados = [
  {
    name: "Yoander",
    user: "Yozin",
    password: "Chitaozinho",
    value: 1000,
  },
  {
    name: "Amanda",
    user: "Amandps",
    password: "Patati",
    value: 1000,
  },
  {
    name: "Johannes",
    user: "Aho7",
    password: "Chororo",
    value: 1000,
  },
];

function autenticacao(user, password) {
  for (let i = 0; i < bancoDeDados.length; i++) {
    if (user === bancoDeDados[i].user) {
      console.log(`Usuario: ${bancoDeDados[i].user}`);
      if (password === bancoDeDados[i].password) {
        console.log(`usuario logado!`);
        return bancoDeDados[i].value;
      }
    }
  }
}

function deposito(user, amount) {
  for (let i = 0; i < bancoDeDados.length; i++) {
    if (user === bancoDeDados[i].user) {
      bancoDeDados[i].value += amount;
    }
  }
}

function registrar(name, user, password) {
  bancoDeDados.push({ name: name, user: user, password: password, value: 0 });

  return bancoDeDados;
}

const getUser = (user) => {
  for (let i = 0; i < bancoDeDados.length; i++) {
    if (user === bancoDeDados[i].user) {
      return bancoDeDados[i];
    }
  }
};

const fluxoCompleto = (name, user, password, deposit) => {
  registrar(name, user, password, deposit);
  autenticacao(user, password);
  deposito(user, deposit);
  return getUser(user);
};
console.log(fluxoCompleto("Mariana", "nega feia", "MariaMole", 100));
