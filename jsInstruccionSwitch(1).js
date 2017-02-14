function Mostrar()
{
//tomo la edad  
var mesdelaño;

mesdelaño = document.getElementById('mes').value;

switch(mesdelaño)
{
	case "Enero":
	alert("Que comiences bien el año.");
	break;

	case "Marzo":
	alert("A Clases!!!");
	break;

	case "Julio":
	alert("Se Vienen las vacaciones");
	break;

	case "Diciembre":
	alert("Felices Fiestas");
	break;

	default:
	alert("No Eligio un mes valido");

}
}//FIN DE LA FUNCIÓN
