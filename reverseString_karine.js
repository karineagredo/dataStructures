const str = "Hey, I'm karine agredo";

function reverseString(str) {

    if (!str || typeof (str) != 'string' || str.length < 2) {
        return 'invalid input';
    }
    const arrayLength = str.length - 1;
    let reversedArray = [];
    for (let i = arrayLength; i >= 0; i--) {
        reversedArray.push(str[i])
    }
    return reversedArray.join('');
}
console.log(reverseString(str));

// another option. Probably better
(function reverseString2(str) {
    console.log(str.split('').reverse().join(''))
}("this is a test"))

//es6 style
const reverseString3 = str => str.split('').reverse().join('');
console.log(reverseString3("My last approach"))
