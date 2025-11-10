// Merge Sort :
// Divide: Divide the list or array recursively into two halves until it can no more be divided.
// Conquer: Each subarray is sorted individually using the merge sort algorithm.
// Merge: The sorted subarrays are merged back together in sorted order. The process continues until all elements from both subarrays have been merged.

function mergeSort(arr) {
  if (arr.length <= 1) return arr; // base case

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
  if (left[0] < right[0]) {
    result.push(left.shift());
  } else {
    result.push(right.shift());
  }
}

  return [...result, ...left, ...right];
}

const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Sorted Array:", mergeSort(arr));
