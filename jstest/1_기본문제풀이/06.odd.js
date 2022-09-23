//? 문제 : 홀수

//? 7개의 자연수 중 홀수인 자연수를 골라
//? 그 합을 구하고, 고른 홀수중 최솟값을 출력

//* 홀수 : 2로 나눈 나머지가 존재 할 경우

//! 내 풀이
const solution = (arr) => {
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;

  for (let i of arr) {
    if (i % 2 !== 0) {
      sum += i;
      min = Math.min(min, i);
    }
  }

  return [sum, min];
};

let arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr)); // [256, 41]
//? 영상 풀이
const solution2 = (arr) => {
  let answer = [];
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;

  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) min = x;
    }
  }
  answer.push(sum);
  answer.push(min);

  return answer;
};

console.log(solution2(arr));
