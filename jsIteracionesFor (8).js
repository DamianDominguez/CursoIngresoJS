function Mostrar()
{

/* al generar numeros random del o al 10 se debe contar la cantidad 
de cada una de estas cifras, repetir la iteracion para lanzar el random 100.000 veces
e informar: 1) la cantidad de veces que salio cada numero del 0 al 10, 
2) el porcentaje de veces que salio cada numero con respecto al total*/
var numeroingresado;
var numeroanterior;
var tienedivisor;

numeroingresado = prompt("Ingrese Numero");
numeroingresado = parseInt(numeroingresado);

for(numeroanterior=2 ; numeroanterior<(numeroingresado /2); numeroanterior++)
{
	if(numeroingresado % numeroanterior==0)
	{
		alert("es divisor");
		tienedivisor="Si"
	}
}

}//FIN DE LA FUNCIÓN