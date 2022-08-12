//? 문제 : 큰 수 출력하기

// N개의 정수를 입력받아, 자신의 바로 앞 수 보다 큰 수만 출력

//! 내 풀이
const solution = (n, arr) => {
  let answer = [];

  for (let x in arr) {
    //* index값이 string
    if (Number(x) === 0) answer.push(arr[x]);
    else if (arr[x] > arr[x - 1]) answer.push(arr[x]);
  }

  return answer;
};

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(6, arr)); // [ 7, 9, 6, 12 ]

//? 영상 풀이
const solution2 = (arr) => {
  let answer = [];

  answer.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }

  return answer;
};

console.log(solution2(arr)); //[ 7, 9, 6, 12 ]
