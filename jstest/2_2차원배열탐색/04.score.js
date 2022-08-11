//? 문제 : 점수계산

// OX문제에서 오답 후 처음 맞춘 문제는 1점, 연속으로 K번 맞추면 K점
// 총 점수를 계산하여 출력

//! 내 풀이
const solution = (s) => {
  let answer = 0;
  let score = 0;

  for (let x of s) {
    // 맞추었을 때
    if (x === 1) score++;
    else score = 0;
    answer += score;
  }

  return answer;
};

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr)); // 10

//? 영상 풀이
const solution2 = (s) => {
  let answer = 0,
    cnt = 0;

  for (let x of arr) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }

  return answer;
};

console.log(solution2(arr));
