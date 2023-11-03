// https://school.programmers.co.kr/learn/courses/30/lessons/120850

//? 문제 : 문자열 정렬하기(1)

// 문자열 my_string 안에 숫자만 골라 오름차순으로 정렬 return

const solution = (my_string) =>
  [...my_string]
    .filter((e) => /[0-9]/g.test(e))
    .map((e) => Number(e))
    .sort();

console.log(solution('hi12392')); // [1,2,2,3,9]
console.log(solution('p2o4i8gj2')); // [2, 2, 4, 8]
console.log(solution('abcde0')); // [0]

const solution2 = (my_string) => {
  let answer = [];
  let regexp = new RegExp(/[0-9]/, 'i');

  for (let e of my_string) {
    if (regexp.test(e)) answer.push(Number(e));
  }

  return answer.sort();
};

console.log(solution2('hi12392')); // [1,2,2,3,9]
console.log(solution2('p2o4i8gj2')); // [2, 2, 4, 8]
console.log(solution2('abcde0')); // [0]

//* /[0-9]/g === /\d/g

// str.match(regexp)
// regexp.test
