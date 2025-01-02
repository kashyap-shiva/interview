function Pallindrome(str) {
  let start = 0;
  let end = str.length-1;
  let pallindrome = true;
  while (end > start) {
    if (str[start] !== str[end]) {
      pallindrome = false;
    }
    start++;
    end--;
  }
  return pallindrome;
}

console.log(Pallindrome("level"));
