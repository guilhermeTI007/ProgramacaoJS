let prompt = require("prompt-sync")()

let ano = parseInt(prompt("digite o ano que voce nasceu "))
let idade = 2026 - ano

console.log(" voce tem " + idade)

let nota1 = parseInt(prompt("digite a primeira nota "))
let nota2 = parseInt(prompt("digite a segunda  nota "))
let nota3 = parseInt(prompt("digite a terceira nota "))
let media = (nota1 + nota2 + nota3)/3

console.log("a media das notas é " + media)


let produto = prompt("digite o nome do produto ")
let preco = parseInt(prompt("digite o valor do " + produto))
let quantidade = parseInt(prompt("digite a quantidade do  " + produto))
let lucro = quantidade * preco

console.log("se voce vender todo o estoque de " + produto + " voce tera um lucro de " + lucro)