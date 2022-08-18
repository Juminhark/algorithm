//? 문제 : 공주구하기(Queue)

// N명의 왕자. 나이순으로 번호. 동그랗게 앉아 시계순으로 돌며
// 특정숫자 K를 외치면 그 왕자가 공주를 구하러 가고 다시 1번부터 외친다
// 이때 마지막으로 구하러가는 왕자의 번호를 출력

//! 내 풀이
const solution = (n, k) => {
  let answer;
  let tmp = [];

  for (let i = 1; i < n + 1; i++) {
    tmp.push(i);
  }
  console.log(tmp);

  let max = 0;
  while (tmp.length !== 1) {
    let a = tmp.shift();
    max++;
    if (max !== k) tmp.push(a);
    else max = 0;
  }

  answer = tmp[0];
  return answer;
};

// console.log(solution(8, 3)); // 7

const solution2 = (n, k) => {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);

  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }

  return answer;
};

console.log(solution2(8, 3)); // 7
