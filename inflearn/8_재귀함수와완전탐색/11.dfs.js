//? 문제 : 팩토리얼

//? 자연수 N을 입력하면 N! 값을 구하세요
//? N! = n * (n-1) * (n-2) * ... * 2 * 1

//! 내 풀이
const solution = (n) => {
  let answer = 1;

  const DFS = (m) => {
    if (m === 1) return;
    else {
      answer *= m;
      DFS(m - 1);
    }
  };

  DFS(n);

  return answer;
};

console.log(solution(5));

//? 영상 풀이
const solution2 = (n) => {
  let answer;

  const DFS = (n) => {
    if (n === 1) return 1;
    else return n * DFS(n - 1);
  };

  answer = DFS(n);

  return answer;
};

console.log(solution2(5));
