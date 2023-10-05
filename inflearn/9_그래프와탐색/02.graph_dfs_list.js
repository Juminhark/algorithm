//? 경로 탐색 (DFS-인접리스트 : 노드개수가 많을 때 적용)

//? 방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지수를 출력

//? 영상 풀이
const solution = (n, arr) => {
  let answer = [];

  //* 1번인덱스부터 사용하기 위해 n+1
  let graph = Array.from(Array(n + 1), () => Array());

  for (let [a, b] of arr) {
    graph[a].push(b);
  }
  console.log(graph);

  //* 방문했는지 확인
  let ch = Array.from({ length: n + 1 }, () => 0);

  //* 경로확인
  let path = [];

  const DFS = (v) => {
    if (v === n) {
      answer.push(path.slice());
    } else {
      for (let i = 0; i <= graph[v].length; i++) {
        if (ch[graph[v][i]] === 0) {
          ch[graph[v][i]] = 1;
          path.push(graph[v][i]);
          DFS(graph[v][i]);
          ch[graph[v][i]] = 0;
          path.pop();
        }
      }
    }
  };

  path.push(1);
  ch[1] = 1;
  DFS(1);

  console.log(answer);
  return answer.length;
};

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];

console.log(solution(5, arr));
