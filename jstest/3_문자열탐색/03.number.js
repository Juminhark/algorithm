//? 문제 : 숫자만 추출

// 문자와 숫자가 섞여 있는 문자열에서 숫자만 추출하여 출력

//! 내 풀이
const solution = (str) => {
  let answer;

  answer = Number(
    str
      .split('')
      .filter((a) => a.match(/[0-9]/g))
      .join('')
  );

  return answer;
};

let str = 'g0en2T0s8eSoft';
console.log(solution('tge0a1h205er')); // 1205
console.log(solution(str)); // 208

//? 영상 풀이
const solution2 = (s) => {
  let answer = '';

  for (let x of s) {
    if (!isNaN(x)) answer += x;
  }

  return parseInt(answer);
};

console.log(solution2('tge0a1h205er')); // 1205
console.log(solution2(str)); // 208
