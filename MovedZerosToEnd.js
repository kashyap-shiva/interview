function moveZeros(arr) {
  let j = 0; // pointer for non-zero position
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) [arr[i], arr[j++]] = [arr[j], arr[i]];
  }
  return arr;
}

const arr = [0, 1, 0, 3, 12];
console.log(moveZeros(arr));
//merge sort, count frequency , String Permutations (Recursive)

