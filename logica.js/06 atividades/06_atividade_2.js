let prompt = require("prompt-sync")()

let numero1 = parseFloat(prompt("digite o primeiro numero: "))
let numero2 =parseFloat(prompt("digite o segundo numero: "))



if(numero1 > numero2){
 console.log("o primeiro numero é maior que o segundo" + numero1 + " é maior que " + numero2)

}else if( numero2 > numero1){
    console.log("o segundo numero é maior que o primeiro numero" + numero2 + " é maior que " + numero1)
}