//* Binary Search(이진검색)
//* 이진검색, 이진탐색이란 정렬된 배열안에서 특정한 값을 찾아내는 알고리즘.
//* 후보 범위가 한 항목으로 좁아질 때까지 찾고자 하는 항목을 포함하고 있는
//* 배열를 반으로 나누는 과정을 계속 반복하여 찾아내는 검색법

const doSearch = (array, targetValue) => {
  let min = 0;
  let max = array.length - 1;
  let guess;
  let count = 1;
  console.log('targetValue : ' + targetValue);
  while (min <= max) {
    guess = Math.floor((max + min) / 2);
    console.log('guess : ' + guess);
    if (array[guess] === targetValue) {
      console.log('count : ' + count);
      return guess;
    } else if (array[guess] < targetValue) {
      min = guess + 1;
      console.log('min : ' + min);
    } else {
      max = guess - 1;
      console.log('max : ' + max);
    }
    count++;
  }

  return -1;
};

let primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

console.log(doSearch(primes, 73));
//? 32개 안에서 1개를 찾아낼때 가장 마지막에 찾아냈다면 몇번째에 찾아내는가? 6
// 32
// 16
// 8
// 4
// 2
// 1
//! 즉 32 = 2^5 => log(n) + 1

//? 193개 안에서 1개를 찾아낼때 이진검색으로 찾아내지 못했다면 없다는것을 몇번째에 확인하는가? 8
// 193
// 96
// 48
// 24
// 12
// 6
// 3
// 1
