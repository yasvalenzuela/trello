//para que el formulario comience oculto
var oculto = document.getElementById('formularioOculto').style.display='none';

//se crea el evento click 
var listita = document.getElementById('List');
listita.addEventListener('click', function (){
//se crea la funcion con la cual se ocultara el añadir comentario al hacer click y se desplegara el formulario
	document.getElementById("lista").style.display = 'none';
	var formularioOculto = document.getElementById('formularioOculto');
	formularioOculto.style.display = 'inline-block';
});

var guardar = document.getElementById('guardar');
guardar.addEventListener('click', function(){
	//texto ingresado
	var guardado = document.getElementById('listaOculta').value;
	//limpiar el textarea
	document.getElementById('listaOculta').value = '';
	//contenedor que esta en el html
	var contenedorLista = document.getElementById('contenedorLista');
	//el div que contiene cada lista
	var nuevaLista = document.createElement('div');
	nuevaLista.style.display='inline-block';

	//creo un nodo tipo texto	
	var textoNombreLista = document.createTextNode(guardado);
	//creo un parrafo
	var elementoContenedor = document.createElement('p');
	elementoContenedor.appendChild(textoNombreLista);
	nuevaLista.appendChild(elementoContenedor);

	contenedorLista.appendChild(nuevaLista);

	//creo un enlace
	var enlace = document.createElement('a');
	//creo un nodo texto que diga añadir tarea
	var agregar = document.createTextNode('Añadir tarea');


	enlace.appendChild(agregar);
	nuevaLista.appendChild(enlace);

})



