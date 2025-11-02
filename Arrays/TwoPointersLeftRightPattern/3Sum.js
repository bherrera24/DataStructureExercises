function threeSum(nums) {
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
