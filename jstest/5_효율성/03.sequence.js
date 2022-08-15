//? 문제 : 연속부분수열(Two Pointers Algorithm) : 대표문제

// N개의 수로 이루어진 수열에서 합이 M이 되는 부분 수열의 수를 출력

//! 내 풀이
const solution = (m, arr) => {
  let answer = 0;
  let len = arr.length;
  let max = 0;
  let p = 0;

  for (let i = 0; i < len; i++) {
    p = i + 1;
    max = arr[i];
    while (p < len && max < m) {
      max += arr[p++];
    }
    // console.log(max, m);
    if (max === m) answer++;
  }

  return answer;
};
let a = [1, 2, 1, 3, 1, 1, 1, 2];
// console.log(solution(6, a)); // 3

//? 영상 풀이 * 이코드 이해 중요!
const solution2 = (m, arr) => {
  let answer = 0,
    lt = 0,
    sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }

  return answer;
};

console.log(solution2(6, a));
