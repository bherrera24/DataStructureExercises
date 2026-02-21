const isAnagramTwoPointers=(s, t)=>{
    if(s.length!== t.length){
        console.log("It's not valid anagram")
        return false
    }

    sSorted=s.split('').sort()
    tSorted=t.split('').sort()
   let left=0
   while(left<sSorted.length){
    if(sSorted[left]!==tSorted[left]) {return false}
    left ++
   }
    return true
}

const res= isAnagramTwoPointers("hola", "hola")
console.log("res:", res)