// https://school.programmers.co.kr/learn/courses/30/lessons/120905

//? 문제 : n의 배수 고르기

// 정수 n 과 정수 배열 numlist가 매개변수로 주어졌을 때
// numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return

const solution = (n, numlist) => {
  let answer = [];

  for (let e of numlist) {
    if (e % n === 0) answer.push(e);
  }

  return answer;
};

const solution2 = (n, numlist) => numlist.filter((e) => e % n === 0);

console.log(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12])); // [6, 9, 12]
console.log(solution2(3, [4, 5, 6, 7, 8, 9, 10, 11, 12])); // [6, 9, 12]
