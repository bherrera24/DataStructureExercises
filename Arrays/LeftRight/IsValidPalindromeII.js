const isValidPalindrome = (str) => {
  const isPalindromeRange = (s, left, right) => {
    while (left < right) {
      if (s[left] !== s[right]) return false;
      left++;
      right--;
    }
    return true;
  };

  // normaliza: elimina no alfanuméricos y pasa a minúsculas
  const si = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let left = 0;
  let right = si.length - 1;

  while (left < right) {
    if (si[left] !== si[right]) {
      return isPalindromeRange(si, left + 1, right) || isPalindromeRange(si, left, right - 1);
    }
    left++;
    right--;
  }
  return true;
};

export { isValidPalindrome };