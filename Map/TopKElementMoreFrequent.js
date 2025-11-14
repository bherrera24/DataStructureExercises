/*
2) Top K Frequent Elements (LeetCode 347)

Qué pide: devolver los k elementos más frecuentes.
Idea: usar Map para las frecuencias + bucket sort.
*/

const topKFrequentElements = (nums, k) => {
  // 1) Contar frecuencias
  const counts = new Map();
  for (const elem of nums) {
    const freqElem = (counts.get(elem) ?? 0) + 1;
    counts.set(elem, freqElem);
  }

  // 2) Crear buckets (n + 1 arrays vacíos)
  const numsAmount = nums.length;
  const buckets = [];
  for (let i = 0; i <= numsAmount; i++) {
    buckets.push([]);
  }

  // 3) Llenar los buckets
  for (const [num, freq] of counts.entries()) {
    buckets[freq].push(num);
  }

  // 4) Recorrer desde la frecuencia más alta
  const result = [];
  for (let freq = numsAmount; freq >= 1 && result.length < k; freq--) {
    for (const val of buckets[freq]) {
      result.push(val);
      if (result.length === k) break;
    }
  }

  return result;
};
console.log(topKFrequentElements([1, 1, 2, 2, 2, 3, 3, 3, 3,4,5],2))
