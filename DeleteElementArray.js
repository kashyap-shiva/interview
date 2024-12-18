const arr = [10, 20,30 , 40, 50, 60]
const position = 2;

const DeleteElementArray = () =>{
    for(let i=position; i<arr.length-1 ; i++){
        arr[i] = arr[i+1]
    }
    arr.length = arr.length-1

    return arr
}

console.log(DeleteElementArray())