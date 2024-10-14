function escolhaOponente(){
    const jokenpo = ["Pikachu", "Squirtle","Bulbasaur","Charmander" ]
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
        (jogadaPC === 'Pikachu' && escolhaPlayer ==='Squirtle') ||
        (jogadaPC === 'Pikachu' && escolhaPlayer ==='Bulbasaur') ||
        (jogadaPC === 'Charmander' && escolhaPlayer ==='Bulbasaur')||
        (jogadaPC === 'Charmander' && escolhaPlayer ==='Pikachu')||
        (jogadaPC === 'Squirtle' && escolhaPlayer ==='Charmander')||
        (jogadaPC === 'Squirtle' && escolhaPlayer ==='Pikachu')||
        (jogadaPC === 'Bulbasaur' && escolhaPlayer ==='Squirtle')||
        (jogadaPC === 'Bulbasaur' && escolhaPlayer ==='Charmander')
    )
    {
        alert('Vitoria!')
    }
    

    else {
        alert('Você perdeu!')
    }
}