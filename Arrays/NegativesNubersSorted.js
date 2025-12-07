/*

Given an array of positive and negative integers, in-place segregate them in linear time and constant space. The output should contain all negative numbers, followed by all positive numbers.

Input : [9, -3, 5, -2, -8, -6, 1, 3]
Output: [-3, -2, -8, -6, 9, 5, 1, 3] or [-3, -2, -8, -6, 9, 5, 1, 3] or any other valid combination.

Input : [-4, -2, -7, -9]
Output: [-4, -2, -7, -9] or any other valid combination.

Input : [2, 4, 3, 1, 5]
Output: [2, 4, 3, 1, 5] or any other valid combination.

*/
/**
 * Segrega in-place los números negativos y positivos en un array
 * usando la técnica de dos punteros (similar a la partición de Lomuto).
 * * Complejidad de Tiempo: O(n)
 * Complejidad de Espacio: O(1)
 * * @param {number[]} arr El array de enteros a segregar.
 * @returns {number[]} El array modificado.
 */
function segregarPositivosYNegativos(arr) {
    if (!arr || arr.length < 2) {
        return arr; // No es necesario segregar
    }

    // El índice 'j' rastrea el límite entre negativos (izquierda) y positivos (derecha).
    // Inicialmente, 'j' apunta a la posición donde debería ir el próximo número negativo.
    let j = 0; 
    
    // El índice 'i' itera sobre todos los elementos del array.
    for (let i = 0; i < arr.length; i++) {
        // La condición de partición es: si el elemento actual (arr[i]) es negativo.
        if (arr[i] < 0) {
            // Si el elemento negativo encontrado (arr[i]) no está ya en la posición 'j',
            // realizamos el intercambio para moverlo a la sección negativa.
            if (i !== j) {
                // Intercambiar arr[i] y arr[j]
                [arr[i], arr[j]] = [arr[j], arr[i]]; 
            }
            
            // Mover el puntero 'j' a la siguiente posición disponible para un negativo.
            j++;
        }
    }
    
    return arr;
}

// --- Ejemplos de Prueba ---
let array1 = [9, -3, 5, -2, -8, -6, 1, 3];
console.log(`Original: ${array1}`);
segregarPositivosYNegativos(array1);
console.log(`Segregado: ${array1}`); 
// Salida esperada: [-3, -2, -8, -6, 9, 5, 1, 3] (o un orden de positivos diferente)

console.log('---');

let array2 = [-4, -2, -7, -9];
console.log(`Original: ${array2}`);
segregarPositivosYNegativos(array2);
console.log(`Segregado: ${array2}`);
// Salida esperada: [-4, -2, -7, -9]

console.log('---');

let array3 = [2, 4, 3, 1, 5];
console.log(`Original: ${array3}`);
segregarPositivosYNegativos(array3);
console.log(`Segregado: ${array3}`);
// Salida esperada: [2, 4, 3, 1, 5]

console.log('---');

let array4 = [1, 2, -1, -2, 3, -3];
console.log(`Original: ${array4}`);
segregarPositivosYNegativos(array4);
console.log(`Segregado: ${array4}`);
// Salida esperada: [-1, -2, -3, 2, 3, 1] (el orden de 2, 3, 1 puede variar. )