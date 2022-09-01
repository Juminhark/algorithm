//? 문제 : 수들의 조합

//? N개의 정수가 주어지면 그 숫자들 중 K개를 뽑는 조합의 합이
//? 임의의 정수 M인 배수인 개수는 몇개가 있는지 출력

//! 내풀이
const solution = (n, k, arr, m) => {
  let answer = 0;

  let tmp = Array.from({ length: k }, () => 0);

  const DFS = (L, s) => {
    if (L === k) {
      let x = tmp.slice();
      let num = x.reduce((a, b) => a + b, 0);
      if (num % m === 0) answer++;
    } else {
      for (let i = s; i < n; i++) {
        tmp[L] = arr[i];
        DFS(L + 1, i + 1);
      }
    }
  };

  DFS(0, 0);

  return answer;
};

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));

//? 영상 풀이
const solution2 = (n, k, arr, m) => {
  let answer = 0;

  const DFS = (L, s, sum) => {
    if (L === k) {
      if (sum % m === 0) answer++;
    } else {
      for (let i = s; i < n; i++) {
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  };

  DFS(0, 0, 0);

  return answer;
};

console.log(solution2(5, 3, arr, 6));
