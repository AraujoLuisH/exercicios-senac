//PTI - Algoritimos e Progamação
// Tema  - O Uso dos algoritimos e da programação nas tarefas do cotidiano

let indice = 1
let valorGas
let valorAlc
let razao

console.log("Bem vindo ao Abasteça-Simu 1.0");

while ( indice === 1){
  console.log(" ");
  valorGas = prompt("Digite o valor da GASOLINA, utilize o ponto para separar os centavos: ");
  valorAlc = prompt("Digite o valor do ETANOL, utilize o ponto para separar os centavos: ");

  razao = valorAlc / valorGas;

  if( razao >= 0.8 ){
      console.log(" ")
      console.log("Vale apena abastecer com Gasolina!!!")
  } else if (razao <= 0.7){
    console.log(" ")
    console.log("Vale apena abastecer com Etanol!!!")
  } else {
    console.log(" ")
    console.log("Tanto faz abastecer com Etanol ou Gasolina!!!")}

  console.log(" ");
  encerrar = prompt("Deseja executar um novo cálculo? Digite: ( 1 ) para SIM ou ( 3 ) para NÃO e encerrar: ");
  
  indice = parseInt(encerrar);
}
console.log("Fim da Simulação");