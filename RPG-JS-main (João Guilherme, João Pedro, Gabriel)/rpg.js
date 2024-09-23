//************************************* Variáveis globais que devem ser inicializadas no início do jogo *************************************

//variável que irá guardar o personagem sorteado
let personagemPrincipal = ""
//variável que irá guardar o número sorteado no dado
let sorteioDado = 0
//variável que irá guardar a consequência de cada número sorteado no desafio da caverna
const consequenciasCaverna = [
    'Você encontrou um monstro terrível! Você terá que lutar com ele.',
    'Você encontrou um monstro de dificuldade média e deve enfrentá-lo.',
    'Você passou pelo predio sem nenhum problema!'    
]

const consequenciasBar = [
    'Você não resistiu e bebeu 4 cerejas. Terá que lutar contra sua embriaguez.',
    'Você não resistiu e bebeu 10 shots. Terá que lutar contra sua embriaguez.',
    'Você resistiu a musica e ficou sobrio!'
]

const consequenciasCastelo = [
    'Você encontrou um demônio terrível! Você terá que lutar com ele.',
    'Você encontrou um demônio de dificuldade média e deve enfrentá-lo.',
    'Você explorou o posto de gasolina com tranquilidade!'
]

//************************************* Funções que serão repetidas ao longo do jogo *************************************

  // Função para rolar um dado (1 a 20)
  function rolarDado() {
    return Math.floor(Math.random() * 20) + 1;
  }

  // Função para batalha de nível fácil mendigo
  function batalhaMenFacil(){
    
    let vidaPersonagem = 11
    let vidaInimigo = 5

    while (vidaPersonagem >=0 && vidaInimigo >=0){
        alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`)
        let numeroSorteadoPersonagem = rolarDado()
        alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do inimigo!`)
        let numeroSorteadoInimigo = rolarDado()
        if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
            vidaInimigo -= 2
            alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o inimigo com seu cuspi acido! Agora é vida dele é ${vidaInimigo}`)
        }
        else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
            vidaPersonagem -= 2
            alert(`O inimigo tirou ${numeroSorteadoInimigo} e acertou você! Agora sua vida é ${vidaPersonagem}`)
        }
        else{
            alert("Empate! O show tem que continuar.")
        }
    }
    if(vidaPersonagem <= 0){
        alert("Você perdeu! Ficou sem moradia.")
    }
    else{
        alert("Você venceu! Você encontrou um abrigo!")
    }
}

    // Função para batalha de nível mendigo
    function batalhaMenMedia(){
        
        let vidaPersonagem = 11
        let vidaInimigo = 10

        alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}`)

        while (vidaPersonagem >=0 && vidaInimigo >=0){
            alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`)
            let numeroSorteadoPersonagem = rolarDado()
            alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do inimigo!`)
            let numeroSorteadoInimigo = rolarDado()
            if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
                vidaInimigo -= 9
                alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o inimigo com seu cuspi acido! Agora é vida dele é ${vidaInimigo}`)
            }
            else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
                vidaPersonagem -= 2
                alert(`O inimigo tirou ${numeroSorteadoInimigo} e acertou você! Agora sua vida é ${vidaPersonagem}`)
            }
            else{
                alert("Empate! O show tem que continuar.")
            }
        }
        if(vidaPersonagem <= 0){
            alert("Você perdeu! Ficou sem moradia.")
        }
        else{
            alert("Você venceu! Você encontrou um abrigo!")
        }
}
 // Função para embriaguez medio
 function batalhaBarManMedia(){
    
    let vidaPersonagem = 11
    let vidaInimigo = 5

    while (vidaPersonagem >=0 && vidaInimigo >=0){
        alert(`Sua conciencia é ${vidaPersonagem} e o álcool da bebida é ${vidaInimigo}. Role os dados!`)
        let numeroSorteadoPersonagem = rolarDado()
        alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez da bebida!`)
        let numeroSorteadoInimigo = rolarDado()
        if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
            vidaInimigo -= 4
            alert(`A bebida tirou ${numeroSorteadoInimigo}. Você acertou ela! Agora o álcool dela é ${vidaInimigo}`)
        }
        else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
            vidaPersonagem -= 2
            alert(`A bebida tirou ${numeroSorteadoInimigo} e acertou você! Agora sua conciencia é ${vidaPersonagem}`)
        }
        else{
            alert("Empate! O show tem que continuar!")
        }
    }
    if(vidaPersonagem <= 0){
        alert("Você perdeu! Te jogaram para fora do bar.")
    }
    else{
        alert("Você venceu! Se tornou o dono do bar e mudou de vida!")
    }
}

