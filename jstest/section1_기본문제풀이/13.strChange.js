//? 문제 : 대소문자 변환

// 문자열의 대문자는 소문자로 소문자는 대문자로 변환하여 출력

//! 내 풀이
//? 영상 풀이
const solution = (str) => {
  let answer = '';

  for (let x of str) {
    // 대문자면 소문자로
    if (x === x.toUpperCase()) answer += x.toLowerCase();
    else answer += x.toUpperCase();
  }

  return answer;
};

console.log(solution('StuDY')); // sTUdy
