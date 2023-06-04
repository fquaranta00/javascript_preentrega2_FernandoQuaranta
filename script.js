/*

Programa para gestion en salud, de pacientes y obras sociales
En el mismo encontraran 1 funcion y 1 Switch:
                1. Función de login
                2. Función para agregar usuario
                3. Función para validar login   
                4. Switch para seleccionar acción
*/

//Comienzo funcion login
function login(usuarioLower, contrasena) {
    if (usuarios.hasOwnProperty(usuarioLower) && contrasena === usuarios[usuarioLower].password) {
        alert("Usuario correcto");
        console.log("Usuario correcto");
        alert("Bienvenido " + usuarioLower);
        console.log("Bienvenido " + usuarioLower);
        return true;
    } else {
        alert("Usuario/contraseña inválida");
        console.log("Usuario/contraseña inválida");
        alert("Intente nuevamente");
        console.log("Intente nuevamente");
        return false;
    }
}
//Fin funcion Login

//Comienzo funcion usuario nuevo
function aggUsuario() {
    let userNew = prompt("Ingrese usuario o mail nuevo: ");
    let passwordNew = prompt("Ingrese password nuevo: ");
    let nuevoUsuario = new usuariosNew(userNew, passwordNew);
    usuarios[userNew.toLowerCase()] = nuevoUsuario;
    alert("Usuario creado correctamente");
}
//Fin funcion usuario nuevo

//inicio funcion acceso usuario registrado

function okUsuario() {
    let usuario = prompt("Ingrese Usuario o Mail: ");
    let usuarioLower = usuario.toLowerCase(); //acá normalizamos el texto
    let contrasena = prompt("Ingrese su contraseña: ");
    loginKey = login(usuarioLower, contrasena); //Acá se ejecuta la funcion login
    console.log("Resultado de la función: " + loginKey);
}

//fin funcion usuario registrados

let intentos = 3;
let loginKey = false;
let usuarios = {};//objeto que contiene los usuarios

class usuariosNew {
    constructor(user, password) {
        this.user = user;
        this.password = password;
    }
}

//While para validar usuario & contraseña
while (intentos > 0 && loginKey === false) {
    let preguntaUser = confirm("Desea agregar un usuario nuevo?: ");
    if (preguntaUser) {
        aggUsuario();//corro la funcion agregar usuario
    } else {
        okUsuario(); //corro funcion validar acceso
        if (loginKey === false) {
            intentos--;//por cada intento fallido descuenta 1 hasta llegar a cero
            console.log("Intentos restantes: " + intentos);
        }
    }
}

if (intentos === 0) {
    console.log("Se agotaron los intentos. Programa finalizado.");
} else {
    //Declaramos la estructura de la clase
    class pacienteNew {
        constructor(nombre, apellido, edad, obraSocial, estado) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
            this.obraSocial = obraSocial;
            this.estado = estado;
        }
    }


    let pacientes = [];

    while (true) {
        let nombre = prompt("Ingrese nombre del/la paciente: ");
        let apellido = prompt("Ingrese apellido del/la paciente: ");
        let edad = prompt("Ingrese edad del/la paciente: ");
        let obraSocial = prompt("Ingrese obra social del/la paciente: ");
        let estado = prompt("Indique si el paciente está activo o inactivo: ");

        let nuevoPaciente = new pacienteNew(
            nombre,
            apellido,
            edad,
            obraSocial,
            estado
        );

        pacientes.push(nuevoPaciente);

        let continuar = confirm("Desea ingresar algun paciente nuevo? ");

        if (!continuar) {
            break;
        }
    }

    let opcionesAccion = prompt(
        "Seleccione acción:\n1. Listado PAcientes\n2. Listado Obras Sociales"
    );


    // Comienzo del switch
    let continuar = true;

    while (continuar) {
        let opcionesAccion = prompt("Ingrese la opción que desea realizar:\n1. Ver listado de pacientes\n2. Ver listado de Obras Sociales");

        switch (opcionesAccion) {
            case "1":
                    let mensaje = "Pacientes:\n\n";
                    for (let i = 0; i < pacientes.length; i++) {
                        let paciente = pacientes[i];
                        mensaje = mensaje + "Nombre: " + paciente.nombre + "\n";
                        mensaje = mensaje + "Apellido: " + paciente.apellido + "\n";
                        mensaje = mensaje + "Edad: " + paciente.edad + "\n";
                        mensaje = mensaje + "Obra Social: " + paciente.obraSocial + "\n";
                        mensaje = mensaje + "Estado: " + paciente.estado + "\n\n";
                    }
                    alert(mensaje);
                break;

            case "2":
                    console.log("Listado de Obras Sociales");
                    let obrasSociales = pacientes.map((paciente) => paciente.obraSocial);
                    let mensaje1 = "Obras Sociales:\n\n" + obrasSociales.join("\n");
                    alert(mensaje1);
                break;

            default:
                console.log("Opción inválida");
                break;
        }

        continuar = confirm("Quiere volver a consultar alguna opción");
    }

    console.log("Fin del programa");
}
