//Works only on sorted arrays ,Repeatedly divide array into halves ,Compare middle value with target

const arr = [2,3,4,5,6,7]
const target = 3

function BinarySearch(arr , target){
     let start = 0;
     let end = arr.length -1

     while(start <= end){
         const mid = Math.floor((start + end)/2);
         if(arr[mid] === target){
            return mid
         }else if(arr[mid] < target){
            start++
         }else {
            end--
         }
     }
     return -1
}
console.log(BinarySearch( [2,3,4,5,6,7] ,3))
