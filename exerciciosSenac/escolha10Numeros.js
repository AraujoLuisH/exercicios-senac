 /* Exercício nº1, nele pede-se que informe números
 intereios e depois imprimir o maior e o menor */


console.log("Escolha 10 números inteiros!!!!")

var numeros = [];

for (i=1 ; numeros.length <= 9; i++ ){

var adicNum = prompt("Digite o " + i + "º numero" )
numeros.push(adicNum)

}
console.log(" ")
console.log(" Os numeros digitados foram: " + numeros)

console.log(" ")
var min = Math.min(...(numeros))
var max = Math.max(...(numeros))

console.log("O menor valor digitado foi: " + min )
console.log("O maior valor digitado foi: " + max)