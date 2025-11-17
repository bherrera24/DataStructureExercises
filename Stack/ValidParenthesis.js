/**
20. Valid Parenthesis

Code
Testcase
Test Result
Test Result
Leet
20. Valid Parentheses
Easy
Topics
premium lock icon
Companies
Hint
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

Example 5:

Input: s = "([)]"

Output: false
 */
const isValid = (s)=> {
 const pairs= {
    ')':'(',
    '}': '{',
    ']':'['
 }
 const stack=[]
 //si la longitud del sting no es par
 if(s.length%2 === 1) return false
 for(let i=0; i<s.length; i++){
    const ch= s[i]
    //si el caracter es un parentesis que cierra
    if(pairs[ch]){
        const top= stack.length? stack[stack.length-1]:null
        //saco el primer elemento de la pila y veo si es igual a alguno de los parentesis que cierra
        if(top===pairs[ch]){
            stack.pop()
        }else{
            return false //pila vacia o top no es parentesis que correponde para cerrar
        }
    }else{
        stack.push(ch)
    }
    
 }
 return stack.length===0
};
console.log(isValid("()"))