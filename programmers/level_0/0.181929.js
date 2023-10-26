// https://school.programmers.co.kr/learn/courses/30/lessons/181929

//? 문제 : 원소들의 곱과 합
// 정수 배열 내의 모든 원소들의 곱이 합의 제곱보다 작으면 1 크면 0 return

//* 내 풀이
const solution = (num_list) => {
  let multiple = num_list.reduce((acc, cur) => acc * cur, 1);
  let sum = num_list.reduce((acc, cur) => acc + cur, 0);

  return multiple < Math.pow(sum, 2) ? 1 : 0;
};

console.log(solution([3, 4, 5, 2, 1])); // 1
console.log(solution([5, 7, 8, 3])); // 0

// Math.pow(x, 2) = x ** 2

//* 다른 사람 풀이 : 좀 더 깔끔
const solution2 = (num_list) => {
  let accMul = 1;
  let accSum = 0;

  for (const num of num_list) {
    accMul *= num;
    accSum += num;
  }

  return accMul < accSum ** 2 ? 1 : 0;
};
