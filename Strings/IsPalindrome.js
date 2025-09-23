/*
Statement

Given a string, s, return TRUE if it is a palindrome; otherwise, return FALSE.

A phrase is considered a palindrome if it reads the same backward as forward after converting all uppercase letters to lowercase and removing any characters that are not letters or numbers. Only alphanumeric characters (letters and digits) are taken into account.

Constraints:

1≤

1≤s.length ≤3000

≤3000

s consists only of printable ASCII characters.
*/

const isPalindrome = (s) => {
    // 1. Limpiar la cadena: solo alfanuméricos y minúsculas
    const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    // 2. Usar el patrón de dos punteros
    let left = 0;
    let right = cleanedString.length - 1;

    while (left < right) {
        if (cleanedString[left] !== cleanedString[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};