// Função para embreaguez alta

function batalhaBarManAlta(){
    
    let vidaPersonagem = 11
    let vidaInimigo = 10

    while (vidaPersonagem >=0 && vidaInimigo >=0){
        alert(`Sua conciencia é ${vidaPersonagem} e o álcool da bebida é ${vidaInimigo}. Role os dados!`)
        let numeroSorteadoPersonagem = rolarDado()
        alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez da bebida!`)
        let numeroSorteadoInimigo = rolarDado()
        if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
            vidaInimigo -= 9
            alert(`A bebida tirou ${numeroSorteadoInimigo}. Você acertou ela! Agora o álcool dela é ${vidaInimigo}`)
        }
        else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
            vidaPersonagem -= 2
            alert(`A bebida tirou ${numeroSorteadoInimigo} e acertou você! Agora sua conciencia é ${vidaPersonagem}`)
        }
        else{
            alert("Empate! O show tem que continuar!")
        }
    }
    if(vidaPersonagem <= 0){
        alert("Você perdeu! Te jogaram para fora do bar.")
    }
    else{
        alert("Você venceu! Se tornou o dono do bar e mudou de vida!")
    }
}

//função para batalha com demonio alta

function batalhaDemoManAlta(){
        
    let vidaPersonagem = 11
    let vidaInimigo = 10

    alert(`Sua vida é ${vidaPersonagem} e a vida do demonio é ${vidaInimigo}`)

    while (vidaPersonagem >=0 && vidaInimigo >=0){
        alert(`Sua vida é ${vidaPersonagem} e a vida do demonio é ${vidaInimigo}. Role os dados!`)
        let numeroSorteadoPersonagem = rolarDado()
        alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do demonio!`)
        let numeroSorteadoInimigo = rolarDado()
        if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
            vidaInimigo -= 9
            alert(`O demonio tirou ${numeroSorteadoInimigo}. Você acertou o demonio! Agora é vida dele é ${vidaInimigo}`)
        }
        else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
            vidaPersonagem -= 2
            alert(`O demonio tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${vidaPersonagem}`)
        }
        else{
            alert("Empate! O show tem que continuar.")
        }
    }
    if(vidaPersonagem <= 0){
        alert("Você perdeu! Foi possuido e ficou condenado ao sofrimento eterno.")
    }
    else{
        alert("Você venceu! Pode desfrutar do sabor da vitoria sabendo que agora você é rico!")
    }
}

 // Função para batalha DEmo nível fácil
 function batalhaDemoManFacil(){
    
    let vidaPersonagem = 11
    let vidaInimigo = 5

    while (vidaPersonagem >=0 && vidaInimigo >=0){
        alert(`Sua vida é ${vidaPersonagem} e a vida do Demonio é ${vidaInimigo}. Role os dados!`)
        let numeroSorteadoPersonagem = rolarDado()
        alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do Demonio!`)
        let numeroSorteadoInimigo = rolarDado()
        if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
            vidaInimigo -= 4
            alert(`O Demonio tirou ${numeroSorteadoInimigo}. Você acertou o Demonio! Agora é vida dele é ${vidaInimigo}`)
        }
        else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
            vidaPersonagem -= 2
            alert(`O Demonio tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${vidaPersonagem}`)
        }
        else{
            alert("Empate! O show tem que continuar.")
        }
    }
    if(vidaPersonagem <= 0){
        alert("Você perdeu! Foi possuido e ficou condenado ao sofrimento eterno.")
    }
    else{
        alert("Você venceu! Pode desfrutar do sabor da vitoria sabendo que agora você é rico!")
    }
}























  // Função para batalha de nível fácil
  function batalhaFacil(){
    
    let vidaPersonagem = 10
    let vidaInimigo = 5

    while (vidaPersonagem >=0 && vidaInimigo >=0){
        alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`)
        let numeroSorteadoPersonagem = rolarDado()
        alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do inimigo!`)
        let numeroSorteadoInimigo = rolarDado()
        if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
            vidaInimigo -= 2
            alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o inimigo! Agora é vida dele é ${vidaInimigo}`)
        }
        else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
            vidaPersonagem -= 2
            alert(`O inimigo tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${vidaPersonagem}`)
        }
        else{
            alert("Empate! O show tem que continuar.")
        }
    }
    if(vidaPersonagem <= 0){
        alert("Você perdeu! O jogo acabou.")
    }
    else{
        alert("Você venceu! Agora a história continua....")
    }
}

    // Função para batalha de nível médio
    function batalhaMedia(){
        
        let vidaPersonagem = 10
        let vidaInimigo = 10

        alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}`)

        while (vidaPersonagem >=0 && vidaInimigo >=0){
            alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`)
            let numeroSorteadoPersonagem = rolarDado()
            alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do inimigo!`)
            let numeroSorteadoInimigo = rolarDado()
            if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
                vidaInimigo -= 2
                alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o inimigo! Agora é vida dele é ${vidaInimigo}`)
            }
            else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
                vidaPersonagem -= 2
                alert(`O inimigo tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${vidaPersonagem}`)
            }
            else{
                alert("Empate! O show tem que continuar.")
            }
        }
        if(vidaPersonagem <= 0){
            alert("Você perdeu! O jogo acabou.")
        }
        else{
            alert("Você venceu! Agora a história continua....")
        }
}

 // Função para embriaguez medio
 function batalhaBarMedia(){
    
    let vidaPersonagem = 10
    let vidaInimigo = 5

    while (vidaPersonagem >=0 && vidaInimigo >=0){
        alert(`Sua conciencia é ${vidaPersonagem} e o álcool da bebida é ${vidaInimigo}. Role os dados!`)
        let numeroSorteadoPersonagem = rolarDado()
        alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez da bebida!`)
        let numeroSorteadoInimigo = rolarDado()
        if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
            vidaInimigo -= 2
            alert(`A bebida tirou ${numeroSorteadoInimigo}. Você acertou ela! Agora o álcool dela é ${vidaInimigo}`)
        }
        else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
            vidaPersonagem -= 2
            alert(`A bebida tirou ${numeroSorteadoInimigo} e acertou você! Agora sua conciencia é ${vidaPersonagem}`)
        }
        else{
            alert("Empate! O show tem que continuar!")
        }
    }
    if(vidaPersonagem <= 0){
        alert("Você perdeu! Dormiu no bar.")
    }
    else{
        alert("Você venceu! Saiu feliz e sobrio!")
    }
}

// Função para embreaguez alta

function batalhaBarAlta(){
    
    let vidaPersonagem = 10
    let vidaInimigo = 15

    while (vidaPersonagem >=0 && vidaInimigo >=0){
        alert(`Sua conciencia é ${vidaPersonagem} e o álcool da bebida é ${vidaInimigo}. Role os dados!`)
        let numeroSorteadoPersonagem = rolarDado()
        alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez da bebida!`)
        let numeroSorteadoInimigo = rolarDado()
        if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
            vidaInimigo -= 2
            alert(`A bebida tirou ${numeroSorteadoInimigo}. Você acertou ela! Agora o álcool dela é ${vidaInimigo}`)
        }
        else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
            vidaPersonagem -= 2
            alert(`A bebida tirou ${numeroSorteadoInimigo} e acertou você! Agora sua conciencia é ${vidaPersonagem}`)
        }
        else{
            alert("Empate! O show tem que continuar!")
        }
    }
    if(vidaPersonagem <= 0){
        alert("Você perdeu! Dormiu no bar.")
    }
    else{
        alert("Você venceu! Saiu feliz e sobrio!")
    }
}
//função para batalha com demonio alta

