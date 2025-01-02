function removeDuplicate(arr){
    let array = []
    for(let i=0; i< arr.length ; i++){
        let duplicate = false;
        for(let j = 0; j < array.length ; j++){
            if(arr[i] === array[j]){
                duplicate = true;
                break;
            }
        }
        if(!duplicate){
            array.push(arr[i])
        }
    }
    return array
}
let arr =[1, 2, 3, 2, 4, 5, 4, 5];
console.log(removeDuplicate(arr))