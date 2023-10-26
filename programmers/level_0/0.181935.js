// https://school.programmers.co.kr/learn/courses/30/lessons/181935

//? 문제 : 홀짝에 따라 다른 값 변환하기

const solution = (n) => {
  let answer = 0;

  if (n % 2 === 1) {
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 1) answer += i;
    }
  } else {
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) answer += Math.pow(i, 2);
    }
  }

  return answer;
};

console.log(solution(7));
console.log(solution(10));

//* 다른 사람 풀이
// 등차수열의 공식
// 거듭 제곱의 합 공식
const solution2 = (n) => {
  if (n % 2 === 1) return ((n + 1) / 2) * ((n + 1) / 2);
  else return (n * (n + 1) * (n + 2)) / 6;
};