function batalhaDemoAlta(){
        
    let vidaPersonagem = 10
    let vidaInimigo = 10

    alert(`Sua vida é ${vidaPersonagem} e a vida do demônio é ${vidaInimigo}`)

    while (vidaPersonagem >=0 && vidaInimigo >=0){
        alert(`Sua vida é ${vidaPersonagem} e a vida do demônio é ${vidaInimigo}. Role os dados!`)
        let numeroSorteadoPersonagem = rolarDado()
        alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do demônio!`)
        let numeroSorteadoInimigo = rolarDado()
        if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
            vidaInimigo -= 2
            alert(`O demônio tirou ${numeroSorteadoInimigo}. Você acertou o demônio! Agora é vida dele é ${vidaInimigo}`)
        }
        else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
            vidaPersonagem -= 2
            alert(`O demônio tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${vidaPersonagem}`)
        }
        else{
            alert("Empate! O show tem que continuar.")
        }
    }
    if(vidaPersonagem <= 0){
        alert("Você perdeu! O jogo acabou.")
    }
    else{
        alert("Você venceu! Pode desfrutar do sabor da vitoria")
    }
}

 // Função para batalha DEmo nível fácil
 function batalhaDemoFacil(){
    
    let vidaPersonagem = 10
    let vidaInimigo = 5

    while (vidaPersonagem >=0 && vidaInimigo >=0){
        alert(`Sua vida é ${vidaPersonagem} e a vida do demônio é ${vidaInimigo}. Role os dados!`)
        let numeroSorteadoPersonagem = rolarDado()
        alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do demônio!`)
        let numeroSorteadoInimigo = rolarDado()
        if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
            vidaInimigo -= 2
            alert(`O demônio tirou ${numeroSorteadoInimigo}. Você acertou o demônio! Agora é vida dele é ${vidaInimigo}`)
        }
        else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
            vidaPersonagem -= 2
            alert(`O demônio tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${vidaPersonagem}`)
        }
        else{
            alert("Empate! O show tem que continuar.")
        }
    }
    if(vidaPersonagem <= 0){
        alert("Você perdeu! O jogo acabou.")
    }
    else{
        alert("Você venceu! Agora a história continua....")
    }
}














  // Função para batalha de nível fácil
  function batalhaMarcalFacil(){
    
    let vidaPersonagem = 10
    let vidaInimigo = 5

    while (vidaPersonagem >=0 && vidaInimigo >=0){
        alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`)
        let numeroSorteadoPersonagem = rolarDado()
        alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do inimigo!`)
        let numeroSorteadoInimigo = rolarDado()
        if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
            vidaInimigo -= 2
            alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o inimigo com uma cadeirada! Agora é vida dele é ${vidaInimigo}`)
        }
        else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
            vidaPersonagem -= 2
            alert(`O inimigo tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${vidaPersonagem}`)
        }
        else{
            alert("Empate! O show tem que continuar.")
        }
    }
    if(vidaPersonagem <= 0){
        alert("Você perdeu! O jogo acabou.")
    }
    else{
        alert("Você venceu! Agora a história continua....")
    }
}

    // Função para batalha de nível médio
    function batalhaMarcalMedia(){
        
        let vidaPersonagem = 10
        let vidaInimigo = 10

        alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}`)

        while (vidaPersonagem >=0 && vidaInimigo >=0){
            alert(`Sua vida é ${vidaPersonagem} e a vida do inimigo é ${vidaInimigo}. Role os dados!`)
            let numeroSorteadoPersonagem = rolarDado()
            alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do inimigo!`)
            let numeroSorteadoInimigo = rolarDado()
            if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
                vidaInimigo -= 2
                alert(`O inimigo tirou ${numeroSorteadoInimigo}. Você acertou o inimigo com uma cadeirada! Agora é vida dele é ${vidaInimigo}`)
            }
            else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
                vidaPersonagem -= 2
                alert(`O inimigo tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${vidaPersonagem}`)
            }
            else{
                alert("Empate! O show tem que continuar.")
            }
        }
        if(vidaPersonagem <= 0){
            alert("Você perdeu! O jogo acabou.")
        }
        else{
            alert("Você venceu! Agora a história continua....")
        }
}

 // Função para embriaguez medio
 function batalhaBarMarcalMedia(){
    
    let vidaPersonagem = 10
    let vidaInimigo = 5

    while (vidaPersonagem >=0 && vidaInimigo >=0){
        alert(`Sua conciencia é ${vidaPersonagem} e o álcool da bebida é ${vidaInimigo}. Role os dados!`)
        let numeroSorteadoPersonagem = rolarDado()
        alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez da bebida!`)
        let numeroSorteadoInimigo = rolarDado()
        if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
            vidaInimigo -= 2
            alert(`A bebida tirou ${numeroSorteadoInimigo}. Você acertou ela com uma cadeirada! Agora o álcool dela é ${vidaInimigo}`)
        }
        else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
            vidaPersonagem -= 2
            alert(`A bebida tirou ${numeroSorteadoInimigo} e acertou você! Agora sua conciencia é ${vidaPersonagem}`)
        }
        else{
            alert("Empate! O show tem que continuar!")
        }
    }
    if(vidaPersonagem <= 0){
        alert("Você perdeu! Dormiu no bar.")
    }
    else{
        alert("Você venceu! Saiu feliz e sobrio!")
    }
}

