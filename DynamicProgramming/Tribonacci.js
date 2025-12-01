/*
Problem: N-th Tribonacci Number
15 min



Statement
Given a number n, calculate the corresponding Tribonacci number. The Tribonacci sequence 
T
n
T 
n
​
 
 is defined as:

T
0
=
0
,
 
T
1
=
1
,
 
T
2
=
1
T 
0
​
 =0, T 
1
​
 =1, T 
2
​
 =1
, and 
 
T
n
+
3
=
T
n
+
T
n
+
1
+
T
n
+
2
,
 
 T 
n+3
​
 =T 
n
​
 +T 
n+1
​
 +T 
n+2
​
 , 
 for 
n
>
=
0
n>=0
The input number, n, is a non-negative integer.
*/
function findTribonacci(n, memo={}){
    if(n in memo) return memo[n]
    if(n===0) return 0
    if(n===1 || n===2) return 1
    let result= findTribonacci(n-1, memo)+ findTribonacci(n-2, memo) + findTribonacci(n-3, memo)
    memo[n]=result
    return result
}

export{findTribonacci}