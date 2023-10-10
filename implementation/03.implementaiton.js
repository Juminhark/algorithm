//? 문제 : 왕실의 나이트

//? 8 * 8 의 체스판에서 나이트는 체스판 밖으로는 이동할 수 없다
//? [1, 1] ~ [8, 8]
//? 1. 수평으로 두 칸 이동한 뒤 수직으로 한칸 이동
//? 2. 수직으로 두 칸 이동한 뒤 수평으로 한칸 이동
//? 위의 두 가지 방법으로만 이동 가능할 때,
//? 특정 위치에서 나이트가 이동 가능한 좌표의 수를 출력

const solution = (arr) => {
  let answer = 0;

  let [x, y] = arr;

  let dx = [2, 2, -2, -2, 1, -1, 1, -1];
  let dy = [1, -1, 1, -1, 2, 2, -2, -2];

  for (let i = 0; i <= 7; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx < 1 || nx > 8 || ny < 1 || ny > 8) continue;
    answer++;
  }

  return answer;
};

console.log(solution([1, 1]));
