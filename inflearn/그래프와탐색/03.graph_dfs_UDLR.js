//? 문제 : 미로탐색 (DFS)

//? 7 * 7 격자판 미로를 탈출하는 경로의 가지수를 출력
//? 출발점은 (1,1) 좌표이고 도착점은 (7,7)좌표
//? 격자판의 1은 벽이고, 0은 통로이다
//? 격자판의 움직임은 상하좌우로만 움직인다

//! 내 풀이
const solution = (arr) => {
  let answer = 0;

  let n = arr.length;

  let ch = Array.from({ length: n }, () => Array(n).fill(0));

  let path = [];

  const DFS = (x, y) => {
    if (x === n - 1 && y === n - 1) {
      answer++;
      //   console.log(path);
    } else {
      ch[x][y] = 1;
      path.push([x, y]);
      if (x < n - 1 && arr[x + 1][y] === 0 && ch[x + 1][y] === 0) DFS(x + 1, y);
      if (x > 1 && arr[x - 1][y] === 0 && ch[x - 1][y] === 0) DFS(x - 1, y);
      if (y < n - 1 && arr[x][y + 1] === 0 && ch[x][y + 1] === 0) DFS(x, y + 1);
      if (y > 1 && arr[x][y - 1] === 0 && ch[x][y - 1] === 0) DFS(x, y - 1);
      ch[x][y] = 0;
      path.pop();
    }
  };

  DFS(0, 0);

  return answer;
};

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr)); // 8

//? 영상 풀이

const solution2 = (board) => {
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  const DFS = (x, y) => {
    if (x === 6 && y === 6) answer++;
    else {
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) {
          board[nx][ny] = 1;
          DFS(nx, ny);
          board[nx][ny] = 0;
        }
      }
    }
  };

  board[0][0] = 1;
  DFS(0, 0);

  return answer;
};

console.log(solution2(arr));
