
var boton, lista, tarea, item, text, check, trash, borrar, basurero;
//aqui tomo el boton de id ADD
boton = document.getElementById("ADD");
//le asigno el click y una funcion para eso con un evento
boton.addEventListener("click",function(){
//aqui tomo mi variable tarea y le asigno la clase events del html
	tarea = document.getElementById("events");
//asigno a mi variable lista que haya creado un li
	lista = document.createElement("li");
	lista.setAttribute("class", "listado");
//con item tomo el valor ingresado en mi text area
	text = document.getElementById("texto");
	item = text.value;
//si el largo del texto supera los 0 caracteres, entonces grega la tarea
	if (item.length > 0) {
//var t guarda lo q se ingreso en el textarea
		var t = document.createTextNode(item);
//agregar input
		text.value = "";
		check = document.createElement("input");
		check.setAttribute("class", "option");
		check.setAttribute("type", "checkbox");
		check.setAttribute("onclick", "marcar(this)");
		caja = document.createElement("button");
		caja.setAttribute("id", "basurero");
		caja.setAttribute("onclick", "eliminar()");
		trash = document.createElement("i");
		trash.setAttribute("class", "fa fa-trash");
		caja.appendChild(trash);
//le digo a lista(li) que guarde las variables una por una
		lista.appendChild(check);
		lista.appendChild(t);
		lista.appendChild(caja);
//luego guardo lista(li) dentro de mi "tarea"(ul)
		tarea.appendChild(lista);	
	}
//si no, lanza una alerta para que ingrese texto
	else{
		alert("Add a Valid Event");
	}
})

//tachar tarea
function marcar (element) {
	var check = element.parentNode;
	if (element.checked == true) {
		check.classList.add("tachado");
	}
	else{
		check.classList.remove("tachado");
	}
}

//borrar Tarea

function eliminar () {
	var listado = document.getElementById("events");
	var list = listado.firstChild;
	console.log(list);
	listado.removeChild(list);
}

function marcar2(elemento){
	console.log(elemento);
}
