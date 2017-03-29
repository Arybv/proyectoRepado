window.onload=funtion(){
  document.getElementById("form").onsubmit=function(e){
    e.preventDefault();
  }
  function Coder(nombreCoder, apellidoCoder, correoCoder, contraseñaCoder){
    this.nombre      = nombreCoder;
    this.apellido    = apellidoCoder;
    this.correo      = correoCoder;
    this.contrasenia = contraseñaCoder;
  };

  var arrCoders = [];
  document.getElementById("registro2").addEventListener("click",function(){
    var nombre       = document.getElementById("nombre").value;
    var apellido     = document.getElementById("apellido").value;
    var correo       = document.getElementById("correo").value;
    var contrasenia  = document.getElementById("contrasenia").value;
    if(nombre.length!=0 && apellido.length!=0 && correo.length!=0 contrasenia.length!=0){
      console.log(new Coder(nombre, apellido, correo, contrasenia));
      localStorage.setItem("nuevaCoder",JSON.stringify(new Coder(nombre, apellido, correo, contrasenia)));
      document.getElementById("form").reset();
      window.location="editar.html";
    }else{
      var indica       = document.getElementById("indica");
      indica.innerText = "Estos campos son obligatorios"
    }
  });
  function creandoDiv(coder){
    var contenedor = document.getElementById("div-contenedor");
      contenedor.innerHTML="";
    for(var i=0; i<coder.length;i++){
      var contenedorCoder = document.createElement("div");
        contenedorCoder.classList.add("una-coder");
      for(var prop in coder[i]){
        var dato = document.createElement("p");
          dato.innerHTML=prop + " : " + coder[i][prop];
          contenedorCoder.appenChild(dato);
      }
        contenedor.appenChild(contenedorCoder);
    }
  }
var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var correo = document.getElementById("correo");
var contrasenia = document.getElementById("contrasenia");
//Solo colocar letras
var soloLetras = function(e){
  var codigoT = e.keyCode;
  if((codigoT>=97 && codigoT<=122)||(codigoT>=65&&codigoT<=90)||(codigoT==39)||(codigoT==32)){
    this.nextElementSibling.nextElementSibling.innerText="";
    return true;
  }else{
    this.nextElementSibling.nextElementSibling.innerText="Coloque solo letras"
    return false;
  }
}
nombre.onkeypress   = soloLetras;
apellido.onkeypress = soloLetras;

var input=document.getElementByClassName("input-registro");
var validoInput = function(){
  if(this.value.trim().length==0){
    this.value="";
    this.nextElementSibling.innerText="Obligatorio";
  }else{
    this.nextElementSibling.nextElementSibling.innerTex="";
  }
  if(this.getAttribute("type")=="text"){
    var arrDato=this.value.split(" ");
    var datoMayus="";
    for(var i=0;i<arrDato.length;i++){
      datoMayus += arrDato[i].CharAt(0).toUpperCase()+arrDato.substring(1).toLowerCse()+"";
    }
    this.value=datoMayus.trim();
  }
}
for(var i=0;i<inputs.length;i++){
  inputs[i].onblur=validaInput;
}
}
