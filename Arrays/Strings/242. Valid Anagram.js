/*
242. Valid Anagram
Easy
Topics
premium lock icon
Companies
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/
/*“I used the Frequency Counter pattern.
Instead of comparing characters one by one using nested loops,
I counted the frequency of each character in both strings,
and then compared those counts.
This reduces the time complexity from O(n²) to O(n),
which is much more efficient.”
*/
const countChars=(str)=> {
  const freq = {};
  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const freqS = countChars(s);
  const freqT = countChars(t);

  for (const char in freqS) {
    if (freqS[char] !== freqT[char]) {
      return false;
    }
  }

  return true;
}
//Solución nro 2 aplicando left-right pointers
const isAnagramTwoPointers=(s, t)=> {
  if (s.length !== t.length) return false;

  const sortedS = s.split('').sort();
  const sortedT = t.split('').sort();

  let left = 0;
  let right = 0;

  while (left < sortedS.length && right < sortedT.length) {
    if (sortedS[left] !== sortedT[right]) {
      return false;
    }
    left++;
    right++;
  }

  return true;
}

/*
En Unicode, una letra con tilde puede representarse de dos formas:

Composición: é (un solo carácter U+00E9)

Descomposición: e + ́ (dos caracteres: e + COMBINING ACUTE ACCENT)

Por eso se usa la normalización Unicode para estandarizar.
\u0300-\u036f → rango de combining diacritical marks (acentos, tildes, etc.).

[^a-z0-9] → elimina todo carácter no alfanumérico.

.normalize("NFD") → separa los acentos para que puedan ser eliminados.
*/
const normalizeString = (str) =>
  str
    .normalize("NFD")              // descompone caracteres Unicode
    .replace(/[\u0300-\u036f]/g, "") // elimina los acentos
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");    // elimina todo lo que no sea alfanumérico

console.log(normalizeString("Café!")); // "cafe"
console.log(normalizeString("faCe"));  // "face"