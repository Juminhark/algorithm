//? 문제 : 가장 긴 문자열

// N개의 문자열중 가장 긴 문자열을 출력
// 각 문자열의 길이는 서로 다름

const solution = (n, str) => {
  let answer;
  let max = [0, 0];

  // str 요소 모두 확인하여 가장 긴 문자열을 확인하고 index 기록
  str.forEach((s, index) => {
    // console.log([s, index]);
    let sl = s.split('').length;
    console.log(sl);
    if (sl > max[1]) {
      max[1] = sl;
      max[0] = index;
    }
  });

  answer = str[max[0]];
  return answer;
};

let str = ['teacher', 'time', 'student', 'beautiful', 'good'];
console.log(solution(5, str));

const solutoin2 = (s) => {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (let x of s) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }

  return answer;
};

console.log(solutoin2(str));
