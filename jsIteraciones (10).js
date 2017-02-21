function Mostrar()
{

	//iteracion hasta que el usuario quiera//
	var respuesta = "Si";
	var nota;
	var contador = 0;
	var sumadornota = 0;
	var promedionota;
	var edad;
	var nombre;
	var sexo;
	var elmasviejo;
	var edadmasviejo;

	while(respuesta = "Si")
	{
		contador ++;
		nota = prompt("Por Favor Ingrese una nota");
		nota = parseInt(nota);

		while(nota < 0 || nota > 10)
		{
			nota = prompt("Ingrese una nota");
			nota = parseInt(nota);
		}
	}		
			sumadornota = sumadornota + nota;
			respuesta = prompt("Ingrese S para continuar");
	
			promedionota = sumadornota / contador;
			edad = prompt("Por favor ingrese Edad");
			edad = parseInt(edad);
			nombre = prompt("Por favor ingrese Nombre");
			sexo = prompt("Por Favor ingrese Sexo");
			/* Aca termino la carga y validacion de datos*/
			/*comenzamos a hacer las operaciones necesarias*/

			if(contador == 0)
			{
			 elmasviejo = nombre;
			 edadmasviejo = edad;
			}
			else
			{
				if(edad > edadmasviejo)
				{
					elmasviejo = nombre;
			 		edadmasviejo = edad;

				}
			}
}

/*1- cantidad de mujeres aprobadas
			 		2- cantidad de hombres mayores a 25 aprobados
			 		3- cantidad de mujeres menores a 20 años
			 		4- nombres de la mujer con mejor nota
			 		5- nombre del hombre con mejor nota
			 		6- promedio de nota de los hombres 
			 		7- promedio de nota de las mujeres
			 		8- porcentajes de aprobadosvs desaprobados
			 		9- el sexo y el nombre de la primer persona que se saque 10










	/*var contador=0;
	var numero;
	var sumanegativos =0;
	var sumanegativos=0;
	var contadornegativos =0;
	var contadorpositivos =0;
	var contadorceros =0;
	var contadorpar =0;
	//declarar contadores y variables 
	
	var respuesta="si";

	*while(respuesta!="no")
	{
		contador ++;
		numero = prompt("Ingrese un Numero");
		numero = parseInt(numero);

		if(numero < 0)
		{
			sumanegativos = sumanegativos + numero;
			contadornegativos ++;

		}
		else
		{
			if(numero > 0)
				sumapositivos = sumapositivos + numero;
				contadorpositivos ++;
		}
		else
		{
			contadorceros ++;
		}
		if(numero % 2 == 0)
		{
			contadorpar ++;
		}
	}
	var promedionegativo = promedionegativo / contadornegativos;
	var promediopositivo = promediopositivo / contadorpositivos;
	var diferencia = sumapositivos - sumanegativos;

	document.write("La suma de los negativos es: " + sumanegativos);*/



