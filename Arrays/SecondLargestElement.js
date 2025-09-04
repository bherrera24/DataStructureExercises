//O(n)
/*
👉 Single Pass + Tracking (Greedy Scan)

Por qué:

Recorres el array una sola vez (O(n)).

Vas manteniendo estados (las dos variables: largestElement y secondLargestElement).

Cada vez que encuentras un valor mayor, actualizas lo que llevas visto.

Es un patrón muy común cuando quieres:

Encontrar el máximo/mínimo en una sola pasada.

Encontrar el k-ésimo máximo (ejemplo: Top-K Elements).

Resolver problemas de tipo streaming, donde no puedes ordenar toda la lista porque sería más costoso.

📌 Resumen:

Patrón: Single Scan + Greedy Tracking.

Complejidad: O(n) tiempo, O(1) espacio.

Relacionado con: "Top-K elements" (que a veces se resuelven con heaps), pero en este caso bastaba con tracking manual.

¿Quieres que te arme un ejercicio de práctica más difícil basado en este mismo patrón (ej. encontrar los tres elementos más grandes o los dos más pequeños y los dos más grandes en una sola pasada)?
*/
const largestAndSecondLargestElement= (nums)=>{
    let largestElement = Number.MIN_SAFE_INTEGER;

    let secondLargestElement= Number.MIN_SAFE_INTEGER;

    for(let i=0; i<nums.length; i++){
        if(nums[i]> largestElement){
            secondLargestElement= largestElement;
            largestElement= nums[i];
     
        }else if(nums[i]> secondLargestElement && nums[i]<largestElement){
            secondLargestElement=nums[i]
        }
       
    }

         return {largestElement, secondLargestElement}
}

const print=()=>{
        const {largestElement, secondLargestElement}=largestAndSecondLargestElement([12, 13, 14, 11 ,10])
        console.log("largestElement:", largestElement, "secondLargestElement:", secondLargestElement)
}

print();