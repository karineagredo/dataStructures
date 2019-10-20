function mergeSortedArrays(arr1, arr2) {
    const newArray = [];
    for (let i = 0; i < arr2.length; i++) {
        if (arr1[i] === arr2[i]) {
            return;
        }
        arr1.push(arr2[i])
    }
    console.log(arr1.sort())
}
mergeSortedArrays([6, 7], [1, 6, 7, 8, 9])