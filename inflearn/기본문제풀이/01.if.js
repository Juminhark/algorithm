//? 문제 : 세 수 중 최솟값

//? 100이하의 자연수 A, B, C를 입력받아 가장 작은 값을 출력
//? 정렬을 사용하지 않는다

//! 내 풀이
const solution = (arr) => {
  let answer = Number.MAX_SAFE_INTEGER;

  // for in : keys /  for of : value
  for (const a of arr) {
    if (a < answer) {
      answer = a;
    }
  }

  return answer;
};

console.log(solution([6, 5, 11]));

//? 영상 풀이
const solution2 = (a, b, c) => {
  let answer;

  if (a < b) answer = a;
  else answer = b;

  if (c < answer) answer = c;

  return answer;
};

console.log(solution2(6, 5, 11));
