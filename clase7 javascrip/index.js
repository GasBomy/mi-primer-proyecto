let user = prompt(`por favor ingre su usuario: `)
let pass = prompt(`por favor ingre su password: `)



console.log(user);
console.log(pass);

if(user == `pepe` && pass == 1234){
    alert(`bienvenido al sistema`)
    //funcion de js para llevar al user a otra pagina 
    window.location.href = `./pages/admin.html`
} else{alert(`usuario o password incorrecto`);
    location.href = `./pages/error.html`  }









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
let ingresa

if (password === 123456) {
    console.log(`podes acceder a tu cuenta`)
    
}

//document.write(`<h1>hola</h1>`);

let a = 5;

console.log(a == 5);
console.log(a != 5);
console.log(!true);
console.log(!false);
console.log('===================================')

//operadores logicos: && 
// && esto seria un ilogico: todas las condiciones deben ser true para que se ejecute
//  esto seria o logico: solo una de las condiciones deben ser true

let cliente = true;//suponer qur todos son clientes
let pagoaldia = false;
let dia = `viernes`;
// false     false               false= false
if (!cliente && dia == `lunes` && pagoaldia) {
    console.log(`lo sentimos no tenemos ninguna oferta para usted`)
}
// true          false= false
if (cliente && dia == `lunes`) {
    console.log(`por ser viernes tiene 50% de descuente`) 
}
//   true       true= true
if (cliente && dia == `viernes`) {
    console.log(`por ser cliente y ser viernes, tnemos un 70% de descuento`)   
}

console.log('===================================')
//   false      false              false
if (!cliente || dia == `lunes` || pagoaldia) {
    console.log(`lo sentimos no tenemos ninguna oferta para usted`)
}

if (cliente || dia == `lunes` || pagoaldia) {
    console.log(`lo sentimos no tenemos ninguna oferta para usted`)
}

if (cliente || dia == `viernes` || pagoaldia) {
    console.log(`lo sentimos no tenemos ninguna oferta para usted`)
}

console.log('===================================')


let usuario = `pepe`;

/*if(usuario == `pepe` && password == 123456){
    consoles.log(`bienvenido pepe a tu sistema`);
}


if(usuario == `pepe` || password == 123456){
    consoles.log(`bienvenido pepe a tu sistema`);  }*/



    console.log('===================================')
    console.log('===================================')

    /*if (condition) {
        
    } else { o si no
        
    }*/

    if(usuario == `pepe` && password == 123456){
        consoles.log(`bienvenido pepe a tu sistema`);
    }else{
        console.log(`usuario o password o facial incorrectos`);
    }
    
    //alert() funcion modal para enviar mensaje
    // prompt() funcion modal para introducir datos
