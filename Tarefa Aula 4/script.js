const nomes = ['A cada amanhecer, novas possibilidades se revelam.', 'Com coragem no coração, os sonhos se tornam realidade.', 'A gratidão transforma o simples em extraordinário.', 'Quando a mente é aberta, o universo conspira a favor.']

function Gerar(){
    const numeroAleatorio = Math.floor (Math.random() *4)
    return numeroAleatorio
}

function Sorteio(){
    let numeroSorteado = Gerar()
    console.log(nomes[numeroSorteado])
}