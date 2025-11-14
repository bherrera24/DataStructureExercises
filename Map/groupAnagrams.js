function groupAnagrams(strs) {
  const groups = new Map(); // clave → lista de anagramas

  for (const word of strs) {
    // --- 1. Crear un contador de letras ---
    const counts = new Map();

    for (const char of word) {
      const current = counts.get(char) || 0;
      counts.set(char, current + 1);
    }

    // --- 2. Convertir el contador en una clave única ---
    // Ordenamos las letras para que "eat" y "tea" generen la misma clave
    const sortedEntries = Array.from(counts.entries())
      .sort(([charA], [charB]) => charA.localeCompare(charB));

    // La clave final será algo como: "a:1#e:1#t:1"
    const key = sortedEntries
      .map(([char, freq]) => `${char}:${freq}`)
      .join("#");

    // --- 3. Insertar la palabra en su grupo ---
    if (!groups.has(key)) {
      groups.set(key, []);
    }

    groups.get(key).push(word);
  }

  // --- 4. Devolver solo los arrays de anagramas ---
  return Array.from(groups.values());
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))