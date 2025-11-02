const removeDuplicates=(nums) =>{
  if (nums.length === 0) return 0;

  let slow = 0; // posición del último número único

  for (let fast = 1; fast < nums.length; fast++) {
    // si encontramos un número diferente al último único
    if (nums[fast] !== nums[slow]) {
      slow++; // avanzamos slow a la siguiente posición
      nums[slow] = nums[fast]; // copiamos el nuevo número único
    }
  }

  // slow es índice, así que la cantidad de únicos es slow + 1
  return slow + 1;
}
// Ejemplo
// ini
// Copiar código
// nums = [0,0,1,1,1,2,2,3,3,4]
// slow = 0
// fast = 1
// Paso 1
// nums[fast]=0, igual a nums[slow]=0 → no hacemos nada

// Paso 2
// fast=2, nums[fast]=1 ≠ nums[slow]=0
// → avanzamos slow a 1 y copiamos nums[fast]
// Ahora:

// ini
// Copiar código
// nums = [0,1,1,1,1,2,2,3,3,4]
//  Repetimos el proceso:
// Al final:

// ini
// Copiar código
// nums = [0,1,2,3,4,_,_,_,_,_]
// slow = 4