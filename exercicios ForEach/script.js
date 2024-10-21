//exercicio 1



let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
numeroPares = [];

numeros.forEach(function (Pegarnumero) {
    if(Pegarnumero % 2 === 0){
        numeroPares.push(Pegarnumero)
    }


})
    console.log(numeroPares);



//exercicio 2


let nomes = ["João", "Maria", "Carlos", "Ana"];
nomePre = [];

nomes.forEach(function(addNome){

    nomePre.unshift("Sr(a) " + addNome)

})

console.log(nomePre)



//exercicio 3


let numeros = [4, 11, 8, 15, 23, 7, 2];
numeroMaior = [];

numeros.forEach(function (Pegarnumero) {
    if(Pegarnumero > 10){
        numeroMaior.push(Pegarnumero)
    }


})
    console.log(numeroMaior);


//exercicio 4
let palavras = frase.split(" ");
let contador = 0;
let numerosM = [];

palavras.forEach(() => {
  if (maisdez > 10)
    numerosM.push(maisdez)

  contador++;
});

console.log(`Número de palavras: ${contador}`);


//exercicio 5
const nomes = ["ana", "carlos", "maria"];
let nomesM = []

nomes.forEach(function (Maiusculo){
console.log(Maiusculo.toUpperCase())
})
