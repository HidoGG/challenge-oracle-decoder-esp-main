// Creo una variable, y utilizo el querySelector, para vincularla a un objeto del HTML
var botonEncriptacion = document.querySelector("#btnencriptar");
//Verifico con el console.log, que este funcionando
console.log(botonEncriptacion);

var botonDesencriptar = document.querySelector("#btndesencriptar");
console.log(botonDesencriptar);


var botonCopiar = document.querySelector("#btncopy");
console.log(botonCopiar);

var inputtex = document.querySelector(".textinput");

botonCopiar.addEventListener("click", function (event) {
  event.preventDefault();
  document.execCommand("selectAll");
  document.execCommand("copy");
  fromCopy.reset();
})

botonDesencriptar.addEventListener("click", function (event) {
    
  event.preventDefault();

  var acceder = document.querySelector("#from");

  var texto = acceder.textoEnc.value;

  console.log(texto);
    
  document.querySelector("#msg").value = DesencriptarT(texto);

  from.reset();

})

function Sintilde(e) {
  key = e.keyCode || e.which;
  tecla = String.fromCharCode(key).toString();
  letras = "abcdefghijklmnñopqrstuwxyz123456789-:,;._";
  especiales = [8, 13];
  tecla_especiales = false
  for (var i in especiales) {
    if (key == especiales[i]) {
      tecla_especiales = true
      break;
    }
    
  }
    
  if (letras.indexOf(tecla) == -1 && !tecla_especiales) {
    alert("Ingresar solo letras")
    return false;
  }
}


// Con mi nueva var, creo un evento, con el addEventListener, que va a tener un acción, hace click, y una function anonima.
botonEncriptacion.addEventListener("click", function (event) {
    // Evita que se recarge, la pagina.
    event.preventDefault();
    

    // Creo una var, que seleccionara todo mi from.
    var acceder = document.querySelector("#from");
    //Y otro var, para seleccionar que parte de mi from, me interesa ver lo que escribo.
    var texto = acceder.textoEnc.value;
    // Y aca, compruebo que este funcionando.
    console.log(texto);

    // Selecciono la IP, donde se pegara mi mensaje encriptado. 
    document.querySelector("#msg").value = encriptar(texto);
  
    from.reset();
   
});

  function encriptar(texto) {

    var encriptaciones = "";
    
    encriptaciones = texto.replace(/e/g, "enter");
    encriptaciones = encriptaciones.replace(/i/g, "imes");
    encriptaciones = encriptaciones.replace(/a/g, "ai");
    encriptaciones = encriptaciones.replace(/o/g, "ober");
    encriptaciones = encriptaciones.replace(/u/g, "ufat");
    
    
    return encriptaciones;

  }

  function DesencriptarT(texto) {

    var desenciptaciones = "";

    desenciptaciones = texto.replace(/enter/g, "e");
    desenciptaciones = desenciptaciones.replace(/imes/g, "i");
    desenciptaciones = desenciptaciones.replace(/ai/g, "a");
    desenciptaciones = desenciptaciones.replace(/ober/g, "o");
    desenciptaciones = desenciptaciones.replace(/ufat/g, "u");
    
    return desenciptaciones;
  }

    // Me impide escribir en mayusculas, en el input. Esta asociada en el HTML.
  function minuscula(e) {
    e.value = e.value.toLowerCase();
  }
