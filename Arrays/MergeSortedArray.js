/*
El patrón que se usa aquí es el de Two Pointers (doble puntero), aplicado desde el final hacia el inicio.

¿Por qué es Two Pointers?

Tienes dos arrays ordenados (nums1 y nums2).

Usas dos índices (i y j) que recorren los arrays de derecha a izquierda.

A la vez manejas un tercer índice k para ir insertando en la posición correcta en nums1.

Comparas en cada paso y eliges el mayor para colocarlo al final → de esta forma evitas tener que hacer shift de elementos.

Esto es justo lo que describe The Interview Protocol™: reconocer patrones de LeetCode comunes. En este caso, el patrón de Two Pointers es muy típico en problemas de arrays ordenados.

📌 Resumen:

Patrón: Two Pointers (backward merge).

Complejidad: O(m+n) tiempo, O(1) espacio adicional.

Dónde aparece: merging arrays/lists, intersección de arrays, problemas de substrings ordenados.

*/
const merge= (nums1, m, nums2, n)=>{
    let i= m-1;
    let j= n-1;
    let k= m+n-1;

    while(i>=0 && j>=0){
        if(nums1[i]>nums2[j]){
            nums1[k]= nums1[i]
            i--;
        }else{
            nums1[k]=nums2[j];
            j--;
        }
        k--;
    }
    //if there are still elements from nums2 we have to copy them into nums1
    while(j>=0){
        nums1[k]= nums2[j]
        k--;
        j--;
    }


}

let nums1=[1,2,3,0,0,0]
let nums2 =[2,5,6]
merge(nums1, 3, nums2,3)
console.log(nums1)