let userGuardado = "matias";
let passGuardado = "matias123";

const login = () => {
    let acceder = false
    for(let i = 3;i > 0 ; i--){
        let username = prompt("Ingrese el nombre de usuario");
        let password = prompt("Ingresa tu contraseña");

        if(username == userGuardado && password == passGuardado){
            alert(`Bienvenido ${userGuardado}`)
            acceder = true
            break
        }else{
            alert(`Usuario y/o constraseña. Tienes ${i} intentos`);
        }
    }
    return acceder;
}
login("Error! Intentelo nuevamente dentro de 15 minutos")

;


let neumaticos = "Neumaticos";
let local = "local ballofet";

localStorage.setItem("neumaticos", neumaticos);
localStorage.setItem("local ballofet", local);


let user = "matias";
let esCliente = true;

sessionStorage.setItem("matias", user);
sessionStorage.setItem("esAlumno", esCliente);