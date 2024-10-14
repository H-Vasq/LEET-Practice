// var map = function(arr, fn) {
//     const res = [];

//     for (const i in arr) {
//         res.push = fn(arr[i], Number(i));
//     }

//     return res;

// }

var map = function(arr, fn) {
    const res = [];

    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i], i));
    }

    return res;
}

const arr = [1, 2, 3];
const result = map(arr, function(value, index) {
    return value * 2;
});

console.log(result); 

