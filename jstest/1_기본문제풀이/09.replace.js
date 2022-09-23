//? 문제 : A를 #으로

//? 입력된 단어에 포함된 'A'를 모두 '#'으로 바꾸어 출력

//! 내 풀이
const solution = (str) => {
  console.log(str.split('A'));
  return str.split('A').join('#');
};

let str = 'BANANA';
// console.log(solution('BANANA')); //

//? 영상 풀이
const solution2 = (s) => {
  let answer = '';

  for (let x of s) {
    if (x === 'A') answer += '#';
    else answer += x;
  }

  return answer;
};

// console.log(solution2(str));

//? 영상 풀이2
const solution3 = (s) => {
  //* 정규식 표현, g 글로벌
  let answer = s.replace(/A/g, '#');

  return answer;
};
console.log(solution3(str));

//* String 값은 얕은 복사할 때 값이 복사. 참조되는 것이 아니다

//* String.replace()
// 정규식 표현 : /A/i
// 모든 문자열을 바꾸고 싶을때 : /A/g

//* String method
// String.split()
