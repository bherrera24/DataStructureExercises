/**
 * Convierte un número entero (entre 1 y 3999) a su representación en números romanos.
 * Utiliza el método de búsqueda en una tabla de símbolos.
 * @param {number} num - El número entero a convertir.
 * @returns {string} - La cadena de texto con el número romano.
 */

const convertNumToRoman=(num)=>{
    const romanos = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];
    let res='';
    let nroRestante=num;
    for([valorNumerico, simbolo] of romanos){


    
        while(nroRestante>=valorNumerico){
            res+=simbolo;
            nroRestante-=valorNumerico;
            console.log("valorNumerico:",valorNumerico ,"simbolo:", simbolo, "nro restante:", nroRestante);
            if(nroRestante===0) break;
         }
    }
    return res;
}

const resConvert=convertNumToRoman(1234);
console.log("res convert:", resConvert);