/*var boton, lista;
function addEvent () {
	boton = document.getElementById("ADD");
	ADD.addEventListener("click", function(){
		if (li.innerHTML = ""){
			alert("ingrese texto valido");
		} 
		else{
			lista = document.getElementById("events");
			item = document.createElement("li");
		}
	});
}
*/
var boton, lista, tarea, item, radio ;
//aqui tomo el boton de id ADD
boton = document.getElementById("ADD");
//le asigno el click y una funcion para eso con un evento
boton.addEventListener("click",function(){
//aqui tomo mi variable tarea y le asigno la clase events del html
	tarea = document.getElementById("events");
//asigno a mi variable lista que haya creado un li
	lista = document.createElement("li");
//agregar input
	radio = document.createElement("input");
	radio.setAttribute("class", "option");
//con item tomo el valor ingresado en mi text area
	item = document.getElementById("texto").value;
	if (item.length > 0) {
	//var t guarda lo q se ingreso en el textarea
		var t = document.createTextNode(item);
	//le digo a lista(li) que guarde t
		lista.appendChild(t, radio);
	//luego guardo lista(li) dentro de mi "tarea"(ul)
		tarea.appendChild(lista);	
	}
	else{
		alert("Ingrese Tarea");
	}
})