// Função para embreaguez alta

function batalhaBarMarcalAlta(){
    
    let vidaPersonagem = 10
    let vidaInimigo = 15

    while (vidaPersonagem >=0 && vidaInimigo >=0){
        alert(`Sua conciencia é ${vidaPersonagem} e o álcool da bebida é ${vidaInimigo}. Role os dados!`)
        let numeroSorteadoPersonagem = rolarDado()
        alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez da bebida!`)
        let numeroSorteadoInimigo = rolarDado()
        if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
            vidaInimigo -= 2
            alert(`A bebida tirou ${numeroSorteadoInimigo}. Você acertou ela com uma cadeirada! Agora o álcool dela é ${vidaInimigo}`)
        }
        else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
            vidaPersonagem -= 2
            alert(`A bebida tirou ${numeroSorteadoInimigo} e acertou você! Agora sua conciencia é ${vidaPersonagem}`)
        }
        else{
            alert("Empate! O show tem que continuar!")
        }
    }
    if(vidaPersonagem <= 0){
        alert("Você perdeu! Dormiu no bar.")
    }
    else{
        alert("Você venceu! Saiu feliz e sobrio!")
    }
}
//função para batalha com demonio alta

function batalhaDemoMarcalAlta(){
        
    let vidaPersonagem = 10
    let vidaInimigo = 10

    alert(`Sua vida é ${vidaPersonagem} e a vida do demônio é ${vidaInimigo}`)

    while (vidaPersonagem >=0 && vidaInimigo >=0){
        alert(`Sua vida é ${vidaPersonagem} e a vida do demônio é ${vidaInimigo}. Role os dados!`)
        let numeroSorteadoPersonagem = rolarDado()
        alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do demônio!`)
        let numeroSorteadoInimigo = rolarDado()
        if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
            vidaInimigo -= 2
            alert(`O demônio tirou ${numeroSorteadoInimigo}. Você acertou o demônio com uma cadeirada! Agora é vida dele é ${vidaInimigo}`)
        }
        else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
            vidaPersonagem -= 2
            alert(`O demônio tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${vidaPersonagem}`)
        }
        else{
            alert("Empate! O show tem que continuar.")
        }
    }
    if(vidaPersonagem <= 0){
        alert("Você perdeu! O jogo acabou.")
    }
    else{
        alert("Você venceu! Pode desfrutar do sabor da vitoria")
    }
}

 // Função para batalha DEmo nível fácil
 function batalhaDemoMarcalFacil(){
    
    let vidaPersonagem = 10
    let vidaInimigo = 5

    while (vidaPersonagem >=0 && vidaInimigo >=0){
        alert(`Sua vida é ${vidaPersonagem} e a vida do demônio é ${vidaInimigo}. Role os dados!`)
        let numeroSorteadoPersonagem = rolarDado()
        alert(`Você tirou ${numeroSorteadoPersonagem}! Agora é a vez do demônio!`)
        let numeroSorteadoInimigo = rolarDado()
        if(numeroSorteadoPersonagem > numeroSorteadoInimigo){
            vidaInimigo -= 2
            alert(`O demônio tirou ${numeroSorteadoInimigo}. Você acertou o demônio com uma cadeirada! Agora é vida dele é ${vidaInimigo}`)
        }
        else if(numeroSorteadoPersonagem < numeroSorteadoInimigo){
            vidaPersonagem -= 2
            alert(`O demônio tirou ${numeroSorteadoInimigo} acertou você! Agora sua vida é ${vidaPersonagem}`)
        }
        else{
            alert("Empate! O show tem que continuar.")
        }
    }
    if(vidaPersonagem <= 0){
        alert("Você perdeu! O jogo acabou.")
    }
    else{
        alert("Você venceu! Agora a história continua....")
    }
}

