//? 문제 : 교육과정설계(Queue)

// 필수과목은 반드시 이수해야하며 순서도 정해져있다
// 필수과목의 순서와 수업설계가 주어졌을때 맞으면 'YES' 아니면 'NO'

//! 내풀이
const solution = (need, plan) => {
  let answer = 'YES';
  let arr = need.split('');

  for (let x of plan) {
    if (arr[0] === x) arr.shift();
  }

  if (arr.length !== 0) answer = 'NO';

  return answer;
};

let a = 'CBA';
let b = 'CBDAGE';
console.log(solution(a, b));

//? 영상 풀이
const solution2 = (need, plan) => {
  let answer = 'YES';
  let queue = need.split('');

  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return 'NO';
    }
  }

  if (queue.length > 0) return 'NO';

  return answer;
};

console.log(solution2(a, b));
