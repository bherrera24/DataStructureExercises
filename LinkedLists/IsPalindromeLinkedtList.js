//consideraciones solo se puede usar espacion o(1) extra

// Definición de la clase Node para la lista enlazada
class Node {
  constructor(valor) {
    this.valor = valor;
    this.siguiente = null;
  }
}

/**
 * Verifica si una lista enlazada es palíndromo.
 * Invierte la segunda mitad in-place, compara y restaura la lista.
 * @param {Node} head - Cabeza de la lista enlazada
 * @returns {boolean} true si es palíndromo, false si no
 */
function esPalindromo(head) {
  if (!head || !head.siguiente) return true; // Lista vacía o de un solo nodo

  // Encontrar el punto medio usando dos punteros
  let lento = head;
  let rapido = head;
  while (rapido.siguiente && rapido.siguiente.siguiente) {
    lento = lento.siguiente;
    rapido = rapido.siguiente.siguiente;
  }
  // lento está en el nodo medio (para listas impares, en el central)

  // Invertir la segunda mitad de la lista
  let anterior = null;
  let actual = lento.siguiente;
  while (actual) {
    let temp = actual.siguiente;
    actual.siguiente = anterior;
    anterior = actual;
    actual = temp;
  }
  // anterior es la cabeza de la segunda mitad invertida

  // Comparar ambas mitades nodo por nodo
  let puntero1 = head;
  let puntero2 = anterior;
  let resultado = true;
  while (puntero2) {
    if (puntero1.valor !== puntero2.valor) {
      resultado = false;
      break;
    }
    puntero1 = puntero1.siguiente;
    puntero2 = puntero2.siguiente;
  }

  // Restaurar la segunda mitad a su forma original
  actual = anterior;
  anterior = null;
  while (actual) {
    let temp = actual.siguiente;
    actual.siguiente = anterior;
    anterior = actual;
    actual = temp;
  }
  // Reconectar la lista restaurada
  lento.siguiente = anterior;

  return resultado;
}

// --- Ejemplo de uso ---
// Construir una lista: 1 -> 2 -> 3 -> 2 -> 1
const head = new Node(1);
head.siguiente = new Node(2);
head.siguiente.siguiente = new Node(3);
head.siguiente.siguiente.siguiente = new Node(2);
head.siguiente.siguiente.siguiente.siguiente = new Node(1);

// Mostrar la lista original
let arr = [];
let curr = head;
while (curr) {
  arr.push(curr.valor);
  curr = curr.siguiente;
}
console.log('Input:', arr.join(' -> '));

// Verificar si es palíndromo
testResult = esPalindromo(head);
console.log('Output:', testResult); // true

// Mostrar la lista después para verificar que se restauró
arr = [];
curr = head;
while (curr) {
  arr.push(curr.valor);
  curr = curr.siguiente;
}
console.log('Restored:', arr.join(' -> '));