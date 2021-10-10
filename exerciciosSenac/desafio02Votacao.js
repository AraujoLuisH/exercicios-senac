/* Exercício-02 Nesse exercício a proposta é elabora uma Algoritimo que receba votos faça o processamento e apresente as porcentagems e a totalidade dos votos. */

/* OBS!!! Para que a votação se encerre, insira o numero 789456 na votação
    Issp simula como se fosse um Funcionario encerrando a votaçaão*/

//declaração das variaveis do sistema;
let candidatoA = 0
let candidatoB = 0
let candidatoC = 0
let votoNulo = 0
let votoBranco = 0
let totalVotos = 0
let encerraVoto = "on"
let porcentoA, porcentoB, porcentoC, porcentoNulo, porcentoBranco


console.log("Digite o número de seu candidato e pressione ENTER!: ")
console.log("10-CandidatoA; 20-CandidatoB; 30-CandidatoC; 40-Nulo; 50-Branco")


//Estrutura de repetição, com condicional

while (encerraVoto === "on"){
    console.log(" ")
    let select = prompt("Digite seu voto")

    if(select === "10"){
      console.log("Você está votando em candidato A!")
      let confirmaA = prompt("Digite (s) para CONFIRMAR ou (n) para CORRIGIR e pressione ENTER!")
        if(confirmaA === "s"){
        candidatoA = candidatoA + 1
        console.log(" ")
        console.log("VOTAÇÃO CONCLUIDA COM SUCESSO!!!")
        }else {console.log("Reiniciando Votação...")}
    }

    if(select === "20"){
      console.log("Você está votando em candidato B!")
      let confirmaB = prompt("Digite (s) para CONFIRMAR ou (n) para CORRIGIR e pressione ENTER!")
        if(confirmaB === "s"){
        candidatoB = candidatoB + 1
        console.log(" ")
        console.log("VOTAÇÃO CONCLUIDA COM SUCESSO!!!")
        }else {console.log("Reiniciando Votação...")}
    }

    if(select === "30"){
      console.log("Você está votando em candidato C!")
      let confirmaC = prompt("Digite (s) para CONFIRMAR ou (n) para CORRIGIR e pressione ENTER!")
        if(confirmaC === "s"){
        candidatoC = candidatoC + 1
        console.log(" ")
        console.log("VOTAÇÃO CONCLUIDA COM SUCESSO!!!")
        }else {console.log("Reiniciando Votação...")}
    }

    if(select === "40"){
      console.log("Você está votando NULO!")
      let confirmaNulo = prompt("Digite (s) para CONFIRMAR ou (n) para CORRIGIR e pressione ENTER!")
        if(confirmaNulo === "s"){
        votoNulo = votoNulo + 1
        console.log(" ")
        console.log("VOTAÇÃO CONCLUIDA COM SUCESSO!!!")
        }else {console.log("Reiniciando Votação...")}
    }

  if(select === "50"){
      console.log("Você está votando EM BRANCO!")
      let confirmaBranco = prompt("Digite (s) para CONFIRMAR ou (n) para CORRIGIR e pressione ENTER!")
        if(confirmaBranco === "s"){
        votoBranco = votoBranco + 1
        console.log(" ")
        console.log("VOTAÇÃO CONCLUIDA COM SUCESSO!!!")
        }else {console.log("Reiniciando Votação...")}
    }

  if(select === "789456"){
      console.log("ATENÇÃO!! Deseja realmente encerrar a votação e apurar os votos?")
      let confirmaEncerra = prompt("Digite (s) para CONFIRMAR ou (n) para CORRIGIR e pressione ENTER!")
        if(confirmaEncerra === "s"){
        encerraVoto = "off"
        console.log("Votação encerrada!!")
        }
    }

if (encerraVoto === "on"){
  console.log(" ") 
  console.log("!!! Por favor Digite uma das opcões e pressione ENTER !!!")
  
  console.log("Digite o número de seu candidato e pressione ENTER: ")
console.log("10-CandidatoA; 20-CandidatoB; 30-CandidatoC; 40-Nulo; 50-Branco")}   
}
//Fim da estrutua do FOR, abaixo começa a apuração dos votos


console.log(" ")
console.log("Fim da votação !")  
console.log(" ")

totalVotos = candidatoA + candidatoB + candidatoC + votoBranco + votoNulo
porcentoA = parseInt(candidatoA * 100 / totalVotos)
porcentoB = parseInt(candidatoB * 100 / totalVotos)
porcentoC = parseInt(candidatoC * 100 / totalVotos)
porcentoBranco = parseInt(votoBranco * 100 / totalVotos)
porcentoNulo = parseInt(votoNulo * 100 / totalVotos)


console.log("O Total de votos foi: "+ totalVotos)
console.log("Votos Canditado A: " + candidatoA + " Porcentagem dos votos: " + porcentoA + "%")
console.log("Votos Canditado B: " + candidatoB + " Porcentagem dos votos: " + porcentoB + "%")
console.log("Votos Canditado C: " + candidatoC + " Porcentagem dos votos: " + porcentoC + "%")
console.log("Votos em Branco: " + votoBranco + " Porcentagem dos votos: " + porcentoBranco + "%")
console.log("Votos em Nulo: " + votoNulo + " Porcentagem dos votos: " + porcentoNulo + "%")