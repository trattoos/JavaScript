// console.log ('Hola Mundo');



var MiPrimeraVariable = 'Mi Primera Variable';


var MiPrimeraVariable = 'Prueba de cambio de valor';
// console.log (MiPrimeraVariable);


// Objeto: agrupaciones de datos que hacen sentido entre si. //

const primerObjeto = {
    numero: 12,
    string: 'cadena de caracteres',
    condicio: true
}

// console.log (primerObjeto.string);


// Arreglos  //
const arregloVacio = [];
const primerArreglo = [1, 2, 'Hola Mundo', primerObjeto];



primerArreglo.push (5);
arregloVacio.push (2)
arregloVacio.push (4)
arregloVacio.push (23)
arregloVacio.push (1)
arregloVacio.push (8)
arregloVacio.push (MiPrimeraVariable)

 // console.log (arregloVacio);

 const suma = 1 + 2;
 const restar = 3 - 2;
 const multiplicar = 3 * 2;
 const division = 9 / 3 ;
 const modulo = 10 % 3;


 let num = 5;
 num++



 let nume = 5 ;
 nume--;

//  console.log(nume);


 // operadores de comparacion //

//igualdad estricta === //
 const resultado1 = 5 === 6;

 // Igualdad no estricta == //
 const resultado2 = 5 == '5';


const resultado3 = 5 < 6;
const resultado4 = 5 < 5;

const resultado7 = 5 <= 5;

//  console.log (resultado1);
//  console.log (resultado2);
//  console.log (resultado3);
//  console.log (resultado4);
 

 // Operadores Logicos //
 // or || , and && , not ! //

const resultadoOr = false || true;

console.log(resultadoOr);

const resultadoAnd = true && false;
console.log (resultadoAnd); 


const resultadoNot = !false;
console.log(resultadoNot);