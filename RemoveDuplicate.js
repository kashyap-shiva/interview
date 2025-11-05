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

// What Happens in the Code
// Let’s walk through the array [1, 2, 3, 2, 4, 1, 5, "hello", "hello"]:

// Item 1 (1): Not in seen. Add seen[1] = true, push 1 to result. seen = {1: true}.
// Item 2 (2): Not in seen. Add seen[2] = true, push 2 to result. seen = {1: true, 2: true}.
// Item 3 (3): Not in seen. Add seen[3] = true, push 3 to result. seen = {1: true, 2: true, 3: true}.
// Item 4 (2): Already in seen ( seen[2] is true). Skip it.
// Item 5 (4): Not in seen. Add seen[4] = true, push 4 to result. seen = {1: true, 2: true, 3: true, 4: true}.
// Item 6 (1): Already in seen. Skip it.
// Item 7 (5): Not in seen. Add seen[5] = true, push 5 to result. seen = {1: true, 2: true, 3: true, 4: true, 5: true}.
// Item 8 ("hello"): Not in seen. Add seen["hello"] = true, push "hello" to result. seen = {1: true, 2: true, 3: true, 4: true, 5: true, hello: true}.
// Item 9 ("hello"): Already in seen. Skip it.
// Final result: [1, 2, 3, 4, 5, "hello"]
