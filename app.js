//Se declaran constantes para almacenar las teclas como numeros, signos de operación etc.
const teclaNumero = document.getElementsByName('numero');
const teclaSigno = document.getElementsByName('signo');

const teclaIgual = document.getElementsByName('igual')[0];
const teclaBorrar = document.getElementsByName('borrar')[0];
const teclaLimpiar = document.getElementsByName('limpiar')[0];
const teclaDecimal = document.getElementsByName('decimal')[0];

let result = document.getElementById('resultado');

//Sera la operación actual de la calculadora
let opeActual = '';

//Operación anterior para guardarla y reutilizarla para seguir operando
let OpeAnterior = '';
let operacion = undefined;


teclaNumero.forEach(function(tecla){
  tecla.addEventListener('click', function(){
    capturarNumero(tecla.innerText);

    // alert(tecla.innerText); //Se usa alert, para saber si se capturan lo valores de cada tecla de numeros
  })
});

teclaSigno.forEach(function(tecla){
  tecla.addEventListener('click', function(){
    selectOperacion(tecla.innerText);
    // alert(tecla.innerText); //para depurar si funciona el evento click.
  })
});

teclaIgual.addEventListener('click', function(){
  calcular();
  mostrarPantalla();
});

teclaLimpiar.addEventListener('click', function(){
  clear();
  mostrarPantalla();
});

// teclaDecimal.addEventListener('click' function(){
//   capturarTecla(tecla.innerText);
//   alert(tecla.innerText);
// })


function capturarNumero(num){//se define la funcion de la línea 22
  opeActual = opeActual.toString() + num.toString(); //se convierten los numeros en pantalla a formato texto y se concatena con mas tipos de texto
  mostrarPantalla();
}

function clear(){
  opeActual = '';
  OpeAnterior = '';
  operacion = undefined;
}

function mostrarPantalla(){
  result.value = opeActual;
}
