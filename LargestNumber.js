const arr = [12, 3, 15 ,4, 5, 34]
 
   let largest = -Infinity
   let secondLargest = -Infinity
    for(let i =0; i< arr.length ; i++){
        if(arr[i] > largest){
            secondLargest = largest
            largest = arr[i]
            
        }
    }

    // for(let i =0; i< arr.length ; i++){
    //     if( arr[i] < largest && arr[i] > secondLargest ){
    //         secondLargest = arr[i]
    //     }
    // }
        
 
console.log(largest)
console.log(secondLargest)
