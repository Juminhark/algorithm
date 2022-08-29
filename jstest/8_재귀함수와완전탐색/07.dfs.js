//? 문제 : 최대점수 구하기(DFS)

//? N개의 문제에 대해 점수와 푸는 시간이 주어질 때,
//? 제한시간 M안에 얻을수 있는 최대점수를 출력

//! 내 풀이
const solution = (n, scores, times) => {
  let answer = Number.MIN_SAFE_INTEGER;
  const len = scores.length;

  const DFS = (i, score, time) => {
    if (time > n) return;

    if (i === len) {
      answer = Math.max(answer, score);
    } else {
      // 풀었나 안풀었나 분기점
      DFS(i + 1, score + scores[i], time + times[i]);
      DFS(i + 1, score, time);
    }
  };

  DFS(0, 0, 0);

  return answer;
};

let ps = [10, 25, 15, 6, 7]; // 점수
let pt = [5, 12, 8, 3, 4]; // 시간
console.log(solution(20, ps, pt)); // 41

//? 영상 풀이
const solution2 = (m, scores, times) => {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = scores.length;

  const DFS = (L, sum, time) => {
    if (time > m) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + scores[L], time + times[L]);
      DFS(L + 1, sum, time);
    }
  };

  DFS(0, 0, 0);

  return answer;
};
// console.log(solution2(20, ps, pt)); // 41
