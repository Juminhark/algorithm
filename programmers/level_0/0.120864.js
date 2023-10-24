// https://school.programmers.co.kr/learn/courses/30/lessons/120864

//? 문제 : 숨어있는 숫자의 덧셈(2)

// 소문자, 대문자, 자연수로만 구성된 문자열 my_string 안의 자연수들의 합을 return

//* 내 풀이
const solution = (my_string) => {
  return my_string
    .toLowerCase()
    .split(/[a-z]/g)
    .reduce((acc, cur) => acc + Number(cur), 0);
};

console.log(solution('aAb1B2cC34oOp')); // 37
console.log(solution('1a2b3c4d123Z')); // 133

//* 다른 사람 풀이
const solution2 = (my_string) => {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
};

console.log(solution2('aAb1B2cC34oOp')); // 37
console.log(solution2('1a2b3c4d123Z')); // 133

// 정규표현식
const re = /\D+/g;
const str = 'aAb1B2cC34oOp';
const myArray = str.match(re);
console.log(myArray);
