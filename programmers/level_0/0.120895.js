// https://school.programmers.co.kr/learn/courses/30/lessons/120895

//? 문제 : 인덱스 바꾸기

//* 내 풀이
const solution = (my_string, num1, num2) => {
  let str = my_string.split('');

  let tmp = str[num1];

  str[num1] = str[num2];

  str[num2] = tmp;

  return str.join('');
};

console.log(solution('hello', 1, 2)); // hlelo

//* 다른 사람 풀이
const solution2 = (my_string, num1, num2) => {
  let str = my_string.split('');

  [str[num1], str[num2]] = [str[num2], str[num1]];

  return str.join('');
};

console.log(solution2('hello', 1, 2)); // hlelo
