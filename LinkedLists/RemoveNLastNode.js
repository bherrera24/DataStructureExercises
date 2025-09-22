function removeNthLastNode(head, n) {
    let right = head;
    let left = head;
/*Se crean dos punteros:

right se usará para ir más adelante.

left se moverá después, manteniendo siempre una distancia de n nodos respecto a right.
*/

    for (let i = 0; i < n; i++) {
        right = right.next;
    }
/*Aquí avanzamos el puntero right n pasos.

Esto crea una "ventana" de separación de n nodos entre left y right.*/


    if (!right) {
        return head.next;
    }
/*Caso especial: si right quedó en null, significa que el nodo a eliminar es el primer nodo (head).

Entonces simplemente retornamos head.next.*/


    while (right.next != null) {
        right = right.next;
        left = left.next;
    }
/*Ahora movemos ambos punteros juntos hasta que right llegue al final.

Cuando right está en el último nodo, left queda justo un nodo antes del que queremos eliminar.
*/

    left.next = left.next.next;
/*Se salta el nodo a eliminar, conectando left directamente con el siguiente.

Así el nodo "N desde el final" queda fuera de la lista.
*/

    return head;
}
//Retorna la cabeza original (salvo que hayamos eliminado el primer nodo).
/*
Output
1.36s
1.	Linked List:		 23 → 89 → 10 → 5 → 67 → 39 → 70 → 28 → null
	n = 4
	Updated Linked List:	 23 → 89 → 10 → 5 → 39 → 70 → 28 → null
----------------------------------------------------------------------------------------------------
2.	Linked List:		 34 → 53 → 6 → 95 → 38 → 28 → 17 → 63 → 16 → 76 → null
	n = 1
	Updated Linked List:	 34 → 53 → 6 → 95 → 38 → 28 → 17 → 63 → 16 → null
----------------------------------------------------------------------------------------------------
 */