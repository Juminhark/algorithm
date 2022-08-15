//? 문제 : 올바른 괄호

// 입력된 괄호가 올바르면 'YES', 올바르지 않으면 'NO'

//! 내 풀이
const solution = (str) => {
  let answer = 'YES';
  let tmp = [];
  let arr = str.split('');

  while (arr.length !== 0) {
    let a = arr.shift();
    if (a === '(') {
      tmp.push(a);
      // console.log(tmp);
    } else {
      if (tmp.length === 0) return 'NO'; // ')'가 더 많은경우
      tmp.pop();
      // console.log(tmp);
    }
  }

  if (tmp.length !== 0) return 'NO'; // '('가 더 많은경우

  return answer;
};

let a = '(()(()))(()';
// console.log(solution(a)); // NO
a = '())(())';
// console.log(solution(a)); // NO
a = '()(((())))(())';
// console.log(solution(a)); // YES

const solution2 = (s) => {
  let answer = 'YES';
  stack = [];
  for (let x of s) {
    if (x === '(') stack.push(x);
    else {
      if (stack.length === 0) return 'NO';
      stack.pop();
    }
  }
  if (stack.length > 0) return 'NO';
  return answer;
};

a = '(()(()))(()';
console.log(solution2(a)); // NO
a = '())(())';
console.log(solution2(a)); // NO
a = '()(((())))(())';
console.log(solution2(a)); // YES
