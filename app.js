//Se declaran constantes para almacenar las teclas como numeros, signos de operación etc.
const teclaNumero = document.getElementsByName('numero');
const teclaSigno = document.getElementsByName('signo');

const teclaIgual = document.getElementsByName('igual')[0];
const teclaLimpiar = document.getElementsByName('limpiar')[0];

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
  calcular(); //llama a la función calcular
  mostrarPantalla();
});

teclaLimpiar.addEventListener('click', function(){
  clear();
  mostrarPantalla();
});

function selectOperacion(op){
  if(opeActual === '') return;
  if(OpeAnterior !== ''){
    calcular(); //se llama a la función calcular, dando la posibilidad de seguir operando con valores anteriores
  }
  else{
    operacion = op.toString();
    OpeAnterior = opeActual;
    opeActual = '';
  }
}

function calcular(){
  let calculo;
  const anterior = parseFloat(OpeAnterior); //se convierte el valor tipo String, directamente a Number
  const actual = parseFloat(opeActual);
  if(isNaN(anterior) || isNaN(actual)) return;
  switch (operacion) {
      case '+':
        calculo = anterior + actual;
        break;
      case '-':
        calculo = anterior - actual;
        break;
      case '*':
        calculo = anterior * actual;
        break;
      case '/':
        calculo = anterior / actual;
        break;
    default:
        return;
  }
  opeActual = calculo;
  operacion = undefined;
  OpeAnterior = '';
}

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

clear();
