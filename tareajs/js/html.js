let email = (`por favor ingre su usuario: `)
let password = (`por favor ingre su password: `)



console.log(user);
console.log(pass);

if(user == `pepe@pepe` && pass == 1234){
    alert(`bienvenido al sistema`)
    //funcion de js para llevar al user a otra pagina 
    window.location.href = `./pages/admin.html`
} else{alert(`usuario o password incorrecto`);
    location.href = `./pages/error.html`  }