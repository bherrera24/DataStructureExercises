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
////otra version
function isPalindrome(s) {
   
const cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
 let left = 0, right = cleaned.length - 1;
    while ( left < right) {
       
        
      
        if (cleaned[left] !== cleaned[right]) {
            // write your code here
            return false
        }
        
        left++;
        right--;
    }

    return true;
}

