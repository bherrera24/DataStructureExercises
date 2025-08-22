/* O(n)
🔑 El patrón que usa es:

Two Pointers (fast & slow pointers) → también llamado Write Pointer / Read Pointer.

Cómo funciona en este caso:

Dos punteros:

i → read pointer: recorre todos los elementos del array.

j → write pointer: indica dónde escribir el próximo número distinto de 0.

Primer bucle:

Cada vez que nums[i] !== 0, copias ese valor a nums[j] y avanzas j.

Así, todos los no ceros se “compactan” al inicio.

Segundo bucle:

Cuando ya no hay más números, todo lo que queda después de j se rellena con ceros.
*/

const moveZeroes= (nums)=>{
    let j=0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]!==0){ 
            nums[j]=nums[i]
            j++;
        }
    }

    for(let i=j; i<nums.length; i++){
        nums[i]=0;
    }
    return nums
}