//************************************* Função que roda ao iniciar o jogo *************************************

function iniciar(){
    const personagem = prompt(`Seja bem-vindo nobre aventurairo! Escolha uma das opções: 
        1 - Sortear Personagem
        2 - Sair do Jogo`)

    switch(personagem){
        case "1":
            personagemPrincipal = sortearPersonagem()
            alert(`O personagem sorteado foi ${personagemPrincipal}`)
            if(personagemPrincipal === "O Milionário")
                iniciarJornadaMilionario()
            else if(personagemPrincipal === "O Datena")
                iniciarJornadaDatena()
            else if(personagemPrincipal === "O CLT (frentista)")
                iniciarJornadaCLT()

            else
                iniciarJornadaMendigo()
        break
        case "2":
            alert("Espero te ver novamente!")
        break
        default:
            alert("Isso não é uma opção! Recomeço do zero cabeçudo!")
    }
}


//************************************* Função para sortear personagem *************************************
function sortearPersonagem() {
    const personagens = ["O Milionário", "O Datena", "O CLT (frentista)", ' O Mendigo'];
  
    const sorteado = Math.floor(Math.random() * personagens.length);
    return personagens[sorteado];
  }


//************************************* Funções para jornada de cada personagem *************************************

// Função para iniciar a jornada do CLT Frentista
function iniciarJornadaCLT(){
    const opcao1 = prompt(`Você está de frente a um prédio escuro. O que você faz?
        1 - Entrar
        2 - Ir pra outro lado`)

    if(opcao1 == "1"){
        const rolarDados = confirm("Agora vamos tentar sua sorte! Preparado para rolar os dados?")
        if(rolarDados === true){
            sorteioDado = rolarDado()
            alert(`O número sorteado foi ${sorteioDado}!`)
            if(sorteioDado >= 0 && sorteioDado <= 7) { 
                alert ( `${consequenciasCaverna[0]}`)
                batalhaMedia()
            }
            else if (sorteioDado >=8 && sorteioDado <=17 ){
                alert ( `${consequenciasCaverna[1]}`)
                batalhaFacil()
            }
            else {alert ( `${consequenciasCaverna[2]}`) }
        }
        else{
            alert(`Você ainda não está preparado, volte mais tarde.`)
            return
        }
    }

    else if(opcao1 == "2"){
        const opcao2 = prompt(`Você anda mais um pouco e se depara com duas aventuras novas:
        1 - Ir para o posto de gasolina abandonado.
        2 - Ir para o bar beber.`)

        if(opcao2 == "1"){
            const rolarDados = confirm("Você entra no Posto. Agora vamos tentar sua sorte! Preparado para rolar os dados?")
            if(rolarDados === true){
                sorteioDado = rolarDado()
                alert(`O número sorteado foi ${sorteioDado}!`)
                if(sorteioDado >= 0 && sorteioDado <= 7) { 
                    alert ( `${consequenciasCastelo[0]}`)
                    batalhaDemoFacil()
                }
                else if (sorteioDado >=8 && sorteioDado <=17 ){
                    alert ( `${consequenciasCastelo[1]}`)
                    batalhaDemoAlta()
                }
                else {alert ( `${consequenciasCastelo[2]}`) }
            }
            else{
                alert(`Se ainda não está preparado, volte mais tarde.`)
                return
            }
        }
    
        else if(opcao2 == "2"){

            const rolarDados = confirm("Você entra no Bar e o garçom toca aquela pedrada dos Barões da Pisadinha. Rode os dados e teste sua resistencia...")
            if(rolarDados === true){
                sorteioDado = rolarDado()
                alert(`O número sorteado foi ${sorteioDado}!`)
                if(sorteioDado >= 0 && sorteioDado <= 7) { 
                    alert ( `${consequenciasBar[0]}`)
                    batalhaBarMedia()
                }
                else if (sorteioDado >=8 && sorteioDado <=17 ){
                    alert ( `${consequenciasBar[1]}`)
                    batalhaBarAlta()
                }
                else {alert ( `${consequenciasBar[2]}`) }
            }
            else{
                alert(`Você ainda é moleque, volte mais tarde!`)
                return
            }
    }
}
}













