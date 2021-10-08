let nota1, nota2, nota3, nota4, media, notaSoma, aluno
let aprov = "Ual !!! Parabens você foi aprovado"
let reprov = "Infelizmente você foi reprovado"


console.log("Sistema EducaNetSimu 1.0")
console.log(" ")

aluno = prompt("Digite seu Nome")
console.log("Bem vindo " + aluno)
console.log(" ")

nota1 = prompt("Digite a nota de Matemática")
nota2 = prompt("Digite a nota de Português")
nota3 = prompt("Digite a nota de Ciências")
nota4 = prompt("Digite a nota de História")

notaSoma = parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4) 

console.log(" ")
console.log("Sua nota total é: " + notaSoma)

media = notaSoma / 4
console.log(" ")
console.log("Sua média é: " + media)

if (media >= 7){
  console.log(aprov)
}else{
  console.log(reprov)
}