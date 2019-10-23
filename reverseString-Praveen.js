function reverse(string) {
    if (!string || string.length < 2 ||
        typeof string !== 'string') {
        return 'Not valid';
    }
    var strArr = [];
    var len = string.length - 1;
    for (let i = len; i >= 0; i--) {
        strArr.push(string[i]);
    }
    return strArr.join('');
}
// How split() works ?, How reverse() works ? and How join() works ?
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("Praveen");
reverseString("Karine");

//Try a different Push!1
const arrayFromRange = function arrayFromRange (min, max) {
    const output = [];
    for (let i = min; i <= max; i++)
    output.push(i);
    return output;
  }
  
  console.log(arrayFromRange(1, 100));


  //why includes is used ?
 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function except(array, excluded) {
  const output = [];
  for (let number of array) 
   if(!excluded.includes(number))
   output.push(number);
   console.log(output);
}

except(numbers, [1, 4, 8, 3, 10]);
 