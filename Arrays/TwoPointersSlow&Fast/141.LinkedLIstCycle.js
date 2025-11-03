/* Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

 

Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
Example 2:


Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
Example 3:


Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
 

Constraints:

The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.
 

Follow up: Can you solve it using O(1) (i.e. constant) memory?

*/

/*
Ejemplo paso a paso
Ejemplo:
head = [3 → 2 → 0 → -4]
pos = 1  (el -4 apunta al nodo con valor 2)


Visualmente:

3 → 2 → 0 → -4
     ↑       ↓
     └───────┘

🔹 Inicialización
slow = 3
fast = 3

🔹 Iteración 1
slow = slow.next → 2
fast = fast.next.next → 0


📍 Estado:

3 → 2 → 0 → -4
    ↑     ↑
   slow  fast

🔹 Iteración 2
slow = slow.next → 0
fast = fast.next.next → 2


📍 Estado:

3 → 2 → 0 → -4
        ↑     ↑
      slow   fast

🔹 Iteración 3
slow = slow.next → -4
fast = fast.next.next → 0


📍 Estado:

3 → 2 → 0 → -4
            ↑  ↑
          slow fast

🔹 Iteración 4
slow = slow.next → 2
fast = fast.next.next → 2


 Estado:

3 → 2 → 0 → -4
    ↑
  slow, fast  ← se encuentran aquí 


✅ Se encontraron → hay ciclo → return true.

🧩 Ejemplo sin ciclo
head = [1 → 2 → null]
pos = -1


1️⃣ Inicial:
slow = 1, fast = 1

2️⃣ Iteración 1:
slow = 2, fast = null (porque fast.next.next ya no existe)

💀 El bucle termina → return false

⚙️ Complejidad
Recurso	Complejidad
Tiempo	O(n)
Memoria	O(1) (constante)
 */
function hasCycle(head) {
  if (!head) return false;

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;         // avanza 1
    fast = fast.next.next;    // avanza 2

    if (slow === fast) {      // se encontraron
      return true;            // hay ciclo
    }
  }

  return false; // fast llegó al final → sin ciclo
}
