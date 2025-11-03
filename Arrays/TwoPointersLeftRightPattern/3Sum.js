/*
15. 3Sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

const threeSum=(nums)=> {
  const res = [];
  // 1. Ordenar el array facilita evitar duplicados y usar dos punteros.
  nums.sort((a, b) => a - b);

  const n = nums.length;
  // 2. Recorremos hasta n-3 (inclusive), porque necesitamos 3 elementos
  for (let i = 0; i < n - 2; i++) {
    // Evitar duplicados en la posición i
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // Si el valor actual ya es mayor que 0, no puede haber tripletas que sumen 0
    // porque el array está ordenado (optimización opcional)
    if (nums[i] > 0) break;

    let left = i + 1;
    let right = n - 1;

    // 3. Two pointers dentro del bucle
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        // Encontramos una tripleta válida
        res.push([nums[i], nums[left], nums[right]]);

        // Mover ambos punteros para buscar nuevas combinaciones
        left++;
        right--;

        // Saltar duplicados en left
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
        // Saltar duplicados en right
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        // Suma muy pequeña → necesitamos aumentar left
        left++;
      } else {
        // Suma muy grande → necesitamos disminuir right
        right--;
      }
    }
  }

  return res;
}
