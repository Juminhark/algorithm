//? 문제 : 상하좌우

//? n x n 정사각형 공간의 가장 왼쪽 위 (1, 1)에서 시작
//? 정사각형의 가장 오른쪽아래가 (n, n)
//? L: 왼쪽, R: 오른쪽, U: 위쪽, D: 아래쪽
//! 공각 밖으로의 이동은 무시.

// 일련의 명령에따라 개체를 이동 시킨다는점에서 Simulation 유형
// 시뮬레이션, 구현, 완전 탐색은 서로 유사점이 많다

const solution = (str, n) => {
  let arr = str.split(' ');
  console.log(arr);

  // 시작 지점
  let x = 1;
  let y = 1;

  // 동 서 남 북
  let type = ['R', 'L', 'D', 'U'];
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];

  for (let i of arr) {
    let nx = x + dx[type.indexOf(i)];
    let ny = y + dy[type.indexOf(i)];

    if (1 > nx || nx > n || 1 > ny || ny > n) continue;

    x = nx;
    y = ny;
  }

  return x + ' ' + y;
};

console.log(solution('R R R U D D', 5));
