//O(n)
const isPalindrome=(arr)=>{
    let j=arr.length-1
    for(let i=0; i<arr.length; i++){
        if(arr[i]!==arr[j]) return false
            j--;
    }

    return true
}

const print=()=> isPalindrome([2,1,1])
console.log(print())