/*
26. Remove Duplicates from Sorted Array
Easy
Topics
premium lock icon
Companies
Hint
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

 

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores)
 */
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