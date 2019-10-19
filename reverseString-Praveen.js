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
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");