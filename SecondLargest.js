const arr = [10, 4, 7, 20, 15];

function secnodLargest(arr) {
  if (arr.length < 2) {
    return -1;
  }

  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
}
return second === -Infinity ? null : second
}
console.log(secnodLargest(arr))
