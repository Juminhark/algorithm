//? 문제 : 부분집합 구하기(DFS)

//? 자연수 N이 주어지면 1부터 N까지 원소를 갖는 집합의 부분집합을 출력
//? 공집합은 출력하지 않는다

const solution = (n) => {
  let answer = [];

  let ch = Array.from({ length: n + 1 }, () => 0);
  const DFS = (v) => {
    if (v === n + 1) {
      let tmp = '';
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i + ' ';
      }
      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      ch[v] = 1;
      DFS(v + 1);
      ch[v] = 0;
      DFS(v + 1);
    }
  };

  DFS(1);

  return answer;
};

console.log(solution(3));

//! 내 풀이
풀이;
const solution2 = (n) => {
  let answer = [];

  const DFS = (v, arr) => {
    let tmp = [...arr];
    if (v === n + 1) {
      if (tmp.length > 0) {
        answer.push(tmp);
      }
    } else {
      DFS(v + 1, tmp);
      tmp.push(v);
      DFS(v + 1, tmp);
    }
  };

  DFS(1, []);

  return answer;
};

console.log(solution2(3));
