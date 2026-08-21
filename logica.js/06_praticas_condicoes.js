let prompt = require("prompt-sync")()


let preco_sp = parseInt(prompt("Digite o valor da passagem para são paulo: "))
let preco_arara = parseInt(prompt("Digite o valor da passagem para araraquara: "))
let preco_seguro = 50
let total = 0
console.log("Escolha o seu destino")
console.log("1 - são paulo por " + preco_sp)
console.log("2 - araraquara por " + preco_arara)
let resposta = parseInt(prompt("Digite uma opção: "))

if( resposta == 1 ){
    total = preco_sp
}else if( resposta == 2 ){
    total = preco_arara
}else{
    console.log("não exite valor e nem a viagem")
}


let seguro = prompt("deseja adicionar um seguro oir mais R$" + preco_seguro + ": " )
if( seguro == "sim"){
    total = total + preco_seguro
}











let cupom = prompt("digite seu cupom de desconto: ")

if (cupom == "Conradito10"){
    let desconto  = total * 0.1
    total = total - desconto
    console.log("parabens voce teve desconto de 10%")
}else{
    console.log("cupom invalido")
}
let promocao = prompt("gostaria de receber promoções por email? ")


if(promocao == "SIM"){
    console.log("obrigado por por se registrar, voce recebera novos emails em breve")
}else{
    console.log("esta bem voce não tera mais promoçoes para voce")
}

console.log("formas de pagamento ")
console.log(" 1 - cartão de credito (acresimo de 5%)")
console.log(" 2 - pix (desconto de 5%)")
resposta = parseInt(prompt("escolha uma opção"))

if(resposta == 1){
    total = total * 1.05
}else { 
   total = total *0.95

}









console.log("o total da viagem é de R$ " + total)











console.log("obrigado e volte sempre")