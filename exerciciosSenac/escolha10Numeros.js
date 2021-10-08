 /* Exercício nº1, nele pede-se que informe números
 intereios e depois imprimir o maior e o menor */


console.log("Escolha 10 números inteiros!!!!")

let numeros = [];

for (i=1 ; numeros.length <= 9; i++ ){

let adicNum = prompt("Digite o " + i + "º numero" )
numeros.push(adicNum)

}
console.log(" ")
console.log(" Os numeros digitados foram: " + numeros)

console.log(" ")
let min = Math.min(...(numeros))
let max = Math.max(...(numeros))

console.log("O menor valor digitado foi: " + min )
console.log("O maior valor digitado foi: " + max)