//? 문제 : 경로 탐색(DFS-인접행렬:노드개수가 적을 때)

//? 방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지수를 출력

//* 1 -> 2 , 2 -> 1  이 무한루프 가능성을 염두해야한다

//? 영상 풀이
const solution = (n, arr) => {
  let answer = 0;

  //* 1번인덱스부터 사용하기 위해 n+1
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

  for (let [a, b] of arr) {
    graph[a][b] = 1;
  }

  //* 방문했는지 확인
  let ch = Array.from({ length: n + 1 }, () => 0);

  //* 경로확인
  let path = [];

  const DFS = (v) => {
    if (v === n) {
      console.log(path);
      answer++;
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1;
          path.push(i);
          DFS(i);
          ch[i] = 0;
          path.pop();
        }
      }
    }
  };

  path.push(1);
  ch[1] = 1;
  DFS(1);

  return answer;
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
