const arr = [10, -5, 20, 8, 12, 34];

function secondLargest(arr){
    let first = -Infinity
    let second = -Infinity
    
    for(let i =0; i< arr.length ; i++){
        if(arr[i] > first ){
            second = first
            first = arr[i]
        }else if(arr[i] > second && arr[i] < first){
            second = arr[i]
        }
    }
    return second
}

console.log(secondLargest(arr))