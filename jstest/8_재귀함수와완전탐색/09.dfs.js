//? 문제 : 동전교환

//? 금액 M과 여러단위의 동전들이 주어져 있을 때,
//? 가장 적은 수의 동전으로 교환하여 개수를 출력

//! 내 풀이
const solution = (m, arr) => {
  let answer = 0;
  const len = arr.length;
  arr.sort((a, b) => b - a);

  const DFS = (i, money) => {
    if (i === len) return;
    else {
      answer += Math.floor(money / arr[i]);
      money %= arr[i];
      DFS(i + 1, money);
    }
  };

  DFS(0, m);

  return answer;
  ``;
};

let arr = [1, 2, 5];
// console.log(solution(15, arr)); // 3

//? 영상 풀이
const solution2 = (m, arr) => {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = arr.length;
  const DFS = (L, sum) => {
    if (sum > m) return;

    if (L > answer) return;
    if (sum === m) {
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  };

  DFS(0, 0);

  return answer;
};

arr = [1, 2, 5];
console.log(solution2(15, arr));
