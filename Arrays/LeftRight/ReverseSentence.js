const reverseWords=(sentence)=> {
const trimmed= sentence.trim()
const wordsArr= trimmed.split(/\s+/)

let left=0
let right=wordsArr.length-1
while(left<right){
    const temp=wordsArr[left]
    wordsArr[left]=wordsArr[right]
    wordsArr[right]=temp
    left ++
    right --
    
}
    // Replace this placeholder return statement with your code
    return wordsArr.join(' ');
}

console.log(reverseWords("We love python"))