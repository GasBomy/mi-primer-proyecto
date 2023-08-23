const cargarTabla = () =>{

    //obtener la tabla
    let tabla = document.getElementById('tablaProductos')

     //limpiar la tabla antes que el for lo cargue de nuevo
        tabla.innerText='';

    //recorrer el arreglo productos
    for (let i = 0; i < productos.length; i++) {



        //crear un elemeto tr
        let fila = document.createElement('tr');

        //creamos un elemento td
        let celdaNombre = document.createElement('td');
        let celdaPassword = document.createElement('td');

        //agregamos el dato a la celda del nombre del producto
        celdaNombre.textContent = productos[i].email;
        celdaPassword.textContent = productos[i].password;

        //subimos el td al tr
        fila.appendChild(celdaNombre)
        fila.appendChild(celdaPassword)

        //subimos le tr al tbody
        tabla.appendChild(fila)

        //imprimimos los productos JSON
        console.log(productos[i]);
    }

}