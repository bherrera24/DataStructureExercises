const plusOne=(digits)=>{
    let n= digits.length
    for(let i=n-1; i>0; i--){
        //si el ultimo digito es <9
        if(digits[i]<9){
            digits++
            return digits
        }
        // si el ultimo digito es >9
        digits[0]=0
    }
        // si todos los digitos era 9
        digits.unshift(1)
  
    return digits
}