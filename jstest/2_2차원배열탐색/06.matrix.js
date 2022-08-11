//? 문제 : 격자판 최대합

// N * N 격자판의 각 행, 열, 두 대각의 합 중 가장 큰 합 출력

// arr[행][열]

const solution = (n, arr) => {
  let answer = [];

  // 행의 합
  for (let x of arr) {
    answer.push(x.reduce((a, b) => a + b, 0));
  }
  // 열의 합
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let x of arr) {
      sum += x[i];
    }
    answer.push(sum);
    sum = 0;
  }

  let sum1 = 0,
    sum2 = 0;

  // 대각의 합
  for (let x in arr) {
    sum1 += arr[x][x];
    sum2 += arr[x][n - x - 1]; //* n=5 0~4를 하려면 -1 필요
  }

  answer.push(sum1);
  answer.push(sum2);

  answer.sort((a, b) => b - a);

  return answer[0];
};

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(5, arr));

const solution2 = (n, arr) => {
  let answer = Number.MIN_SAFE_INTEGER;
  let sum1 = (sum2 = 0);

  // 행의 합, 열의 합
  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }

  // 양 대각의 합
  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }

  answer = Math.max(answer, sum1, sum2);

  return answer;
};

console.log(solution2(5, arr));
