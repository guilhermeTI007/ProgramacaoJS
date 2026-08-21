let prompt = require("prompt-sync")()

let altura = parseFloat(prompt("digite a sua altura: "))
let peso = parseFloat(prompt("digite o seu peso: "))

let IMC = peso / (altura * altura)

if(IMC < 16){
 console.log(" voce esta com magreza grave")
}else if(IMC == 16 && IMC <17 ){
console.log(" voce esta com magreza moderada")

}else if(IMC == 17 && IMC <18.5 ){
    console.log(" voce esta com magreza leve")
}else if(IMC == 18.5 && IMC <25 ){
    console.log(" voce esta saudavel")

}else if(IMC == 25 && IMC <30 ){
    console.log(" voce esta com sobrepeso")
}else if(IMC == 30 && IMC <35 ){
    console.log(" voce esta com obesidade grau 1")
}else if(IMC == 35 && IMC <40 ){
    console.log(" voce esta com obesidade grau 2")
}else{
    console.log(" voce esta com obesidade grau 3")
}