/*
Paso a paso lógico:
1.-Tomas tu número decimal (ej. $149$)
2.-Buscas en tu tabla el valor más alto que sea menor o igual a tu número
3-.Escribes ese símbolo romano.Restas ese valor a tu número original.
4.-Repites el proceso con el nuevo resultado hasta llegar a cero.
*/
const convertNumToRoman=(num)=>{
    const romanos = [
        {value: 1000, symbol: 'M'},
        {value: 900, symbol: 'CM'},
        {value: 500, symbol: 'D'},
        {value: 400, symbol: 'CD'},
        {value: 100, symbol: 'C'},
        {value: 90, symbol: 'XC'},
        {value: 50, symbol: 'L'},
        {value: 40, symbol: 'XL'},
        {value: 10, symbol: 'X'},
        {value: 9, symbol: 'IX'},
        {value: 5, symbol: 'V'},
        {value: 4, symbol: 'IV'},
        {value: 1, symbol: 'I'} 
    ];
    let res='';
    let nroRestante=num;
for(const {value, symbol} of romanos ){
    while(nroRestante>=value){
        res+= symbol;
        nroRestante-=value;
        if(nroRestante===0) break;
    }
}
 return res;
}

const resConvert=convertNumToRoman(149);
console.log("res convert:", resConvert);
