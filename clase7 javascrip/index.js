console.log("estoy en la cabecera de la pagina");

/*comentarios
multiples
*/

// comentarios de una sola  linea

//console.log("comentario de una sola linea")

//palabras reservadas: dar indicaciones de tareas o funciones al lenguaje de programacion
/* var
let
for 
function
if 
*/

//keys sensitive: que no es lo mismo si una palabras es igual y esta escrita una con mayusculas y la otra con minuscula ej: Casa casa

//variables: es un espacio de memoria para guardar datos
//declaracion de una variable
var nombre; //no es obligatorio el ;
// asignacion de una variable
// = : es  un operador de asignacion
nombre = "pepe";

//recuperar la info

console.log("nombre")

var apellido = "perez"; //js es flexible

console.log("apellido" )
//declaramos y asignamos otra variable
provincia = "mendoza";

console.log(provincia)

//concatenar datos

console.log("mi nombre es: " + nombre + "y mi apellido es: " + apellido + "y vivo en la provincia: " + provincia);


//template string
console.log(`Mi nombre es ${nombre} y mi apellido es ${apellido} vivo en la provincia de ${provincia}`);

console.log('===================================')

// con let puedo declarar una sola vez no se puede volver a declarar
let pais = `argentina`;

var apellido = `gomez`;

console.log(`Mi nombre es ${nombre} y mi apellido es ${apellido} vivo en la provincia de ${provincia}`);

pais = `alemania`;

pais = `1500`;
dos= 2000;

resultado = pais + dos
console.log(resultado)

console.log('===================================')

//cosntante: no cambia

const dni = 123123123;

console.log(dni);

console.log('===================================')

//operadores: + - * / %

let numero = 1000;
let numero2 = 5000;

resultado = numero + numero2;
console.log(`el resultado de la suma es ${resultado}`);

resultado = numero - numero2;
console.log(resultado);

resultado = numero * numero2;
console.log(resultado);

resultado = numero / numero2; //resultado de la division
console.log(resultado);

resultado = numero % numero2; //resto de la division
console.log(resultado);

//booleans

let verdadero = true;
let falso = false;

//operadores relacionales son: =,  <,>, !
 let edad =18;

 //condicionales: if

/*  if (condition== verdadera para que se ejecute el codigo) {
    
 }
 */

 if (edad < 18) {

    console.log(`1. no puedes comprar bebidas`)
    
}
if (edad > 18) {

    console.log(`2. puedes comprar bebidas`)
    
}
if (edad >= 18) {
    console.log(` 3. puedes comprar bebidas`)
}

if (edad <= 18) {

    console.log(`4. no puedes comprar bebidas`)
    
}

if (edad == 18) {

    console.log(`5. tenes 18 años`)
    
}
if (edad === 18) {

    console.log(`6. son estrictamentes iguales`)
    
}

console.log('===================================')

let password = 123456

if (password === 123456) {
    console.log(`podes acceder a tu cuenta`)
    
}