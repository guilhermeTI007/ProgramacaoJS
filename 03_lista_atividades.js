/*
### ----- Atividade 0:

Desenhe no terminal um retângulo usando apenas o comando do console.log
 _____
|     |
|     |
|     |
|_____|
*/
console.log(" _____")
console.log("|     |")
console.log("|     |")
console.log("|     |")
console.log("|     |")
console.log("|_____|" +"\n")

/*
### ----- Atividade 1:

Crie uma variável chamada `cidade` e outra chamada `estado`.
Mostre na tela a frase: "Eu moro em X - Y"

Substitua X pelo valor da variável `cidade` e Y pelo valor da variável `estado`.

*/
let cidade = "São carlos"
let estado = "São Paulo"
console.log("EU moro em " + cidade +" "+ estado +"\n" )



/*
### ----- Atividade 2:

Crie duas variáveis chamadas `numero1` e `numero2`.
Atribua valores numéricos a elas.

Crie uma variável chamada `soma` para armazenar o resultado da soma dos dois números.

Mostre o resultado da soma na tela.

*/
let numero1 = 10
let numero2 = 20
let soma = numero1 + numero2

console.log("a soma sera " +soma +"\n")

/*
### ----- Atividade 3:

Crie uma variável chamada `idade`.
Mostre na tela a mensagem: "Olá, você tem X anos e daqui a 10 anos terá Y."

Substitua X pelo valor da idade atual e Y pela idade que a pessoa terá daqui a 10 anos.

*/
let idade = 50
let futuro = idade + 10
console.log("Ola voce tem " + idade + " anos e daqui a 10 anos tera "+ futuro +" anos" +"\n")


/*
### ----- Atividade 4:

Crie uma variável chamada `numero`.

Calcule o dobro e o triplo desse número.
Armazene os resultados em duas novas variáveis.

Mostre na tela o número original, seu dobro e seu triplo.

*/

let numero = 24 
let dobro = 2 * numero 
let triplo = 3 * numero
console.log(numero)
console.log(dobro)
console.log(triplo+"\n")
/*
### ----- Atividade 5:

Crie variáveis para armazenar o nome e o preço de dois produtos diferentes.

Mostre na tela o nome e o preço de cada produto individualmente.
Em seguida, calcule e mostre o valor total dos dois produtos.

*/

let produto1 ="camisa"
let produto2 = "chinelo"
let preco1 = 12.90
let preco2 = 10.10
let totalPrecos = preco1 +preco2
console.log(produto1 + " seu valor é: " + preco1)
console.log(produto2 + " seu valor é: " + preco2)
console.log("os dois juntos "+ produto1 + produto2 +" o valor sera: " + totalPrecos +"\n")

/*
### ----- Atividade 6:

Crie uma variável chamada `salario`.

Considere que a pessoa receberá um aumento de R$ 500 e um desconto do INSS de R$ 250
Calcule o novo salário e armazene o resultado em uma nova variável.

Mostre na tela o salário atual e o novo salário.

*/

let salario = 2000
console.log("salario atual " + salario)
let acrescimo = 500
let inss = 250
salario = salario + acrescimo - inss
console.log("salario novo " + salario +"\n")


/*
### ----- Atividade 7:

João recebe R$ 100 de mesada e gastou R$ 35.

Crie variáveis para representar o valor da mesada e o valor gasto.
Calcule quanto dinheiro sobrou e armazene o resultado em uma nova variável.

Mostre na tela o valor da mesada, o valor gasto e quanto dinheiro sobrou.

*/
let recebeu = 100
let gasto = 35
let dinheiroSobrou = recebeu - gasto
console.log("a mesada era " + recebeu + " joão gastou " + gasto + " e sobrou " + dinheiroSobrou +"\n")





/*
### ----- Atividade 8:

Crie duas variáveis chamadas `base` e `altura`.

Calcule a área de um retângulo utilizando esses dois valores.
Armazene o resultado em uma nova variável.

Mostre na tela o valor da base, da altura e da área calculada.

*/

let base = 50
let altura = 25
let area = base * altura
console.log("a area é " + base +" vezes" +altura+ "e o resultado é " +area +"\n")



/*
### ----- Atividade 9:

Crie uma variável chamada `celsius` para armazenar uma temperatura em graus Celsius.
Converta essa temperatura para Fahrenheit e para Kelvin e mostre na tela os valores da conversão

*/

let celsius = 23
let fahrenheit = (celsius * 1.8) + 32
let kelvin = celsius + 273.15

console.log("temperatura em celcius é " + celsius )
console.log("temperatura em Fahrenheit é " + fahrenheit )
console.log("temperatura em kelvin é " + kelvin +"\n")
/*
### ----- Atividade 10:

Crie uma variável contendo uma quantidade de horas.

Calcule quantos minutos correspondem a essa quantidade de horas.
Calcule também quantos segundos correspondem a essa quantidade de horas.

Mostre na tela a quantidade de horas, de minutos e de segundos.

Exemplo:

3 horas correspondem a 180 minutos ou 10800 segundos.

*/

let Horas = 5
let Minutos = Horas * 60
let Segundos = Horas * 3600

console.log(Horas+ " horas equivalem a " + Minutos +" minutos ou "+ Segundos +" segundos" +"\n")


/*
### ----- Atividade 11:

Crie duas variáveis de qualquer tipo.

Em seguida, faça com que o valor da primeira variável seja armazenado na segunda variável,
e que o valor original da segunda variável seja armazenado na primeira variável.

Ao final, mostre o valor das duas variáveis na tela.

*/

let variavel1 = 23
let variavel2 = 98
let troca = variavel1
variavel1 = variavel2
variavel2 = troca
console.log("valor da variavel 1 é " + variavel1)
console.log("valor da variavel 2 é " + variavel2 +"\n")





/*
### ----- Atividade 12:

Crie variáveis para armazenar a distância percorrida por um carro,
a quantidade de litros de combustível utilizada e o preço do litro do combustível.

Calcule quantos quilômetros o carro percorreu para cada litro de combustível.

Calcule também quanto foi gasto com combustível durante a viagem.

Mostre na tela a distância percorrida, a quantidade de litros utilizados,
o consumo do carro e o valor total gasto com combustível.

*/

let distancia = 500
let litro = 50
let precoLitro = 5.25 

let consumoLitro = distancia / litro
let valorGastoLitro = litro * precoLitro

console.log ("Distancia percorrida " + distancia + " kilometros")
console.log ("Combustivel utilisado " + litro + " litros")
console.log ("consumo do carro " + consumoLitro+ " kilometro por litro")
console.log ("valor total gasto " + valorGastoLitro + " reais ")
