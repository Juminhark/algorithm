// https://school.programmers.co.kr/learn/courses/30/lessons/120826

//? 문제 : 특정 문자 제거하기
// 문자열 my_string 에서 letter를 제거한 문자열을 return

const solution = (my_string, letter) => {
  let answer = [...my_string];

  while (answer.includes(letter)) {
    answer.splice(answer.indexOf(letter), 1);
  }

  return answer;
};

console.log(solution('abcdefg', 'g'));

// split
const solution2 = (my_string, letter) => my_string.split(letter).join('');

// reg
const solution3 = (my_string, letter) => {
  let reg = new RegExp(letter, 'g');
  return my_string.replace(reg, '');
};

// filter
const solution4 = (my_string, letter) =>
  my_string
    .split('')
    .filter((v) => v !== letter)
    .join('');
