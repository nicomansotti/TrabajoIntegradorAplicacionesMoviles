function cancelar() {
    var r = confirm("Desea volver a la página anterior?");
    if (r == true) {
        window.location.href = "index.html";
    
  }
}



function validacion() {
  if (document.getElementById('email').value == "") {
    // Si no se cumple la condicion...
    alert('[ERROR] El campo "Mail suyo" debe tener un valor');
    return false;
  }

  else if (document.getElementById('emailb').value == "") {
    // Si no se cumple la condicion...
    alert('[ERROR] El campo "Mail de Amigo" debe tener un valor');
    return false;
  }

  else if (document.getElementById('subject').value === "" ) {
    // Si no se cumple la condicion...
    alert('[ERROR] El campo "Asunto" debe tener un valor');
    return false;
  }

  else if (validateEmail(document.getElementById('email').value) != true ) {
    // Si no se cumple la condicion...
    alert('[ERROR] Ingresar correctamente su email');
    return false;
  }

  else if (validateEmail(document.getElementById('emailb').value) != true ) {
    // Si no se cumple la condicion...
    alert('[ERROR] Ingresar correctamente el email de su amigo');
    return false;
  }


  // Si el script ha llegado a este punto, todas las condiciones
  // se han cumplido, por lo que se devuelve el valor true
  return true;
}


function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }


function mostrarFiltros(){
  $('#filtros').show();
  $('#botonFiltro').hide();
}