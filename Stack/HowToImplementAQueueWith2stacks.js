/**
 * Implementación de una Cola (Queue) usando dos Pilas (Stacks).
 * Stack A: Pila de Entrada (Input Stack)
 * Stack B: Pila de Salida (Output Stack)
 */
class QueueFromStacks {
    constructor() {
        // Stack A: Almacena los elementos para la operación 'enqueue'
        this.stackA = []; 
        // Stack B: Ayuda en la operación 'dequeue'
        this.stackB = []; 
    }

    /**
     * Añade un elemento al final de la cola (Enqueue).
     * @param {*} element El elemento a añadir.
     */
    enqueue(element) {
        // Encolar es simplemente añadir a la Pila de Entrada (Stack A)
        this.stackA.push(element);
        console.log(`ENQUEUE: ${element} añadido. Stack A: [${this.stackA}]`);
    }

    /**
     * Elimina y devuelve el elemento del frente de la cola (Dequeue).
     * @returns {*} El elemento al frente de la cola, o undefined si está vacía.
     */
    dequeue() {
        // 1. Si la Pila de Salida (Stack B) está vacía, debemos transferir.
        if (this.stackB.length === 0) {
            // 2. Mover todos los elementos de Stack A a Stack B
            // Esto invierte el orden, poniendo el elemento más antiguo de Stack A en la cima de Stack B.
            while (this.stackA.length > 0) {
                const elementToMove = this.stackA.pop();
                this.stackB.push(elementToMove);
            }
        }

        // 3. Si ambas pilas están vacías después de la transferencia, la cola está vacía.
        if (this.stackB.length === 0) {
            console.log("DEQUEUE: La cola está vacía.");
            return undefined;
        }

        // 4. Quitar y devolver el elemento de la cima de Stack B (el más antiguo).
        const dequeuedElement = this.stackB.pop();
        console.log(`DEQUEUE: ${dequeuedElement} retirado. Stack B: [${this.stackB}]`);
        return dequeuedElement;
    }

    /**
     * Devuelve el elemento del frente de la cola sin eliminarlo (Peek/Front).
     * @returns {*} El elemento al frente de la cola, o undefined si está vacía.
     */
    peek() {
        // Asegurarse de que Stack B tenga el elemento frontal, usando la misma lógica que dequeue
        if (this.stackB.length === 0) {
            while (this.stackA.length > 0) {
                this.stackB.push(this.stackA.pop());
            }
        }
        
        // Devolver el elemento de la cima de Stack B sin eliminarlo
        return this.stackB.length > 0 ? this.stackB[this.stackB.length - 1] : undefined;
    }

    /**
     * Comprueba si la cola está vacía.
     * @returns {boolean} True si la cola está vacía, de lo contrario False.
     */
    isEmpty() {
        return this.stackA.length === 0 && this.stackB.length === 0;
    }
}

// --- Ejemplo de Uso ---
console.log("--- Inicializando Cola ---");
const queue = new QueueFromStacks();

// 1. Encolar elementos
queue.enqueue(10);
queue.enqueue(20); 
queue.enqueue(30);

console.log(`Frente actual (peek): ${queue.peek()}`); // Debería ser 10

// 2. Desencolar un elemento (debe mover los elementos y devolver 10)
console.log("--- Primer Dequeue (Stack A -> Stack B) ---");
console.log(`Elemento Desencolado: ${queue.dequeue()}`); // Output: 10

// 3. Encolar más elementos
console.log("--- Enqueue Adicional ---");
queue.enqueue(40); // 40 se añade a Stack A (que ahora contiene [40])

// 4. Desencolar otro elemento (Stack B todavía tiene 20 y 30, devuelve 20)
console.log("--- Segundo Dequeue (Usa Stack B) ---");
console.log(`Elemento Desencolado: ${queue.dequeue()}`); // Output: 20

// 5. Desencolar los restantes (30 y luego 40)
console.log("--- Dequeue de Restantes ---");
console.log(`Elemento Desencolado: ${queue.dequeue()}`); // Output: 30
console.log(`Elemento Desencolado: ${queue.dequeue()}`); // Output: 40 (requiere otra transferencia)

console.log(`¿La cola está vacía?: ${queue.isEmpty()}`); // Output: true