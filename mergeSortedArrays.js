let filledArray = new Array(100).fill(5);

(function mergeSortedArrays(arr1, arr2) {
    if (arr1 && arr2 && !arr1.some(isNaN) && !arr2.some(isNaN)) {
        arr2.map((elm) => {
            if (!arr1.includes(elm)) {
                arr1.push(elm)
            }
        })
        console.log(arr1.sort());
        return arr1.sort();

    } else {
        console.log("input invalid");
    }

}([9, 5, 3, 999, 4], [2, 3]));
