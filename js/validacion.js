function Valida(formulario) {
    alert("Ha Ingresado la Validación");
    /* Validación de campos NO VACÍOS */
    if ((formulario.campo1.value.length == 0) || (formulario.campo2.value.length ==0) || (formulario.cpostal.value.length ==0) || (formulario.dni.value.length ==0) || (formulario.email.value.length ==0)) {
        alert('Falta Información');
        return false;
    }   
    if (isNaN(parseInt(formulario.campo2.value))) {
        alert('el campo2 debe ser un n&uacute;mero');
        return false;
    }  
    /* validación del CÓDIGO POSTAL*/
    var ercp=/(^([0-9]{5,5})|^)$/;
    if (!(ercp.test(formulario.cpostal.value))) {  
        alert('Contenido del cpostal no es un C&Oacute;DIGO POSTAL');
        return false; 
    }
    /* validación del DNI */
    var erdni=/(^([0-9]{8,8}\-[A-Z])|^)$/;
    if (!(erdni.test(formulario.dni.value))) {  
        alert('Contenido del dni no es un DNI v&aacute;lido.');
        return false;  
    } 
    /* validación del e-mail */
    var ercorreo=/^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;          
    if (!(ercorreo.test(formulario.email.value))) {  
        alert('Contenido del email no es CORREO ELECTR&Oacute;NICO v&aacute;lido.');
        return false; 
    }
    /* si no hemos detectado fallo devolvemos TRUE */
    return true;
}