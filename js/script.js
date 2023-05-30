function encriptar() {
    //Guardar el texto
    var texto = document.getElementById("textPrincipal").value.toLowerCase();

    //Reemplazo del texto
    var mensaje = texto.replace(/e/igm,"enter");
    var mensaje = mensaje.replace(/o/igm,"ober");
    var mensaje = mensaje.replace(/i/igm,"imes");
    var mensaje = mensaje.replace(/a/igm,"ai");
    var mensaje = mensaje.replace(/u/igm,"ufat");

    //moficaciones
    document.getElementById("munieco").style.display = "none";
    document.getElementById("msgerror").style.display = "none";
    document.getElementById("resultado").innerHTML = mensaje;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("textPrincipal").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";

  }
  
  function desencriptar() {
    var texto = document.getElementById("textPrincipal").value.toLowerCase();

    var mensaje = texto.replace(/enter/igm,"e");
    var mensaje = mensaje.replace(/ober/igm,"o");
    var mensaje = mensaje.replace(/imes/igm,"i");
    var mensaje = mensaje.replace(/ai/igm,"a");
    var mensaje = mensaje.replace(/ufat/igm,"u");

    document.getElementById("munieco").style.display = "none";
    document.getElementById("msgerror").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("resultado").innerHTML = mensaje;
    document.getElementById("inputtexto").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
  }
  
  function copy() {
    var contenido = document.querySelector("#resultado");
    contenido.select();
    document.execCommand("copy");
    alert("Mensaje Copiado!!");
  }