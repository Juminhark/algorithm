// https://school.programmers.co.kr/learn/courses/30/lessons/181925

//? 문제 : 수 조작하기 2
// 정수 배열 numLog
// w : 수에 1을 더한다
// s : 수에 1을 뺀다.
// d : 수에 10을 더한다
// a : 수에 10을 뺸다

const solution = (numLog) => {
  let str = '';

  for (let i = 1; i < numLog.length; i++) {
    let d = numLog[i] - numLog[i - 1];

    switch (d) {
      case 1:
        str += 'w';
        break;
      case -1:
        str += 's';
        break;
      case 10:
        str += 'd';
        break;
      case -10:
        str += 'a';
        break;
    }
  }

  return str;
};

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1])); // wsdawsdassw

//* 다른 사람 풀이
const differences = {
  1: 'w',
  '-1': 's',
  10: 'd',
  '-10': 'a',
};

const solution2 = (numLog) =>
  numLog.reduce(
    (acc, cur, i) => (i === 0 ? acc : acc + differences[cur - numLog[i - 1]]),
    ''
  );

console.log(solution2([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1])); // wsdawsdassw
