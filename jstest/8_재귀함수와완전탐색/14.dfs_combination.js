//? 문제 : 조합구하기(중요)

//? 1부터 N까지 번호가 적힌 구슬을 M개 뽑는 방법의 수를 출력

const solution = (n, m) => {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);

  const DFS = (L, s) => {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = s; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  };

  DFS(0, 1);
  return answer;
};

console.log(solution(4, 2));
