// https://school.programmers.co.kr/learn/courses/30/lessons/120834

//? 문제 : 외계행성의 나이

//? a : 0, b : 1, ... , j : 9 일 때, 주어진 매개변수 age을 바꾸어 return

//* ASCII : 아스키코드(https://velog.io/@ovzip/%EC%95%84%EC%8A%A4%ED%82%A4%EC%BD%94%EB%93%9C-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%97%90%EC%84%9C-%EC%95%84%EC%8A%A4%ED%82%A4%EC%BD%94%EB%93%9C-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0)
// console.log('c'.charCodeAt())
// String.fromCharCode()

const solution = (age) =>
  [...age.toString()]
    .map((e) => String.fromCharCode(e.charCodeAt() + 49))
    .join('');

console.log(solution(23));

//* 문자열 자체도 인덱스[] 접근

const solution2 = (age) =>
  age
    .toString()
    .split('')
    .map((v) => 'abcdefghij'[v])
    .join('');

console.log(solution2(23));
