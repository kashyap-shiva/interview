// function reverseNumber(num) {
//     let reversed = 0;
//     while (num !== 0) {
//       let lastDigit = num % 10;        // Get the last digit
//       reversed = reversed * 10 + lastDigit;  // Append the last digit to the reversed number
//       num = Math.floor(num / 10);      // Remove the last digit from the original number
//     }
//     return reversed;
//   }
  
//   console.log(reverseNumber(123)); // Output: 321


  function reverseNumber(num){
    const reverseNumber = num.toString().split("").reverse().join('');

    return parseInt(reverseNumber , 10)
  }
  
  console.log(reverseNumber(123)); // Output: 321
