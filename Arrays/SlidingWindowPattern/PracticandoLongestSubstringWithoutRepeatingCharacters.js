const returnLongestSubsting=(str)=>{
    let start=0;
    let seen= new Map();
    let maxLength=0;
    for(let end=0; end<str.length; end++){
        const char=str[end];
        if(seen.has(char) && seen.get(char)>=start){
            start=seen.get(char)+1;
        }
        seen.set(char, end);
        maxLength= Math.max(maxLength, end-start+1)
    }
    return maxLength;
}
const substring= returnLongestSubsting('abcdeffffabcdefrthyv');
console.log("res:", substring);