//para que el formulario comience oculto
var oculto = document.getElementById('formularioOculto').style.display='none';

//se crea el evento click 
var listita = document.getElementById("List");
listita.addEventListener("click", ocultar);
//se crea la funcion con la cual se ocultara el añadir comentario al hacer click y se desplegara el formulario
function ocultar(){
	document.getElementById("lista").style.display = "none";
	var newBoard = document.getElementById("formularioOculto");
	formularioOculto.style.display = "block";

}


