let prompt = require("prompt-sync")()

let pesoPeixe = parseInt(prompt("digite o peso total dos peixes: "))
let excesso = pesoPeixe - 50

if( pesoPeixe <= 50 ){
    console.log("sem multa")
}else{
    excesso = excesso * 4.25
    console.log(" tera que pagar uma multa de: R$" + excesso)
}
