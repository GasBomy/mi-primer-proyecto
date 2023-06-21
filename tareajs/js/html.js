let email = Document.GetElementById("email").value;
let password = Document.GetElementById("password").value;



console.log(user);
console.log(pass);

if(user == `value` && pass == 1234){
    alert(`bienvenido al sistema`)
    //funcion de js para llevar al user a otra pagina 
    window.location.href = `./pages/admin.html`
} else{alert(`usuario o password incorrecto`);
    location.href = `./pages/error.html`  }