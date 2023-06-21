
// array, arreglo, vector

//indice         0          1          2         3        4
let frutas = ['mangos','bananas', 'manzanas','peras', 'ananas'];

//indice           0        1             2         3        4              5              6         7      
let personas = ['pepe',123456789, 'san martin 200', 7, 234325234325, ['juan','mario'],'argentina', true];
// acceso a todos los elementos
console.log(frutas)
console.log(personas)

//acceso al elementopor su indice
//muestro manzanas
console.log('el elemento del indice 2 es:' + frutas[2] )
console.log('el elemento del indice 0 es:' + frutas[0] )
console.log('el elemento del indice 1 es:' + frutas[1] )
console.log('el elemento del indice 3 es:' + frutas[3] )
console.log('el elemento del indice 4 es:' + frutas[4] )



console.log( '======================================')

console.log(personas[5][1]);


// bucles: son pequeñas estructuras repetitivas de codigo


//for
//       inicio          limite              paso
/* for (let index = 0; index < array.length; index++) {
    //codigo para repetir siempre que sea true
    const element = array[index];
    
} */


// i = index de emmet
for (let i = 0; i < 10; i++) {
    console.log('estamos contando de 0 a 9: ' + i)   
}
console.log( '======================================')
console.log(personas.length)
console.log( '======================================')
for (let i = 0; i < personas.length; i++) {
    console.log(`los elementos de personas son: + ${personas[i]}`)
    
}


console.log( '======================================')

//introducir datos en una array
let alumnos = []
let data = prompt('introduce un/a alumno/a:');
 
// funcioon para guardar datos en un arreglo - push
if (!data) {
    alert('no se introdujo ningun dato')   
}else{
    alumnos.push(data)
    alert(`ingresamos el alumno ${data} al arreglo de alumnos`)
}

console.log(alumnos);
/* alumnos.push('pepe'); */
/* alumnos.push(data) */