//? 문제 : 송아지 찾기(BFS : 상태트리탐색)

//? 현수의 위치와 송아지 위치가 수직선상의 좌표 점으로 주어지면
//? 점프를 +1, -1, +5 이동가능할때
//? 현수가 송아지에게 최소 몇번의 점프로 이동 할수 있는지 출력

const solution = (s, e) => {
  let answer = 0;

  let ch = Array.from({ length: 10001 }, () => 0);
  let dis = Array.from({ length: 10001 }, () => 0);
  let queue = [];

  ch[s] = 1;
  queue.push(s);

  dis[s] = 0;
  while (queue.length) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) return dis[x] + 1;
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        ch[nx] = 1;
        queue.push(nx);
        dis[nx] = dis[x] + 1;
      }
    }
  }

  return answer;
};

console.log(solution(5, 14)); // 3
console.log(solution(8, 3)); // 5

const solution2 = (s, e) => {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(s);
  ch[s] = 1;
  let L = 0;
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let x = queue.shift();
      for (let nx of [x - 1, x + 1, x + 5]) {
        if (nx === e) return L + 1;
        if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
          ch[nx] = 1;
          queue.push(nx);
        }
      }
    }
    L++;
  }
  return answer;
};

console.log(solution2(5, 14)); // 3
