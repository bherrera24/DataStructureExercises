/*

Code
Testcase
Test Result
Test Result
Leet
3. Longest Substring Without Repeating Characters
Medium
Topics
premium lock icon
Companies
Hint
Given a string s, find the length of the longest substring without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/
const lengthOfLongestSubstring=(s)=> {
  let start = 0;
  let maxLength = 0;
  const seen = new Set();

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    // Si el caracter ya está en la ventana, la reducimos desde el inicio
    while (seen.has(char)) {
      seen.delete(s[start]);
      start++;
    }

    // Agregamos el caracter actual y actualizamos longitud máxima
    seen.add(char);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
/*
🚀 Complejidad
Concepto	Valor
Tiempo	O(n) — cada caracter se agrega y elimina como máximo una vez
Espacio	O(k) — donde k es el tamaño del conjunto de caracteres únicos (máximo 128 si es ASCII)
*/