let arr = [1, 2, 3, 4, 5];

// 기존방법
let tmp = arr[0];
arr[0] = arr[4];
arr[4] = tmp;
console.log(arr);

// 최신방법
[arr[0], arr[4]] = [arr[4], arr[0]];
console.log(arr);
