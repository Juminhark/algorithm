//? 문제 : 크레인 인형뽑기

//? n * n 크기의 격자안에 인형이 존재, 인형이 없는 칸은 빈칸
//? 인형은 격자의 가장 아래 칸부터 차곡차곡 쌓여 있다
//? 크레인은 좌우로 움직여서 멈춘 위치에서 가장 위에 있는
//? 인형은 크레인으로 집어 올려 바구니에 쌓이게 된다
//? 바구니 안에서 같은 모양의 인형 두개가 쌓이면 두인형은 바구니에서 사라진다
//? 크레인은 인형이 없는 곳에서 작동되면 아무일도 일어나지 않는다

//? 격자의 상태가 담긴 2차원 배열 board
//? 크레인을 작동시킨 위치가 담긴 배열 moves
//? 크레인을 작동시킨후 터트려져 사라진 인형의 개수를 return

const solution = (board, moves) => {
  let answer = 0;
  let result = [];

  moves.map((r) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][r - 1] !== 0) {
        result.push(board[i][r - 1]);
        board[i][r - 1] = 0;
        break;
      }
    }
    // result 안에 같은거 2개 있으면 없앤다
    if (result.length > 1) {
      if (result[result.length - 2] == result[result.length - 1]) {
        result.pop();
        result.pop();
        answer += 2;
      }
    }
  });

  return answer;
};

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
