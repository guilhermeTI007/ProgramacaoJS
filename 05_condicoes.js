let prompt = require("prompt-sync")()

console.log("bem vindo")
let idade = parseInt(prompt(" digite sua idade"))
// != diferente 
if(idade >= 18 ){
    console.log("voce tem idade para tirar a CNH")
}else{
    console.log("voce é menor de idade")
}