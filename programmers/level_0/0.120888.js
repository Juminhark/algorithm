// https://school.programmers.co.kr/learn/courses/30/lessons/120888

//? 문제 : 중복된 문자 제거
// 문자열 my_string 에서 중복된 문자를 제거하고 return

const solution = (my_string) => {
  let answer = new Set();

  my_string.split('').forEach((e) => {
    answer.add(e);
  });

  return [...answer].join('');
};

console.log(solution('people'));

// 줄이면
const solution2 = (my_string) => [...new Set(my_string)].join('');

console.log(solution2('people'));
