//? 문제 : 연필 개수

//? 1다스 = 12연필
//? N명이 학생에게 나눠 줄수 있는 연필의 다수를 계산하여 출력

//! 내 풀이
const solution = (n) => {
  let answer = Math.floor(n / 12);

  if (n % 12 > 0) return answer + 1;
  else return answer;
};

console.log(solution(25)); // 3
console.log(solution(178)); // 15
console.log(solution(24)); // 2

//? 영상 풀이
const solution2 = (n) => {
  let answer = Math.ceil(n / 12);

  return answer;
};

console.log(solution2(25));
console.log(solution2(178));
