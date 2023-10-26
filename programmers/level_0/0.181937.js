// https://school.programmers.co.kr/learn/courses/30/lessons/181937

//? 문제 : n의 배수

// 정수 num 이 n 의 배수이면 1 아니면 0 return

const solution = (num, n) => (num % n === 0 ? 1 : 0);

console.log(solution(98, 2));
