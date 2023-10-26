// https://school.programmers.co.kr/learn/courses/30/lessons/181932

//? 문제 : 코드 처리하기

const solution = (code) => {
  let mode = 0;
  let ret = '';

  for (let idx in code) {
    if (mode === 0) {
      if (code[idx] == 1) {
        mode = 1;
      } else {
        if (idx % 2 === 0) ret += code[idx];
      }
    } else {
      if (code[idx] == 1) {
        mode = 0;
      } else {
        if (idx % 2 === 1) ret += code[idx];
      }
    }
  }

  return ret ? ret : 'EMPTY';
};

console.log(solution('abc1abc1abc'));
