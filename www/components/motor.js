
function calcularconsumo(){

var mod, km, gas, MarcaCa, consumo

 km = document.getElementById('km').value
 gas = document.getElementById('gas').value
 mod = document.getElementById('mod').value
 MarcaCa = document.getElementById('MarcaCa').value


 consumototal = km / gas
 
let frase = `Seu ${MarcaCa}  ${mod}  fez  ${consumototal}`;

document.querySelector('h2').innerHTML= frase;
alert(consumototal);
}




