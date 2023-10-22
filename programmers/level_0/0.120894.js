// https://school.programmers.co.kr/learn/courses/30/lessons/120894

//? 문제 : 영어가 싫어요

// 문자열 numbers가 매개변수로 주어질 때 영어로 표기되있는걸 숫자로 바꿔서 return

let num = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

//* 내 풀이
const solution = (numbers) => {
  let answer = numbers;

  for (let e of Object.keys(num)) {
    answer = answer.replaceAll(e, num[`${e}`]);
  }
  // 문자 리터럴로 object key 접근
  // https://velog.io/@luna238/Javascript-%EA%B0%9D%EC%B2%B4%EB%B3%80%EC%88%98%EC%A0%91%EA%B7%BC-keys-for-in

  return Number(answer);
};

console.log(solution('zeroonefourzerosixseven')); // 14067

//* 다른 사람 풀이
const solution2 = (numbers) => {
  const answer = numbers.replace(
    /zero|one|two|three|four|five|six|seven|eight|nine/g,
    (v) => {
      return num[v];
    }
  );

  return Number(answer);
};

console.log(solution2('zeroonefourzerosixseven')); // 14067

//* 다른 사람 풀이
const solution3 = (n) =>
  Number(
    [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
    ].reduce((acc, cur, index) => acc.replaceAll(cur, index), n)
  );

console.log(solution3('zeroonefourzerosixseven')); // 14067
