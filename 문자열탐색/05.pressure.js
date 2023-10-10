//? 문제 : 문자열 압축

// 같은 문자가 연속으로 반복되는 경우
// 반복되는 문자 바로 오른쪽에 횟수 표기 해서 출력
// 반복횟수가 1인 경우 생략

//! 내 풀이
const solution = (str) => {
  let answer = '';
  let count = 1;
  let tmp = '';
  let arr = str.split('');

  for (let x of arr) {
    if (x !== tmp) {
      if (count !== 1) {
        answer += count;
        count = 1;
      }
      answer += x;
      tmp = x;
    } else {
      count++;
    }
  }

  return answer;
};

let str = 'KKHSSSSSSSE';
console.log(solution(str)); // K2HS7E

//? 영상 풀이
const solution2 = (s) => {
  let answer = '';
  let cnt = 1;
  s = s + ' ';

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }

  return answer;
};

console.log(solution2(str)); // K2HS7E
