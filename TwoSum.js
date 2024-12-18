// var nums = [2, 11, 7, 15];
// var target = 9;

// var twoSum = function(nums, target) {
//   for(let i = 0  ; i < nums.length ; i++){
//     for(let j = i+ 1; j< nums.length ; j++){
//          if(nums[i] + nums[j] == target){
//           return [i, j]
//          }
//     }
//   }
//   return [-1, -1];
// };

// console.log(twoSum(nums, target)); // Pass nums and target as arguments

// Time Complexity:
// O(n²): The brute force method has a time complexity of O(n²) because it compares every pair
//        of numbers in the array, making it slower for large arrays.

//-------------------------------------------------------------------------------------------




function twoSum(nums, target) {
  // Step 1: Create a map to store numbers and their indices.
  const numMap = {};
  // Step 2: Iterate through the array and add each number and its index to the map.
  for (let i = 0; i < nums.length; i++) {
     console.log(numMap[nums[i]] = i)
    numMap[nums[i]] = i;
  }

  
  // Step 3: Iterate through the array again to find the complement of each number.
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    console.log(complement , "complement")
    // If the complement exists in the map and is not the number itself, return the indices.
    if (numMap.hasOwnProperty(complement) && numMap[complement] !== i) {
      return [i, numMap[complement]];
    }
  }
}

var nums = [2, 7, 11, 15];
var target = 9;
console.log(twoSum(nums , target))

