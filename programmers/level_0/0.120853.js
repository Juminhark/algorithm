// https://school.programmers.co.kr/learn/courses/30/lessons/120853

//? 문제 : 컨트롤 제트
// 숫자와 'Z'가 공백으로 구분되어 담긴 문자열이 주어질 때,
// 'Z' 전의 숫자는 제외하고 더한 값을 return

const solution = (s) => {
  let answer = s.split(' ');

  while (answer.includes('Z')) {
    answer.splice(answer.indexOf('Z') - 1, 2);
  }

  return answer.reduce((acc, cur) => acc + Number(cur), 0);
};

console.log(solution('1 2 Z 3'));

//* 배열 검색이 많아서 계산이 느림 => stack으로 접근이 효율적

//* 다른 사람 풀이 : stack
const solutoin2 = (s) => {
  let stack = [];

  s.split(' ').forEach((target) => {
    if (target === 'Z') stack.pop();
    else stack.push(+target);
  });

  return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
};
