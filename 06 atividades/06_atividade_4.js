let prompt = require("prompt-sync")()

let pesoPeixe = parseInt(prompt("digite o peso total dos peixes: "))
let excesso = pesoPeixe - 50
let valorPeixe = 5.5
if( pesoPeixe <= 50 ){
    valorPeixe = valorPeixe * pesoPeixe
    console.log("sem multa,valor total é " + valorPeixe)
}else{
    excesso = excesso * 4.25
    valorPeixe = valorPeixe * pesoPeixe + excesso
    console.log(" tera que pagar uma multa de: R$" + excesso +" total apagar é R$" + valorPeixe)
}