// Função para iniciar a jornada do Milionário
function iniciarJornadaMilionario(){
    const opcao1 = prompt(`Você está de frente a um prédio escuro. O que você faz?
        1 - Entrar
        2 - Ir pra outro lado`)

    if(opcao1 == "1"){
        const rolarDados = confirm("Agora vamos tentar sua sorte! Preparado para rolar os dados?")
        if(rolarDados === true){
            sorteioDado = rolarDado()
            alert(`O número sorteado foi ${sorteioDado}!`)
            if(sorteioDado >= 0 && sorteioDado <= 7) { 
                alert ( `${consequenciasCaverna[0]}`)
                batalhaMedia()
            }
            else if (sorteioDado >=8 && sorteioDado <=17 ){
                alert ( `${consequenciasCaverna[1]}`)
                batalhaFacil()
            }
            else {alert ( `${consequenciasCaverna[2]}`) }
        }
        else{
            alert(`Se ainda não está preparado, volte mais tarde.`)
            return
        }
    }

    else if(opcao1 == "2"){
        const opcao2 = prompt(`Você anda mais um pouco e se depara com duas aventuras novas:
        1 - Ir para o posto de gasolina abandonado.
        2 - Ir para o bar beber.`)

        if(opcao2 == "1"){
            const rolarDados = confirm("Você entra no Posto. Agora vamos tentar sua sorte! Preparado para rolar os dados?")
            if(rolarDados === true){
                sorteioDado = rolarDado()
                alert(`O número sorteado foi ${sorteioDado}!`)
                if(sorteioDado >= 0 && sorteioDado <= 7) { 
                    alert ( `${consequenciasCastelo[0]}`)
                    batalhaDemoFacil()
                }
                else if (sorteioDado >=8 && sorteioDado <=17 ){
                    alert ( `${consequenciasCastelo[1]}`)
                    batalhaDemoAlta()
                }
                else {alert ( `${consequenciasCastelo[2]}`) }
            }
            else{
                alert(`Se ainda não está preparado, volte mais tarde.`)
                return
            }
        }
    
    
        else if(opcao2 == "2"){

            const rolarDados = confirm("Você entra no Bar e o garçom toca aquela pedrada dos Barões da Pisadinha. Rode os dados e teste sua resistencia...")
            if(rolarDados === true){
                sorteioDado = rolarDado()
                alert(`O número sorteado foi ${sorteioDado}!`)
                if(sorteioDado >= 0 && sorteioDado <= 7) { 
                    alert ( `${consequenciasBar[0]}`)
                    batalhaBarMedia()
                }
                else if (sorteioDado >=8 && sorteioDado <=17 ){
                    alert ( `${consequenciasBar[1]}`)
                    batalhaBarAlta()
                }
                else {alert ( `${consequenciasBar[2]}`) }
            }
            else{
                alert(`Você ainda é moleque, volte mais tarde!`)
                return
            }
    }
}
}













