function calcular() {
    let numero1 = parseInt(document.getElementById("numero").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    
    let media = (numero1 + numero2) / 2


    console.log(Math.round (media))
    console.log(Math.ceil (media))
    console.log(Math.floor (media))
}