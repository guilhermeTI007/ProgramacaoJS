let prompt = require("prompt-sync")()

let valor = parseFloat(prompt("digite o valor "))
let desconto = parseFloat(prompt("escolha o desconto "))
desconto = desconto/ 100
let total  = valor * desconto
let valot_com_desconto = valor - total
console.log( valot_com_desconto )