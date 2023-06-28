let administrador = {
    userAdmin: 'useradmin@gmail.com',
    passAdmi: '123456PPo'
}

console.log(administrador.passAdmi)
console.log(administrador.userAdmin)

const loginAdmin =()=>{
    let userAdmin = 'useradmin@gmail.com'
    let passAdmi = '123456PPo'


    let userEmail = document.getElementById('emailLogin').value;
    let userPassword = document.getElementById('passwordLogin').value;

    console.log(userAdmin, passAdmi)
    console.log(userEmail, userPassword)

    if(userAdmin === userEmail && passAdmi === userPassword){
        alert('bienvenido admin')
        window.location.href = './pages/login.html'
    }else{
        alert('user o password incorrecto')
        window.location.href='./pages/error.html'
    }

}