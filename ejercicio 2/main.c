#include <stdio.h>
#include <stdlib.h>

//2.	Escribir el programa necesario para calcular la suma de dos números. Mostrar el resultado

int main()
{
    int numerouno;
    int numerodos;
    int resultado;

    printf("Ingrese un numero ");
    scanf("%d",&numerouno);
    printf("ingrese un numero ");
     scanf("%d",&numerodos);

    resultado=(numerouno+numerodos);
    printf("El resultado es %d ", resultado);

    return 0;
}
