/*
Given an integer array nums, find the subarray with the largest sum, and return its sum. Example 1: Input: nums = [-2,1,-3,4,-1,2,1,-5,4] Output: 6 Explanation: The subarray [4,-1,2,1] has the largest sum 6. Example 2: Input: nums = [1] Output: 1 Explanation: The subarray [1] has the largest sum 1. Example 3: Input: nums = [5,4,-1,7,8] Output: 23 Explanation: The subarray [5,4,-1,7,8] has the largest sum 23. Constraints: 1 <= nums.length <= 105 -104 <= nums[i] <= 104
*/
/*
Este en particular es un clásico de DP de 1D arrays:

Patrón principal: Kadane’s Algorithm (Dynamic Programming sobre arrays)

Idea clave: en cada índice decides si extender la subarray anterior o empezar una nueva subarray desde el número actual.

Complejidad:

Tiempo: O(n)

Espacio: O(1) (versión optimizada, manteniendo solo el máximo global y el máximo hasta el momento).
*/
const maxSubArray = (nums)=> {
    let best= nums[0]
    let bestEnd= nums[0]
    for(let i=1; i<nums.length; i++){
        bestEnd= Math.max(nums[i], bestEnd + nums[i]);
        best = Math.max(best, bestEnd);
    }
    return best;
};