const hasCycle = (head) => {
  if (!head) return false;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true; // hay ciclo
    }
  }

  return false; // no hay ciclo
};
/*
Tipo	Complejidad
Tiempo	O(n) — recorremos cada nodo como máximo una vez
Espacio	O(1) — solo usamos dos punteros
*/