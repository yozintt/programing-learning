// 14. Calculadora de Idade
// Crie um programa que:
// 1. Peça o ano de nascimento do usuário.
// 2. Calcule e exiba sua idade atual.

const nasc = 1997;
const anoAtual = new Date().getFullYear();
const idade = anoAtual - nasc;
console.log(`Sua idade atual é ${idade}`);
