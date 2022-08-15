//? 문제 : 괄호문자제거

// 문자열에서 소괄호 () 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력

//! 내 풀이
const solution = (s) => {
  let answer = [];

  for (let i of s) {
    if (i === ')') {
      let check;
      while (check !== '(') {
        check = answer.pop();
      }
    } else {
      answer.push(i);
    }
  }
  return answer.join('');
};

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
// console.log(solution(str)); // EFLM

//? 영상 풀이
const solution2 = (s) => {
  let answer;
  stack = [];
  for (let x of s) {
    if (x === ')') {
      while (stack.pop() !== '(');
    } else stack.push(x);
  }
  answer = stack.join('');
  return answer;
};

str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution2(str));
