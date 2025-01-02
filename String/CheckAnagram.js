function checkAnagram(str1 , str2){
    if(str1.length !== str2.length){
        return false
    }
    let obj = {}
    for(let char of str1){
        obj[char] = (obj[char] || 0)+ 1
    }
    for(let char of str2){
         console.log(obj[char])
        if(!obj[char]){
            return false
        }
        obj[char]--
        console.log
    }
    return true
}
console.log(checkAnagram("helllo", "selloh"))
  