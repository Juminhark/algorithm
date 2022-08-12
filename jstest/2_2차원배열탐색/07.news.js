//? 문제 : 봉우리

// N * N 격자판에 각 격자는 높이
// 각 격자의 상하좌우 숫자보다 높으면 봉우리
// 봉우리가 몇개인지 출력
// 격자판의 가장자리는 0으로 초기화

const solution = (n, arr) => {
  let answer = 0;

  for (let x of arr) {
    x.unshift(0);
    x.push(0);
  }

  //격자판 가장자리 초기화
  arr.unshift(Array.from({ length: n + 2 }, () => 0));
  arr.push(Array.from({ length: n + 2 }, () => 0));

  // 가장자리는 제외
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      // 상하좌우보다 높은지 확인
      if (
        arr[i][j] > arr[i + 1][j] &&
        arr[i][j] > arr[i - 1][j] &&
        arr[i][j] > arr[i][j + 1] &&
        arr[i][j] > arr[i][j - 1]
      )
        answer++;
    }
  }

  return answer;
};

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
// console.log(solution(5, arr));
//? 영상 풀이
// [i, j]
// i + dx[k] / j + dy[k]
// dx = [-1, 0, 1, 0]
// dy = [0, 1, 0, -1]
const solution2 = (n, arr) => {
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }

  return answer;
};
console.log(solution2(5, arr));

//* 상하좌우 방향탐색
//* [i, j]
//* i + dx[k] / j + dy[k]
//* dx = [-1, 0, 1, 0]
//* dy = [0, 1, 0, -1]
