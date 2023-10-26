// https://school.programmers.co.kr/learn/courses/30/lessons/181936

//? 문제 : 공배수

// number가 n의 배수 이면 m의 배수이면 1, 아니면 0 return

const solution = (number, n, m) =>
  number % n === 0 && number % m === 0 ? 1 : 0;

console.log(solution(60, 2, 3));
