let num = [5, 8, 2, 9, 3]

/*adicionar um número a posição 3 = num[3] = 6
adicionar um valor a próxima posição num.push(7)
saber quantos elementos tem dentro do vetor num.length()
colocar de maneira ordenada num.sort()
Procura o elemento dentro do vetor '2' num.indexOf(2), caso não encontre o elemento, retorna '-1'
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}

for(let pos = 0; pos <num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

for(let pos in num ) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
