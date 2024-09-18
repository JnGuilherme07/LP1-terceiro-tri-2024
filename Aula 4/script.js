const nomes = ['Caio', 'Julia', 'Pedro', 'Ana']  //Uma variavel que guarda varios dados
  //posição =    0         1        2      3  ...

  //exemplo:
  console.log(nomes[0]) // Mostrará: Caio

//--------------------------------------------------------------------------------
  // Outros exemplos:

function gerarAleatorio() {
    const numeroAleatorio = Math.floor (Math.random() *4)
    return numeroAleatorio //Devolve o Valor
}

function sortearNome() {
    let numeroSorteado = gerarAleatorio()
    console.log(nomes[numeroSorteado])
}

