//big O(n)
/*
  Cuándo usar un Map:

  Se usa un Map cuando necesitas buscar elementos rápidamente mientras recorres un array.

  Operación de búsqueda: O(1) en promedio.

  Muy útil cuando quieres evitar bucles anidados (O(n²)).

 Patrones típicos:

 Encontrar pares que sumen un objetivo (Two Sum)

 Contar ocurrencias de elementos

 Encontrar el primer duplicado

 Asociar valores con índices u otras propiedades
*/ 
const twoSum= (nums, target)=>{
     const map = new Map();
    for(let i=0; i<nums.length; i++){
        const complement= target- nums[i]
        if(map.get(complement)) return [map.get(complement, i)]
        map.set(nums[i], i)
    }
}