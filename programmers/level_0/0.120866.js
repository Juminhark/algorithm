// https://school.programmers.co.kr/learn/courses/30/lessons/120866

//? 문제 : 안전지대

// 지뢰가 있는 지역의 위, 아래, 좌, 우, 대각선칸을 위험지역으로 분류할 때,
// 지뢰가 매설 지역 1과, 지뢰 없는 지역 0 으로 구성된
// 2차원 배열 board의 안전구역의 칸수를 return

const solution = (board) => {
  let answer = 0;
  const len = board.length;
  const dx = [0, 0, 1, 1, 1, -1, -1, -1];
  const dy = [1, -1, 1, 0, -1, 1, 0, -1];

  for (let x in board) {
    for (let y in board[x]) {
      if (board[x][y] === 1) {
        for (let i in dx) {
          if (
            Number(x) + dx[i] >= 0 &&
            Number(y) + dy[i] >= 0 &&
            Number(x) + dx[i] < len &&
            Number(y) + dy[i] < len &&
            board[Number(x) + dx[i]][Number(y) + dy[i]] === 0
          ) {
            board[Number(x) + dx[i]][Number(y) + dy[i]] = 2;
            answer--;
          }
        }
      } else {
        answer++;
      }
    }
  }

  return answer;
};

console.log(
  solution([
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ])
);

//* 다른사람풀이
const solution2 = (board) => {
  let outside = [
    [-1, 0],
    [-1, -1],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, 0],
    [1, -1],
    [1, 1],
  ];
  let safezone = 0;

  board.forEach((row, y, self) =>
    row.forEach((it, x) => {
      if (it === 1) return false;
      return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x])
        ? false
        : safezone++;
    })
  );

  return safezone;
};

//! 이중 NOT(!!) : truthy, falsy를 그에 대응하는 원시형 불리언으로 변환하도록 강제
