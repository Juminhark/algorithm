//? 문제 : 쇠막대기 : 어렵다

const solution = (str) => {
  let answer = 0;
  let stack = [];

  for (let i in str) {
    if (str[i] === '(') stack.push(str[i]);
    else if (str[i] === ')') {
      if (str[i - 1] === '(') {
        // 레이저절단면
        stack.pop();
        answer += stack.length;
      } else {
        stack.pop();
        answer += 1;
      }
    }
  }

  return answer;
};

let a = '()(((()())(())()))(())';
// console.log(solution(a));

a = ' (((()(()()))(())()))(()()) ';
// console.log(solution(a));

//* 문제에 '(', ')' 가 있으면 거의 stack 문제이다

const solution2 = (s) => {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push(s[i]);
    else {
      stack.pop();
      if (s[i - 1] === '(') answer += stack.length;
      else answer += 1;
    }
  }

  return answer;
};

a = '()(((()())(())()))(())';
console.log(solution2(a));

a = ' (((()(()()))(())()))(()()) ';
// console.log(solution(a));
