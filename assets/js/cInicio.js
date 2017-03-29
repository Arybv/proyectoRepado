window.onload=function(){
  var nombre=document.getElementsById("nombre-coder");
  var apellido=document.getElementsById("apellido-coder");
  var correo=document.getElementsById("correo-coder");
  var contrasenia=document.getElementsById("contrasenia-coder");

  var objetoCoder=JSON.parse(localStorage.getItem("nuevaCoder"));
    nombre.innerText=objetoCoder.nombre;
    apellido.innerText=objetoCoder.apellido;
    correo.innerText=objetoCoder.correo;
    contrasenia.innerText=objetoCoder.contrasenia;

function Coder(nombreCoder, apellidoCoder, correoCoder, contraseniaCoder){
  this.nombre=nombreCoder;
  this.apellido=apellidoCoder;
  this.correo=correoCoder;
  this.contrasenia=contraseniaCoder;
};
document.getElementsByTagName("editando")[0].addEventListener("click", function(){
  window.location="dEditar.html";
})

};
