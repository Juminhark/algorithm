// https://school.programmers.co.kr/learn/courses/30/lessons/120878

//? 문제 : 유한소수 판별하기 **

// a / b가 유한소수면 1, 무한소수면 2를 return, 정수도 유한소수 1 return

//! 유한소수, 무한소수 조건 : 기약분수일때, 분모의 소인수 분해가 2 나 5뿐이라면 유한소수, 다른 소인수가 있다면 무한소수

// GCD(Greatest Common Divisor) : 최대공배수
const GCD = (a, b) => {
  let gcd = 1;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) gcd = i;
  }

  return gcd;
};

const solution = (a, b) => {
  let gcd = GCD(a, b);

  // 기약분수의 분모
  let denominator = b / gcd;

  // 2, 5 말고 다른 소인수가 있다면 무한소수
  while (denominator % 2 === 0) denominator /= 2;
  while (denominator % 5 === 0) denominator /= 5;

  return denominator === 1 ? 1 : 2;
};

console.log(solution(7, 20)); // 1
console.log(solution(11, 22)); // 1
console.log(solution(12, 21)); // 2
