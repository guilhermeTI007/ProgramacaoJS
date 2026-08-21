let prompt = require("prompt-sync")()


let telefone = prompt("Telefonou para a vítima?")
let local = prompt("Esteve no local do crime?")
let moraVitima = prompt("Mora perto da vítima?")
let devia = prompt("Devia para a vítima?")
let trabalhouVitima = prompt("Já trabalhou com a vítima?")

let totalStatus =
    (telefone == "sim") +
    (local == "sim") +
    (moraVitima == "sim")+
    (devia == "sim")+
    (trabalhouVitima == "sim")

if ( totalStatus == 5 ){
    console.log("VOCE É ASSASSINO")
}else if(totalStatus == 4 || totalStatus == 3){
    console.log("VOCE É CUMPLICE")
}else if(totalStatus == 2){
    console.log("VOCE É SUSPEITO")
}else{
    console.log("VOCE É INOCENTE")
}