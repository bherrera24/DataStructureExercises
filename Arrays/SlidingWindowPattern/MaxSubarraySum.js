/*
 Enunciado del problema

Dado un arreglo de enteros arr y un entero positivo k,
encuentra la suma máxima posible de cualquier subarray contiguo de tamaño exactamente k.

 Ejemplo 1

Input:

arr = [2, 1, 5, 1, 3, 2]
k = 3


Output:

9


Explicación:
Las subarrays de tamaño 3 son:

[2, 1, 5] → suma 8

[1, 5, 1] → suma 7

[5, 1, 3] → suma 9 //este!

[1, 3, 2] → suma 6

La suma máxima es 9.

🔍 ¿Por qué Sliding Window?

Porque solo te interesa subarrays contiguos de tamaño fijo k.
En lugar de recalcular la suma completa para cada ventana (lo que costaría O(n × k)), puedes mover una ventana de tamaño fijo e ir sumando el nuevo elemento y restando el que sale.
De esa forma, lo haces en O(n).

Paso a paso con el ejemplo

arr = [2, 1, 5, 1, 3, 2], k = 3

Paso	Ventana (índices)	Elementos	currentSum	maxSum
0	[0–2]	[2, 1, 5]	8	8
1	[1–3]	[1, 5, 1]	7	8
2	[2–4]	[5, 1, 3]	9	9 //este!
3	[3–5]	[1, 3, 2]	6	9

*/

const MaxSubarraySum=(arr, k)=> {
  let maxSum = 0;
  let windowSum = 0;
  let start = 0;

  for (let end = 0; end < arr.length; end++) {
    // Agregamos el elemento que entra a la ventana (lado derecho)
    windowSum += arr[end];

    // Cuando tenemos una ventana completa de tamaño k
    if (end >= k - 1) {
      // Actualizamos el máximo si esta suma es mayor
      maxSum = Math.max(maxSum, windowSum);

      // Quitamos el elemento que sale del lado izquierdo
      windowSum -= arr[start];

      // Movemos el inicio de la ventana
      start++;
    }
  }

  return maxSum;
}
