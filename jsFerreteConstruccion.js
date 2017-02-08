/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

var largo;
var ancho;
var radio;
var resultado;
var cemento;
var cal;

largo = document.getElementById('Largo').value;
ancho = document.getElementById('Ancho').value;
largo = parseInt(largo);
ancho = parseInt(ancho);
resultado = (largo * 2) + (ancho * 2);
resultado = parseInt(resultado);
resultado = (resultado * 3);
alert("Se necesitan " + resultado + "metros de alambre");

}

function Circulo () 
{

radio = document.getElementById('Radio').value;		
radio = parseInt(radio);
resultado = 3.14 * radio * 2;
resultado = parseInt(resultado);
resultado = (resultado * 3)
alert("Se necesitan " + resultado + " metros de alambre");

}
function Materiales () 
{
	ancho = document.getElementById('Ancho').value;
	largo = document.getElementById('Largo').value;
	ancho = parseInt(ancho);
	largo = parseInt(largo);
	resultado = (largo + ancho);
	resultado = parseInt(resultado);
	cemento = resultado * 2
	cal = resultado * 3
	alert(" Para el terreno de " + resultado + " metros, se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal ");
}