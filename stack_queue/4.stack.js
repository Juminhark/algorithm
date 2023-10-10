//? 문제 : 후위식 연산(postfix)

// 후위연산식이 주어지면 연산한결과를 출력
// 3*(5+2)-9 => 352+*9-

//! 내 풀이
const solution = (str) => {
  let answer;
  let tmp = [];

  for (let x of str) {
    //* 숫자인지 판별은 isNaN() 사용
    if (!isNaN(x)) {
      tmp.push(Number(x));
    } else {
      let b = tmp.pop();
      let a = tmp.pop();
      let result;
      if (x === '+') result = a + b;
      else if (x === '-') result = a - b;
      else if (x === '*') result = a * b;
      else if (x === '/') result = a / b;

      tmp.push(result);
    }
  }
  answer = tmp.pop();

  return answer;
};

let str = '352+*9-';
console.log(solution(str));

//? 영상 풀이
const solution2 = (s) => {
  let answer;
  stack = [];

  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === '+') stack.push(lt + rt);
      else if (x === '-') stack.push(lt - rt);
      else if (x === '*') stack.push(lt * rt);
      else if (x === '/') stack.push(lt / rt);
    }
  }

  answer = stack[0];
  return answer;
};

console.log(solution2(str));
