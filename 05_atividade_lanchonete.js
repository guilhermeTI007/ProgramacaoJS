let prompt = require("prompt-sync")()



console.log("======================================================")
console.log("                   Lanchonete de são carlos           ")
console.log("======================================================\n\n")
let pao = parseFloat((prompt("digite o valor do pão: R$")))
let salsicha = parseFloat((prompt("digite o valor da salsicha: R$ ")))
let pure_de_batata = parseFloat((prompt("digite o valor do purê de batata: R$")))
let queijo = parseFloat((prompt("digite o valor do queijo: R$ ")))
let bacon = parseFloat((prompt("digite o valor do bacon: R$")))

console.log("======================================================")
console.log("           DIGITE O QUANTO DE LUCRO VOCE QUER ")
console.log("======================================================\n\n")
let lucro = parseFloat((prompt("digite o valor do lucro que deseja: " )))


console.log("======================================================")
console.log("                   Cardapio Da Lanchonete             ")
console.log("======================================================\n\n")
console.log("Lucro aplicado: " + lucro + ".00%")

lucro = lucro / 100
let cachorro_quente_com_pure = pao + pure_de_batata+ bacon + salsicha
let cachorro_quente_cremoso = 2 * salsicha + pao + queijo
let cachorro_quente_especial = pao + salsicha + pure_de_batata + queijo + bacon  
let combo_cachorro_quente = cachorro_quente_com_pure + cachorro_quente_cremoso + cachorro_quente_especial

let cachorro_quente_com_pure_lucro = (cachorro_quente_com_pure * lucro) + cachorro_quente_com_pure
let cachorro_quente_cremoso_lucro = (cachorro_quente_cremoso * lucro) + cachorro_quente_cremoso 
let cachorro_quente_especial_lucro = (cachorro_quente_especial * lucro) + cachorro_quente_especial
let combo_cachorro_quente_lucro = (combo_cachorro_quente * lucro) + combo_cachorro_quente



console.log("CACHORRO QUENTE COM PURE") 
console.log("ingredientes: pão. purê de batata, bacon e salsicha " ) 
console.log("Preço de custo: R$ " + cachorro_quente_com_pure) 
console.log("Preço de venda: R$" + cachorro_quente_com_pure_lucro) 
console.log("----------------------------------------------------------\n") 

console.log("CACHORRO QUENTE CREMOSO") 
console.log("ingredientes: pão. duas salsichas e queijo " ) 
console.log("Preço de custo: R$ " + cachorro_quente_cremoso) 
console.log("Preço de venda: R$" + cachorro_quente_cremoso_lucro) 
console.log("----------------------------------------------------------\n") 

console.log("CACHORRO QUENTE ESPECIAL") 
console.log("ingredientes: pão. purê de batata, bacon,  salsicha  e queijo" ) 
console.log("Preço de custo: R$ " + cachorro_quente_especial) 
console.log("Preço de venda: R$" + cachorro_quente_especial_lucro) 
console.log("----------------------------------------------------------\n") 

console.log("COMBO DE CACHORROS QUENTES") 
console.log("ingredientes: pão. úrê de batata, bacon e salsicha " ) 
console.log("Preço de custo: R$ " + combo_cachorro_quente) 
console.log("Preço de venda: R$" + combo_cachorro_quente_lucro) 
console.log("----------------------------------------------------------\n") 

