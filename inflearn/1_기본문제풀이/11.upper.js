//? 문제 : 대문자 찾기

// 문자열 중 대문자가 몇 개인지 출력

//! 내 풀이
const solution = (str) => {
  const regexp = new RegExp(/[A-Z]/g);
  return str.match(regexp).length;
};

console.log(solution('KoreaTimeGood'));

//? 영상 풀이
const solution2 = (str) => {
  let answer = 0;

  for (let x of str) {
    if (x === x.toUpperCase()) {
      answer++;
    }
  }

  return answer;
};

console.log(solution2('KoreaTimeGood'));

//? 영상 풀이2
const solution3 = (str) => {
  let answer = 0;

  for (let x of str) {
    let num = x.charCodeAt(); // 아스키 코드
    if (num >= 65 && num <= 90) answer++;
  }

  // 아스키 코드
  // 대문자 : 65 ~ 90
  // 소문자 : 97 ~ 122

  return answer;
};

console.log(solution3('KoreaTimeGood'));

//* 정규식 표현

//* String.match()
