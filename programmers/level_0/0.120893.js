// https://school.programmers.co.kr/learn/courses/30/lessons/120893

//? 문제 : 대문자와 소문자

// 대문자면 소문자로 소문자면 대문자로

//* 내 풀이
const solution = (my_string) => {
  return my_string
    .split('')
    .map((e) => (e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()))
    .join('');
};

console.log(solution('cccCCC')); // CCCccc
