// Enunciado: Problema de Clasificación de Tres ColoresObjetivo: Dado un arreglo A que contiene $N$ elementos con solo tres valores posibles (por ejemplo, 0, 1 y 2, que representan los tres colores), reordenar los elementos en el lugar (in-place) de tal manera que todos los 0s vengan primero, seguidos por todos los 1s, y finalmente todos los 2s.Restricciones: El algoritmo debe ser:De tiempo lineal ($O(N)$).Utilizar espacio constante extra ($O(1)$), lo que significa que no puedes usar un nuevo array.🛠️ Solución (La Lógica de Tres Punteros)Como discutimos, la solución se basa en tres punteros que recorren el array en una sola pasada:PunteroZona que ControlalowÚltimo elemento conocido que es 0.midEl elemento actual que estamos examinando.highPrimer elemento conocido que es 2.
/**
 * Clasifica un array que contiene solo 0s, 1s y 2s en una sola pasada.
 * @param {number[]} nums
 */
function sortColors(nums) {
    // low: El último elemento del área de 0s.
    let low = 0; 
    // mid: El elemento actual que estamos examinando.
    let mid = 0; 
    // high: El primer elemento del área de 2s.
    let high = nums.length - 1; 

    // Recorremos mientras el área no examinada (mid) no cruce la frontera de los 2s (high).
    while (mid <= high) {
        if (nums[mid] === 0) {
            // Caso 1: El 0 está desordenado, debe ir al área de 'low'.
            
            // Intercambiamos nums[mid] y nums[low] para mover el 0 a su lugar.
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            
            // low avanza porque el 0 está correctamente ubicado.
            low++;
            // mid avanza porque el elemento que se movió a su lugar (un 0) es conocido.
            mid++;
            
        } else if (nums[mid] === 1) {
            // Caso 2: El 1 está en su lugar correcto (entre 0s y 2s).
            // Solo avanzamos el puntero de exploración.
            mid++;
            
        } else { // nums[mid] === 2
            // Caso 3: El 2 está desordenado, debe ir al área de 'high'.
            
            // Intercambiamos nums[mid] y nums[high] para mover el 2 a su lugar.
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            
            // high retrocede porque ya ubicamos un 2 correctamente.
            high--;
            // mid NO avanza. El elemento que llegó a nums[mid] (desde la posición high)
            // podría ser un 0, 1 o 2, y debemos examinarlo antes de avanzar.
        }
    }
    return nums;
}