// Função para iniciar a jornada do Datena
function iniciarJornadaDatena(){
    const opcao1 = prompt(`Você está de frente a um prédio escuro. O que você faz?
        1 - Entrar
        2 - Ir pra outro lado`)

    if(opcao1 == "1"){
        const rolarDados = confirm("Agora vamos tentar sua sorte! Preparado para rolar os dados?")
        if(rolarDados === true){
            sorteioDado = rolarDado()
            alert(`O número sorteado foi ${sorteioDado}!`)
            if(sorteioDado >= 0 && sorteioDado <= 7) { 
                alert ( `${consequenciasCaverna[0]}`)
                batalhaMarcalMedia()
            }
            else if (sorteioDado >=8 && sorteioDado <=17 ){
                alert ( `${consequenciasCaverna[1]}`)
                batalhaMarcalFacil()()
            }
            else {alert ( `${consequenciasCaverna[2]}`) }
        }
        else{
            alert(`Se ainda não está preparado, volte mais tarde.`)
            return
        }
    }

    else if(opcao1 == "2"){
        const opcao2 = prompt(`Você anda mais um pouco e se depara com duas aventuras novas:
        1 - Ir para o posto de gasolina abandonado.
        2 - Ir para o bar beber.`)

        if(opcao2 == "1"){
            const rolarDados = confirm("Você entra no Posto. Agora vamos tentar sua sorte! Preparado para rolar os dados?")
            if(rolarDados === true){
                sorteioDado = rolarDado()
                alert(`O número sorteado foi ${sorteioDado}!`)
                if(sorteioDado >= 0 && sorteioDado <= 7) { 
                    alert ( `${consequenciasCastelo[0]}`)
                    batalhaDemoMarcalFacil()
                }
                else if (sorteioDado >=8 && sorteioDado <=17 ){
                    alert ( `${consequenciasCastelo[1]}`)
                    batalhaDemoMarcalAlta()
                }
                else {alert ( `${consequenciasCastelo[2]}`) }
            }
            else{
                alert(`Se ainda não está preparado, volte mais tarde.`)
                return
            }
        }
    
    
        else if(opcao2 == "2"){

            const rolarDados = confirm("Você entra no Bar e o garçom toca aquela pedrada dos Barões da Pisadinha. Rode os dados e teste sua resistencia...")
            if(rolarDados === true){
                sorteioDado = rolarDado()
                alert(`O número sorteado foi ${sorteioDado}!`)
                if(sorteioDado >= 0 && sorteioDado <= 7) { 
                    alert ( `${consequenciasBar[0]}`)
                    batalhaBarMarcalMedia()
                }
                else if (sorteioDado >=8 && sorteioDado <=17 ){
                    alert ( `${consequenciasBar[1]}`)
                    batalhaBarMarcalAlta()
                }
                else {alert ( `${consequenciasBar[2]}`) }
            }
            else{
                alert(`Você ainda é moleque, volte mais tarde!`)
                return
            }
    }
}
}













