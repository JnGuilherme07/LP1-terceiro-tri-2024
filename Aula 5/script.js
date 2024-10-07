function escolhaOponente(){
    const jokenpo = ["Pedra", "Papel","Tesoura" ]
    let numeroAleatorio = Math.floor(Math.random() * jokenpo.length)
  

    return jokenpo [numeroAleatorio]
}

function escolhaJogador(botaoClicado){
    return botaoClicado;
}

function Jogar(escolhaUsuario){
    const jogadaPC = escolhaOponente()
    const escolhaPlayer = escolhaJogador(escolhaUsuario)

    

    if(jogadaPC === escolhaPlayer){
        alert('Empate!')
    }

    else if (
        (jogadaPC === 'Pedra' && escolhaPlayer ==='Papel') ||
        (jogadaPC === 'Papel' && escolhaPlayer ==='Tesoura') ||
        (jogadaPC === 'Tesoura' && escolhaPlayer ==='Pedra')
    )
    {
        alert('Vitoria!')
    }
    

    else {
        alert('Você perdeu!')
    }
}