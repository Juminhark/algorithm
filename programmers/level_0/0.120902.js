// https://school.programmers.co.kr/learn/courses/30/lessons/120902

//? 문제 : 문자열 계산하기 **
// 연산자는 + , -

//* 내 풀이
const solution = (my_string) => {
  let str = my_string.split(' ');
  let answer = Number(str[0]);

  for (let i = 1; i < str.length; i++) {
    if (str[i] === '+') {
      answer += Number(str[i + 1]);
    } else if (str[i] === '-') {
      answer -= Number(str[i + 1]);
    }
  }

  return answer;
};

console.log(solution('3 + 4'));

//* 다른 사람 풀이
//! [eval is evil](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/eval)
const solution2 = eval;

console.log(solution2('3 + 4'));

//* 다른 사람 풀이
const solution3 = (my_string) => {
  const arr = my_string.split(' ').filter((e) => e);

  while (arr.length > 1) {
    // 단항 연산자 + : 문자 -> 숫자
    arr.unshift(+arr.shift() + (arr.shift() === '+' ? 1 : -1) * arr.shift());
  }

  return arr[0];
};

console.log(solution3('3 + 4'));
