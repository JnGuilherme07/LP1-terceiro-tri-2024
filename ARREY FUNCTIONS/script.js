function adicionar(){
    const personagens = ['Steven', 'Ametista', 'Perolas', 'Peridote']
    const novoPersonagem = document.getElementById("personagem").value

    personagens.push(novoPersonagem) //Coloca no final
    personagens.unshift(novoPersonagem) //Cloca na frente
    personagens.pop() //Deleta o ultimo
    personagens.shift(novoPersonagem) //Deleta o primeiro
    personagem[2] = 'Garnet' //Atualizar um valor

    console.log(personagens)
}