//? 문제 : 바둑이 승차(이진트리 DFS)

//? 트럭은 C킬로그램 넘게 태울수 없다.
//? N마리 각 바둑이의 무게 W로 주어질 때,
//? 트럭에 태울수 있는 가장 무거운 무게를 구하여라

//! 내 풀이
const solution = (c, n, arr) => {
  let answer = 0;

  const DFS = (v, sum) => {
    if (v === n) {
      if (sum < c) {
        answer = Math.max(answer, sum);
      }
    } else {
      DFS(v + 1, sum);
      DFS(v + 1, sum + arr[v]);
    }
  };

  DFS(0, 0);

  return answer;
};
let arr = [81, 58, 42, 33, 61];
console.log(solution(259, 5, arr));

const solution2 = (c, arr) => {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;

  const DFS = (L, sum) => {
    if (sum > c) return;
    if (L === n) {
      if (sum < c) {
        answer = Math.max(answer, sum);
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  };

  DFS(0, 0);

  return answer;
};
arr = [81, 58, 42, 33, 61];
console.log(solution2(259, arr));
