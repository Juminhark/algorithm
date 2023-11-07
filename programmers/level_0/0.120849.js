// https://school.programmers.co.kr/learn/courses/30/lessons/120849

//? 문제 : 모음 제거

const solution = (my_string) => {
  let answer = '';
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i of my_string) {
    if (!vowels.includes(i)) answer += i;
  }

  return answer;
};

//* 다른사람풀이
const solution2 = (my_string) => my_string.replace(/[aeiou]/g, '');

//* 다른사람풀이
const solution3 = (my_string) =>
  Array.from(my_string)
    .filter((t) => !['a', 'e', 'i', 'o', 'u'].includes(t))
    .join('');

console.log(solution('bus')); // bs
console.log(solution('nice to meet you')); // nc t mt y
