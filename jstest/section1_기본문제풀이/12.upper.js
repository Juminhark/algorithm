//? 문제 : 대문자로 통일

// 입력 받은 문자열을 모두 대문자로 바꾸어 출력

//! 내 풀이
const solution = (str) => {
  let answer = [];

  for (let x of str) {
    answer.push(x.toUpperCase());
  }

  return answer.join('');
};

console.log(solution('ItisTimeToStudy'));

//? 영상 풀이
const solution2 = (s) => {
  let answer = '';

  for (let x of s) {
    if (x === x.toLowerCase()) answer += x.toUpperCase();
    else answer += x;
  }

  return answer;
};

console.log(solution2('ItisTimeToStudy'));

//? 영상 풀이
const solution3 = (s) => {
  let answer = '';

  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) {
      answer += String.fromCharCode(num - 32);
    } else answer += x;
  }

  // 아스키 대문자 소문자 차이는 32 차이

  return answer;
};

console.log(solution3('ItisTimeToStudy'));
