function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notarandom;

	notarandom = Math.floor(Math.random() * 10) + 1;


	/*if( notarandom >8)
	{
	  alert("nota: " + notarandom + " Excelente" );

	}
	if(notarandom >6 && notarandom <9)
	{
		alert("nota: " + notarandom + " Aprobo");
	}	
	if(notarandom <4)
	{
		alert("nota: " + notarandom + " Vamos, la proxima se puede.");
	}
*/

	if(notarandom >8)
	{
		 alert("nota: " + notarandom + " Excelente" );
	}
	else
	{
		if(notarandom <4)
		{
			alert("nota: " + notarandom + " Vamos, la proxima se puede.");
		}
		else
		{
			alert("nota: " + notarandom + " Aprobo");
		}
	}


}//FIN DE LA FUNCIÓN