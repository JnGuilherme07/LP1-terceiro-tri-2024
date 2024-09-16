function gerarNumeroAleatorio(){
    const numero_aleatorio = Math.floor(Math.random() * 11)
    return numero_aleatorio
}

function jogar(){


    const pegar_numero_aleatorio = gerarNumeroAleatorio()
    alert(pegar_numero_aleatorio)
    let palpite = ""
    let tentativas = 3;


    do{
        
        palpite = parseInt(prompt('Adivinhe o Número'));

        if ( palpite != pegar_numero_aleatorio) {
            tentativas--;
            alert(`Você errou... Você ainda tem ${tentativas} tentativa(s).`);
        } 
        else {
            alert(`Você acertou! O número era ${pegar_numero_aleatorio}.`);
            return
        }

    }
    while (tentativas > 0)
   
}
jogar()