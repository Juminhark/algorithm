//? 문제 : 크레인 인형뽑기(stack) : 카카오

// N * N

const solution = (arr1, arr2) => {
  let answer = 0;
  let tmp = [];

  for (let x of arr2) {
    for (let y in arr1) {
      if (arr1[y][x - 1] !== 0) {
        if (tmp[tmp.length - 1] === arr1[y][x - 1]) {
          answer += 2;
          tmp.pop();
        } else {
          tmp.push(arr1[y][x - 1]);
        }
        arr1[y][x - 1] = 0;
        break;
      }
    }
  }

  return answer;
};

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
// console.log(solution(a, b));

//? 영상 풀이
const solution2 = (board, moves) => {
  let answer = 0;
  let stack = [];

  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        let tmp = board[i][pos - 1];
        board[i][pos - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break;
      }
    }
  });

  return answer;
};

console.log(solution2(a, b));
