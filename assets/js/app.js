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
//evento de click al boton
guardar.addEventListener('click', function(){
	//texto ingresado
	var guardado = document.getElementById('listaOculta').value;
	//limpiar el textarea
	document.getElementById('listaOculta').value = '';
	//contenedor que esta en el html
	var contenedorLista = document.getElementById('contenedorLista');
	//creo el div que contiene cada lista
	var nuevaLista = document.createElement('div');
	nuevaLista.setAttribute('id', 'nuevaLista');
	//div que contiene elemento p
	var nuevoElemento = document.createElement('div');
	nuevoElemento.setAttribute('id', 'nuevoElemento');
	//div que contiene elemento enlace
	var elementoEnlace = document.createElement('div');
	elementoEnlace.setAttribute('id', 'elementoEnlace');
	//creo un nodo tipo texto	
	var textoNombreLista = document.createTextNode(guardado);
	//creo un parrafo
	var elementoContenedor = document.createElement('p');
	//creo un nodo texto que diga añadir tarea
	var agregar = document.createTextNode('Añadir tarea');
	//creo un enlace
	var enlace = document.createElement('a');
	enlace.setAttribute('href', '#');
	//agrego los nodos al html
	elementoContenedor.appendChild(textoNombreLista);
	nuevoElemento.appendChild(elementoContenedor);
	enlace.appendChild(agregar);
	elementoEnlace.appendChild(enlace);
	nuevaLista.appendChild(nuevoElemento);
	nuevaLista.appendChild(elementoEnlace);
	contenedorLista.appendChild(nuevaLista);

	//evento de agregar tarea
	enlace.addEventListener('click', function(){
		enlace.style.display='none';
		var contenedorform = document.getElementById('contenedorForm');
		//div que contiene form
		var contenedorGeneral = document.createElement('div');
		contenedorGeneral.setAttribute('id', 'contenedorGeneral');
		//div que contiene el formulario
		var form = document.createElement('form');
		//div que contiene el textarea
		var textarea = document.createElement('textarea');
		//div que contiene el button y el enlace
		var button = document.createElement('button');
		//agrego atributos a button
		button.setAttribute('type', 'button');
		button.setAttribute('name', 'añadir');
		button.setAttribute('id', 'añadir');
		var buttonAñadir = document.createTextNode('Añadir');
		var enlaceCierre = document.createElement('a');
		enlaceCierre.setAttribute('href', '#');
		var icono = document.createElement('i');
		icono.setAttribute('class', 'fa fa-times');
		icono.setAttribute('aria-hidden', 'true');
		//class="fa fa-times" aria-hidden="true"
		//añado nodos al html
		button.appendChild(buttonAñadir);
		form.appendChild(textarea);
		form.appendChild(button);
		form.appendChild(icono);
		contenedorGeneral.appendChild(form);
		contenedorForm.appendChild(contenedorGeneral);

		textarea.focus();


		//evento del boton añadir
		button.addEventListener('click', function(){
			//texto ingresado
			var text = textarea.value;
			//limpiar el textarea
			textarea.value = '';
			textarea.focus();
			//div contenedor general
			var contenedorTarea = document.createElement('div');
			contenedorTarea.setAttribute('id', 'contenedorTarea');
			contenedorTarea.style.display='block';
			//creo un div que contenga lo escrito en textarea
			var textoTextarea = document.createElement('div');
			textoTextarea.setAttribute('id', 'textoTextarea');
			textoTextarea.style.display='inline-block';
			//nodo de texto
			var tarea = document.createTextNode(text);
			//creo elemento que contenga nodo de texto
			var parrafoTarea = document.createElement('p');
			
			//añadiendo nodos a html
			parrafoTarea.appendChild(tarea);
			textoTextarea.appendChild(parrafoTarea);
			contenedorTarea.appendChild(textoTextarea);
			//contenedorForm.appendChild(contenedorTarea);

			contenedorForm.insertBefore(contenedorTarea, contenedorGeneral);


		})
	})
	

});

	//contenedor que esta en el html
	//var contenedorLista = document.getElementById('contenedorLista');
	//creo el div que contiene cada lista
	//var nuevaLista = document.createElement('div');
	//nuevaLista.setAttribute('id', 'nuevaLista');
	//div que contiene elemento p
	//var nuevoElemento = document.createElement('div');
	//nuevoElemento.setAttribute('id', 'nuevoElemento');
	//div que contiene elemento enlace
	//var elementoEnlace = document.createElement('div');
	//elementoEnlace.setAttribute('id', 'elementoEnlace');
	//creo un nodo tipo texto	
	//var textoNombreLista = document.createTextNode(guardado);
	//creo un parrafo
	//var elementoContenedor = document.createElement('p');
	//creo un nodo texto que diga añadir tarea
	//var agregar = document.createTextNode('Añadir tarea');
	//creo un enlace
	//var enlace = document.createElement('a');
	//enlace.setAttribute('href', '#');




