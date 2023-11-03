// https://school.programmers.co.kr/learn/courses/30/lessons/120880
//! 좋은 문제

//? 문제 : 특이한 정렬

// 주어진 정수 배열 numlist의 원소중 n에 가까운 순서대로 정렬한 배열을 return
// n으로부터의 거리가 같다면 더 큰수를 앞에 오도록

const solution = (numlist, n) =>
  numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);

console.log(solution([1, 2, 3, 4, 5, 6], 4)); // [4, 5, 3, 6, 2, 1]

//* sort((a, b) => +- )  : +가 나오면 b, -가 나오면 a
//* sort((a, b) => a - b ) : 오름차순
//* sort((a, b) => b - a ) : 내림차순

//* Math.abs(a - n) : a과 n의 길이
//* Math.abs(a - n) - Math.abs(b - n) : n 과 거리차가 작은 순으로
//* Math.abs(a - n) - Math.abs(b - n) || b - a : a, b가 n과의 거리가 같을 때 (falsy) 큰수 앞으로
