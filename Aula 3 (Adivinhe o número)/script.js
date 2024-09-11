function gerarNumeroAleatorio(){
    const numero_aleatorio = Math.floor(Math.random() * 11)
    return numero_aleatorio
}

function jogar(){
    const pegar_numero_aleatorio = gerarNumeroAleatorio()
    console.log(pegar_numero_aleatorio)

    do{
        const palpite = parseInt(prompt('Adivinhe o Número').value);

        if(palpite != pegar_numero_aleatorio){
            alert("Putz! Você errou...")
        }
        else{
            alert("parabéns!")
        }
    }
    while (palpite != pegar_numero_aleatorio)
}
jogar()