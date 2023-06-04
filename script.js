/*

Programa para gestion en salud, de pacientes y obras sociales
En el mismo encontraran 1 funcion y 1 Switch:
                1. Función de login
                2. Switch para seleccionar paciente e informacion general
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

    // for(let paciente of pacientes) {
    // console.log(pacientes.nombre);
    // }
    let listadoPacientes = confirm("Desea ver el listado de Pacientes? ");
    if (listadoPacientes) {

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
    }


    let listadoOC = confirm("Desea ver el listado de Obras Sociales? ");


    if (listadoOC) {
        console.log("Listado de Obras Sociales");
        pacientes.forEach(paciente => { alert(paciente.obraSocial) });//hacemos un listado de cantidad de pacientes por obra social
    }
}


//   let numeroPaciente = prompt(
//     "Seleccione el paciente:\n1. Juancito Perez\n2. Francisca Lemes\n3. Jacinto Ceres"
//   );


//   // Comienzo del switch
//   switch (numeroPaciente) {
//     case "1":
//       // Información del paciente Juancito Perez
//       let nombrePaciente1 = "Juancito";
//       let apellidoPaciente1 = "Perez";
//       let obraSocialPaciente1 = "Obra Social A";
//       let sesionesTotalesPaciente1 = 10;
//       let sesionesEfectuadasPaciente1 = prompt("Indique sesiones efectuadas: ");

//       console.log(
//         "Nombre y apellido: " + nombrePaciente1 + " " + apellidoPaciente1
//       );
//       console.log("Obra social: " + obraSocialPaciente1);
//       console.log("Sesiones totales: " + sesionesTotalesPaciente1);
//       console.log("Sesiones efectuadas: " + sesionesEfectuadasPaciente1);

//       alert("Nombre y apellido: " + nombrePaciente1 + " " + apellidoPaciente1);
//       alert("Obra social: " + obraSocialPaciente1);
//       alert("Sesiones totales: " + sesionesTotalesPaciente1);
//       alert("Sesiones efectuadas: " + sesionesEfectuadasPaciente1);

//       // For bastante inutil pero es el único que se me ocurrió je, perdón
//       for (let i = 1; i <= sesionesEfectuadasPaciente1; i++) {
//         console.log("Sesión " + i + ": Realizada");
//       }
//       break;

//     case "2":
//       // Información del paciente Francisca Lemes
//       let nombrePaciente2 = "Francisca";
//       let apellidoPaciente2 = "Lemes";
//       let obraSocialPaciente2 = "Obra Social B";
//       let sesionesTotalesPaciente2 = 15;
//       let sesionesEfectuadasPaciente2 = prompt("Indique sesiones efectuadas: ");

//       console.log(
//         "Nombre y apellido: " + nombrePaciente2 + " " + apellidoPaciente2
//       );
//       console.log("Obra social: " + obraSocialPaciente2);
//       console.log("Sesiones totales: " + sesionesTotalesPaciente2);
//       console.log("Sesiones efectuadas: " + sesionesEfectuadasPaciente2);

//       alert("Nombre y apellido: " + nombrePaciente2 + " " + apellidoPaciente2);
//       alert("Obra social: " + obraSocialPaciente2);
//       alert("Sesiones totales: " + sesionesTotalesPaciente2);
//       alert("Sesiones efectuadas: " + sesionesEfectuadasPaciente2);

//       //bucle for
//       for (let i = 1; i <= sesionesEfectuadasPaciente2; i++) {
//         console.log("Sesión " + i + ": Realizada");
//       }
//       break;

//     case "3":
//       // Información del paciente Jacinto Ceres
//       let nombrePaciente3 = "Jacinto";
//       let apellidoPaciente3 = "Ceres";
//       let obraSocialPaciente3 = "Obra Social C";
//       let sesionesTotalesPaciente3 = 8;
//       let sesionesEfectuadasPaciente3 = prompt("Indique sesiones efectuadas: ");

//       console.log(
//         "Nombre y apellido: " + nombrePaciente3 + " " + apellidoPaciente3
//       );
//       console.log("Obra social: " + obraSocialPaciente3);
//       console.log("Sesiones totales: " + sesionesTotalesPaciente3);
//       console.log("Sesiones efectuadas: " + sesionesEfectuadasPaciente3);

//       alert("Nombre y apellido: " + nombrePaciente3 + " " + apellidoPaciente3);
//       alert("Obra social: " + obraSocialPaciente3);
//       alert("Sesiones totales: " + sesionesTotalesPaciente3);
//       alert("Sesiones efectuadas: " + sesionesEfectuadasPaciente3);

//       //bucle for
//       for (let i = 1; i <= sesionesEfectuadasPaciente3; i++) {
//         console.log("Sesión " + i + ": Realizada");
//       }
//       break;

//     default:
//       console.log("Opción inválida");
//       break;
//   }
// }
