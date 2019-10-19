const str = "Hey, I'm karine";

function reverseString(str) {

    if (!str || typeof (str) != 'string' || str.length < 2) {
        return 'invalid input';
    }
    const arrayString = str.split("");
    const arrayLength = arrayString.length - 1;

    let reversedArray = [];
    for (let i = arrayLength; i >= 0; i--) {
        reversedArray.push(str[i])
    }
    return reversedArray.join(" ");
}
console.log(reverseString(str))