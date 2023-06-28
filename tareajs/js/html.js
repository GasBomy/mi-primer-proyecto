/* let email = Document.GetElementById("email").value;
let password = Document.GetElementById("password").value;



console.log(user);
console.log(pass);

if(user == `value` && pass == 1234){
    alert(`bienvenido al sistema`)
    //funcion de js para llevar al user a otra pagina 
    window.location.href = `./pages/admin.html`
} else{alert(`usuario o password incorrecto`);
    location.href = `./pages/error.html`  } */




    //Formulario de carga de productos
let productos =[];


let frutas = ['peras','manzanas'];
//json
let personas ={
    nombre: 'pepe',
    apellido: 'perez',
    ciudad: 'caba',

}
console.log(personas)

for(let key in personas){
    console.log(key, personas[key])
}





function cargarProductos(){
    //imprimimos info de la funcion
    console.log('tus productos se cargaron');
    
    let nombreProducto= document.getElementById('nombreProducto').value;
    let precioProducto=document.getElementById('precioProducto').value;




    //objeto json de producto
    let producto={
        email: nombreProducto ,
        password: precioProducto ,
    }
    console.log(producto);


//guardamos el producto en el arreglo o data base
productos.push(producto)


    console.log(typeof precioProducto);
    /* productos.push(nombreProducto); */
    console.log(productos);

    console.log(nombreProducto);
    console.log(precioProducto);

    cargarTabla()
}
//llamo a la funcion cargar productos


//function para cargar la tabla de productoos
/* 
const cargarTabla= ()=>{
    let tabla = document.getElementById('tablaProductos').value;
    for (let i = 0; i < productos.length; i++) {

        //crear un documento tr
        let fila = document.createElement('tr');
        let celda = document.createElement('td');

        celda.textContent = 'pepe@gmail'
        fila.appendChild(celda)
        tabla.appendChild(fila)




        console.log(productos[i]);
        
    }

} */
const cargarTabla = () =>{

    //obtener la tabla
    let tabla = document.getElementById('tablaProductos')

    //recorrer el arreglo productos
    for (let i = 0; i < productos.length; i++) {

        //crear un elemeto tr
        let fila = document.createElement('tr');

        //creamos un elemento td
        let celdaNombre = document.createElement('td');

        //agregamos el dato a la celda del nombre del producto
        celdaNombre.textContent = 'pepe@gmail.com'

        //subimos el td al tr
        fila.appendChild(celdaNombre)

        //subimos le tr al tbody
        tabla.appendChild(fila)



        console.log(productos[i]);
    }

}