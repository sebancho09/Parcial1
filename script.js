var editando=false;

 
function transformarEnEditable(nodo){



if (editando == false) {

var nodoTd = nodo.parentNode; 

var nodoTr = nodoTd.parentNode; 

var nodoContenedorForm = document.getElementById('contenedorForm'); 

var nodosEnTr = nodoTr.getElementsByTagName('td');

var alimento = nodosEnTr[0].textContent; var calorias = nodosEnTr[1].textContent;

var grasas = nodosEnTr[2].textContent; var proteina = nodosEnTr[3].textContent;

var carbohidratos = nodosEnTr[4].textContent; var opciones = nodosEnTr[5].textContent;

var nuevoCodigoHtml = '<td><input type="text" name="alimento" id="alimento" value="'+alimento+'" size="10"></td>'+

'<td><input type="text" name="calorias" id="calorias" value="'+calorias+'" size="5"</td>'+

'<td><input type="text" name="grasas" id="grasas" value="'+grasas+'" size="5"</td>'+

'<td><input type="text" name="proteina" id="proteina" value="'+proteina+'" size="5"</td>'+

'<td><input type="text" name="carbohidratos" id="carbohidratos" value="'+carbohidratos+'" size="5"</td> <td>En edición</td>';
  
'<td><input type="text" name="carbohidratos" id="carbohidratos" value="'+carbohidratos+'" size="5"</td> <td>En edición</td>';  
  
  

  
 

nodoTr.innerHTML = nuevoCodigoHtml;

 

nodoContenedorForm.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos'+

'<input class="boton" type = "submit" value="Aceptar"> <input class="boton" type="reset" value="Cancelar">';

editando = "true";}

else {alert ('Solo se puede editar una línea. Recargue la página para poder editar otra');

}

}

 

function capturarEnvio(){

var nodoContenedorForm = document.getElementById('contenedorForm'); 

nodoContenedorForm.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos'+


'<input type="hidden" name="alimento" value="'+document.querySelector('#alimento').value+'">'+

'<input type="hidden" name="calorias" value="'+document.querySelector('#calorias').value+'">'+

'<input type="hidden" name="grasas" value="'+document.querySelector('#grasas').value+'">'+

'<input type="hidden" name="proteina" value="'+document.querySelector('#proteina').value+'">'+

'<input type="hidden" name="carbohidratos" value="'+document.querySelector('#carbohidratos').value+'">'+
  
'<input type="hidden" name="ok" value="'+document.querySelector('#ok').value+'">'+  

'<input class="boton" type = "submit" value="Aceptar"> <input class="boton" type="reset" value="Cancelar">';

document.formulario.submit();

}

 

function anular(){

window.location.reload();

}