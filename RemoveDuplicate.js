const array = [1, 2, 3, 2, 4, 1, 5, "hello", "hello"];
function removeDuplicate(arr) {
  const seen = {};
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      seen[arr[i]] = true;
      result.push(arr[i]);
      console.log(seen)
    }
  }
  return result;
}
console.log(removeDuplicate(array));
