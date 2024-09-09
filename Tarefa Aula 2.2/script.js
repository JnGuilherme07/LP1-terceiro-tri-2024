function calcular(){
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let numero3 = parseInt(document.getElementById("numero3").value);
    let numero4 = parseInt(document.getElementById("numero4").value);


    console.log(Math.min(numero1,numero2,numero3,numero4))
    console.log(Math.max(numero1,numero2,numero3,numero4))
}