//brute force
const containsDuplicateBruteForce=(nums)=>{
    for(let i=0;i<nums.length;i++){
        for(let j=0; j<nums.length;j++){
            if(nums[i]===nums[j] && i!==j) return true
        }
    }
    return false;
}

const containsDuplicateSet=(nums)=>{
    const seen= new Set();
    for(let i=0; i<nums.length; i++){
        if(seen.has(nums[i])){
            return true;
        }
        seen.add(nums[i])
    }

    return false
}
//const res=containsDuplicateBruteForce([1,2,3,6,4,5,6]);
const res= containsDuplicateSet([1,2,3,4,5])
console.log("res:", res)
