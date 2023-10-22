// https://school.programmers.co.kr/learn/courses/30/lessons/120892

//? 문제 : 암호 해독

// 문자열 cipher 중 code의 배수 번째 글자만 모음 배열 return

//* 내 풀이
const solution = (cipher, code) => {
  let str = cipher.split('');
  let len = str.length;
  let num = code;
  let answer = '';

  while (num <= len) {
    answer += str[num - 1];
    num += code;
  }

  return answer;
};

console.log(solution('dfjardstddetckdaccccdegk', 4)); // attack

//* 다른 사람 풀이
const solution2 = (cipher, code) => {
  return cipher
    .split('')
    .filter((_, index) => (index + 1) % code === 0)
    .join('');
};

console.log(solution2('dfjardstddetckdaccccdegk', 4)); // attack
