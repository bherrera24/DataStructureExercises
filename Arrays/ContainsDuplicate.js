/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.
 O(n)
*/


 const containsDuplicate = function(nums) {
    const seen= new Set();
    for(let num of nums){
        if(seen.has(num)) return true
        else seen.add(numm)
    }
    return false
};