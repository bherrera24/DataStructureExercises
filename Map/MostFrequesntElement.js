// Given the array nums find the most frequent element
const mostFrequentElement=(nums)=>{
    const counts=new Map();
    let maxCount=0
    let mostFrequent=null
    for (elem of nums){
      const currentFreqElem=(counts.get(elem)?? 0)+1
      counts.set(elem, currentFreqElem)
      if(currentFreqElem>maxCount){
        maxCount=currentFreqElem
        mostFrequent=elem
      }

    }
    return mostFrequent
}

console.log(mostFrequentElement([1,2,2,2,3,4]))