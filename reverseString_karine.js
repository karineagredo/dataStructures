const str = "karine agredo"
function reverseString(str) {
    const arrayString = str.split("");

    let reversedArray = [];
    for (let i = 0; i < arrayString.length; i++) {
        const last = arrayString[i];
        reversedArray.unshift(last)
    }
    console.log(reversedArray.join(" "))
    return reversedArray;

}
reverseString(str)