let prompt = require("prompt-sync")()

/*
let nome = prompt("ola digite o seu nome ")
let sobrenome = prompt("digite o seu sobrenome ")
let idade = prompt("ola digite o sua idade ")
let nome_completo = nome + " " + sobrenome
console.log("Seja bem vindo " + nome_completo + " voce tem "+ idade+ " anos XD")
*/




let produto1 = prompt("ola digite o nome de um produto ")
let preco = prompt("digite o valor do " + produto1)
let produto2 = prompt("digite o nome do outro produto " )
let preco2 = prompt("digite o preço do " + produto2)

console.log(produto1 + " - R$" + preco)
console.log(produto2 + " - R$" + preco2)