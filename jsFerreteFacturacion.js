/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	
	var precioUno;
	var precioDos;
	var precioTres;
	var precioFinal;

	precioUno = document.getElementById('PrecioUno').value;
	precioDos = document.getElementById('PrecioDos').value;
	precioTres = document.getElementById('PrecioTres').value;
	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);
	precioFinal = parseInt(precioUno + precioDos + precioTres);
	alert("la suma es "+precioFinal);

}

function Promedio () 
{
	
    var precioUno;
	var precioDos;
	var precioTres;
	var total;
	var precioFinal;

	precioUno = document.getElementById('PrecioUno').value;
	precioDos = document.getElementById('PrecioDos').value;
	precioTres = document.getElementById('PrecioTres').value;
	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);
	total = parseInt(precioUno + precioDos + precioTres);
	precioFinal = parseInt((total)/3);
	alert("el promedio es "+precioFinal);
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var total;
	var precioFinal;

	precioUno = document.getElementById('PrecioUno').value;
	precioDos = document.getElementById('PrecioDos').value;
	precioTres = document.getElementById('PrecioTres').value;
	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);
	total = parseInt(precioUno + precioDos + precioTres);
	precioFinal = parseInt((total));
	alert("el precio final es "+precioFinal);
}