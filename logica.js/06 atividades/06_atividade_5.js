let prompt = require("prompt-sync")()


let time1 =prompt("digite o primeiro time: ")
let time2 =prompt("digite o segundo time: ")

let gols1 = parseInt(prompt("quantos golls o time " + time1 + " fez? "))
let gols2 = parseInt(prompt("quantos golls o time " + time2 + " fez? "))

if(gols1 > gols2 ){
    console.log(" o vencedor é o time " + time1)
}else if (gols2 > gols1 ){
    console.log(" o vencedor é o time " + time2)
}else{
    console.log(" o jogo acabou empatado")
}