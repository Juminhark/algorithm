// https://school.programmers.co.kr/learn/courses/30/lessons/120891

//? 문제 : 369게임
// 주어진 정수 order 에 3,6,9가 몇개 들어가있는지 return

//* 내 풀이
const solution = (order) => {
  let answer = 0;

  for (let e of order.toString()) {
    if (e == 3 || e == 6 || e == 9) answer++;
  }

  return answer;
};

console.log(solution(29423));

//* 다른 사람 풀이 : String.split() , RegExp
//! RegExp 이해 필요
const solution2 = (order) => {
  return order.toString().split(/[369]/).length - 1;
};

console.log(solution2(2946293));

//* 다른 사람 풀이 : set / has
function solution(order) {
  const mySet = new Set([3, 6, 9]);
  return String(order)
    .split('')
    .filter((num) => mySet.has(Number(num))).length;
}
