function Mostrar()
{
{	

	var contador=0;
	var acumulador = 0
	var numero;
	var promedio;


	while(contador<5)
	{
	contador= contador + 1;
	numero = prompt("Ingrese Numero");
	numero = parseInt(numero);

	while(numero <-10 || numero>10)
		numero = prompt("Error Reingrese");
		numero= parseInt(numero);
	}
	acumulador= acumulador + numero;
}


promedio = acumulador/5;

alert(promedio);

document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5; 


}
//FIN DE LA FUNCIÓN