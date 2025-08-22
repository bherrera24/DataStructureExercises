//Best time to buy and sell stock (121) Big notation O(n) 
/*
👉 El patrón que debes identificar aquí es el de Sliding Window / Two Pointers.

Por qué:
Necesitas encontrar el mínimo precio de compra hasta el día actual, y calcular la máxima ganancia posible vendiendo después.
Esto se resuelve moviendo un puntero que marca el "día de compra mínimo visto hasta ahora", mientras otro avanza para calcular ganancias potenciales.

En otras palabras:

Mantén un running minimum (precio más bajo visto hasta ahora).

A medida que recorres el array, en cada paso calculas precio_actual - min_price para ver si es la mejor ganancia hasta ese momento.

🔑 Patrón: Sliding Window con un mínimo acumulado (también puede verse como "Kadane’s Algorithm simplificado").
*/
const maxProfit=(prices)=>{
    let minPrice= Infinity;
    let maxProfit=0
    for(let i=0; i<prices.length; i++){
        if(prices[i]<minPrice)
            minPrice= prices[i]
        else{
           let currentProfit= prices[i]-minPrice
           if(maxProfit<currentProfit) maxProfit=currentProfit
        }
    }
    return maxProfit
}