//Jornada com Mendigo

function iniciarJornadaMendigo(){
    const opcao1 = prompt(`Você está de frente a um prédio escuro. O que você faz?
        1 - Entrar
        2 - Ir pra outro lado`)


    if(opcao1 == "1"){
        const rolarDados = confirm("Agora vamos tentar sua sorte! Preparado para rolar os dados?")
        if(rolarDados === true){
            sorteioDado = rolarDado()
            alert(`O número sorteado foi ${sorteioDado}!`)
            if(sorteioDado >= 0 && sorteioDado <= 7) { 
                alert ( `${consequenciasCaverna[0]}`)
                batalhaManMedia()
            }
            else if (sorteioDado >=8 && sorteioDado <=17 ){
                alert ( `${consequenciasCaverna[1]}`)
                batalhaManFacil()
            }
            else {alert ( `${consequenciasCaverna[2]}`) }
        }
        else{
            alert(`Se ainda não está preparado, volte mais tarde.`)
            return
        }
    }

    else if(opcao1 == "2"){
        const opcao2 = prompt(`Você anda mais um pouco e se depara com duas aventuras novas:
        1 - Ir para o posto de gasolina abandonado.
        2 - Ir para o bar beber.`)

        if(opcao2 == "1"){
            const rolarDados = confirm("Você entra no Posto. Agora vamos tentar sua sorte! Preparado para rolar os dados?")
            if(rolarDados === true){
                sorteioDado = rolarDado()
                alert(`O número sorteado foi ${sorteioDado}!`)
                if(sorteioDado >= 0 && sorteioDado <= 7) { 
                    alert ( `${consequenciasCastelo[0]}`)
                    batalhaDemoFacil()
                }
                else if (sorteioDado >=8 && sorteioDado <=17 ){
                    alert ( `${consequenciasCastelo[1]}`)
                    batalhaDemoAlta()
                }
                else {alert ( `${consequenciasCastelo[2]}`) }
            }
            else{
                alert(`Se ainda não está preparado, volte mais tarde.`)
                return
            }
        }
    
    
        else if(opcao2 == "2"){

            const rolarDados = confirm("Você entra no Bar e o garçom toca aquela pedrada dos Barões da Pisadinha. Rode os dados e teste sua resistencia...")
            if(rolarDados === true){
                sorteioDado = rolarDado()
                alert(`O número sorteado foi ${sorteioDado}!`)
                if(sorteioDado >= 0 && sorteioDado <= 7) { 
                    alert ( `${consequenciasBar[0]}`)
                    batalhaBarManMedia()
                }
                else if (sorteioDado >=8 && sorteioDado <=17 ){
                    alert ( `${consequenciasBar[1]}`)
                    batalhaBarManAlta()
                }
                else {alert ( `${consequenciasBar[2]}`) }
            }
            else{
                alert(`Você ainda é moleque, volte mais tarde!`)
                return
            }
    }
}
}
