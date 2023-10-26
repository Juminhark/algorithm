// https://school.programmers.co.kr/learn/courses/30/lessons/181931

//? 문제 : 등차수열의 특정한 항만 더하기
// 첫재항이 a, 공차가 d 인 등차수열에서 included[i]가 i + 1항을 의미 할 때,
// 등차 수열의 1항부터 n항까지 included가 true인 항들만 더한 값을 return

//* 내 풀이
const solution = (a, d, included) => {
  let len = included.length;
  let answer = 0;

  for (let i = 0; i < len; i++) {
    if (included[i]) answer += a + d * i;
  }

  return answer;
};

console.log(solution(3, 4, [true, false, false, true, true]));

//* 다른 사람 풀이 : reduce
const solution2 = (a, d, included) => {
  return included.reduce((acc, flag, i) => (flag ? acc + a + d * i : acc), 0);
};

console.log(solution2(3, 4, [true, false, false, true, true]));
