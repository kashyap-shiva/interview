const arr = [10, 20, 40, 50, 60]
const position = 2;
const newEle = 30;

const AddElement = () =>{
    for(let i= arr.length-1; i>=0 ;i--){
        if(i >= position){
            arr[i+1] = arr[i]
            if(i === position){
                arr[i] = newEle
            }
        }
    }
    return arr
}

console.log(AddElement())