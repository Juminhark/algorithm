// https://school.programmers.co.kr/learn/courses/30/lessons/120890

//? 문제 : 가까운 수

// 정수 배열 array, 정수 n이 매개변수로 주어질 때, array의 요소중 n과 가장 가까운 수를 return
// 가장 가까운 수가 여러 개일 경우 더 작은 수를 return

//* 내 풀이
const solution = (array, n) => {
  let abs_min = Number.MAX_SAFE_INTEGER;
  let answer = [];

  for (let e of array) {
    abs_min = Math.min(abs_min, Math.abs(n - e));
  }

  for (let e of array) {
    if (Math.abs(n - e) === abs_min) answer.push(e);
  }

  return answer.sort((a, b) => a - b)[0];
};

console.log(solution([3, 10, 28], 20)); // 28

//* 다른사람풀이 : reduce
const solution2 = (array, n) => {
  return array.reduce((a, c) =>
    Math.abs(a - n) < Math.abs(c - n)
      ? a
      : Math.abs(a - n) === Math.abs(c - n)
      ? Math.min(a, c)
      : c
  );
};
