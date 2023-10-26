// https://school.programmers.co.kr/learn/courses/30/lessons/181934

//? 문제 : 조건 문자열

//* 내 풀이
//! eval is evil
const solution = (ineq, eq, n, m) => {
  if (eq === '=') return eval(`${n}${ineq}${eq}${m}`) ? 1 : 0;
  else return eval(`${n}${ineq}${m}`) ? 1 : 0;
};

console.log(solution('<', '=', 20, 50));

//* 다른 사람 풀이
const operations = {
  '>=': (n, m) => n >= m,
  '<=': (n, m) => n <= m,
  '>!': (n, m) => n > m,
  '<!': (n, m) => n < m,
};

const solution2 = (ineq, eq, n, m) => {
  const op = operations[ineq + eq];
  return Number(op(n, m));
};
