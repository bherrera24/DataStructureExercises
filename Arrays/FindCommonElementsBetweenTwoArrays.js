/*
Patrón

El patrón aquí es Hashing (HashSet lookup).

Convertimos un array en un Set para búsquedas rápidas en O(1).

Luego recorremos el otro array y contamos coincidencias.

Este patrón es muy común en problemas de intersección de arrays y membership check.
*/

const findCommonElementsBetweenTwoArrays=(nums1, nums2)=>{
    const set1= new Set(nums1);
    const set2= new Set(nums2);

    let answers1=0
    for(num of nums1){
        if(set2.has(num)) answers1++;
    }
    let answers2=0
    for(num of nums2){
        if(set1.has(num)) answers2++;
    }
    return [answers1, answers2]
}