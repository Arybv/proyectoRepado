window.onload=function(){
  document.getElementsByTagName("form")[0].onsubmit=function(e){
    e.preventDefault();
  }
var objetoCoder = JSON.parse(localStorage.getItem("nuevaCoder"));
var inputsEditar = document.getElementsByClassName("input-editar");
	inputsEditar[0].value = objetoCoder.nombre;
  inputsEditar[1].value = objetoCoder.apellido;
  inputsEditar[2].value = objetoCoder.correo;
  inputsEditar[3].value = objetoCoder.contrasenia;
  document.getElementsByTagName("button")[0].addEventListener("click",function(){
    if(inputsEditar[0].length!=0 && inputsEditar[1].length!=0 && inputsEditar[2]!=0 && inputsEditar[3].length!=9){
      objetoCoder.nombre=inputsEditar[0].value;
      objetoCoder.apellido=inputsEditar[1].value;
      objetoCoder.correo=inputsEditar[2].value;
      objetoCoder.contrasenia=inputsEditar[3].value;
      localStorage.setItem("nuevaCoder",JSON.stringify(objetoCoder));
      			window.location="bRegistro.html"
    }else{
      alert("Es obligatorio completar todos los campos");
    }
  })
};
