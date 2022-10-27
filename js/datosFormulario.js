//Capturamos los datos del formulario

function capturandoDatos(){
    var apellido = document.getElementById("apellido").value;
    var nombre = document.getElementById("nombre").value;
    var dni = document.getElementById("dni").value;
    var fecNac = document.getElementById("fecNac").value;
    var email = document.getElementById("email").value;
    alert("Sus datos son \nApellido: " + apellido + "\nNombre: " + nombre + "\nEmail: "+  email + "\ DNI: "+  dni + "\nFecha de nacimiento: " + fecNac);
    alert("Sus datos han sido guardados. Nos contactaremos con usted muy pronto!");
}