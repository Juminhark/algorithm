//? 문제 : 이진트리 넓이우선탐색(BFS)

//* Queue

//* 최단거리를 구할때는 BFS를 많이 쓴다

const solution = () => {
  let answer = '';
  let queue = [];

  queue.push(1);

  while (queue.length) {
    let v = queue.shift();
    answer += v + ' ';
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }
  return answer;
};

console.log(solution());
