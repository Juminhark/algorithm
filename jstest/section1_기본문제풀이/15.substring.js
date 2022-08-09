//? 문제 : 가운데 문자 출력

// 소문자로 된 문자열이 입려되면 그 단어의 가운데 문자를 출력
// 단어의 길이가 짝수일 경우 가운데 2개의 문자 출력

//* String.substring
// sting객체의 시작인덱스부터 종료인덱스 전 까지 부분 문자열 반환

//! 내 풀이
const solution = (str) => {
  let answer;
  let len = str.length;
  let start = Math.floor(len / 2);

  if (len % 2 === 0) {
    // 짝수 일 때
    answer = str.substring(start - 1, start + 1);
  } else {
    // 홀수 일 때
    answer = str.substring(start, start + 1);
  }

  // console.log(str); //*원본배열 훼손없음
  return answer;
};

console.log(solution('study')); // u
console.log(solution('good')); // oo

//? 영상 풀이
const solution2 = (s) => {
  let answer;
  let mid = Math.floor(s.length / 2);

  if (s.length % 2 == 1) {
    answer = s.substring(mid, mid + 1);
  } else {
    answer = s.substring(mid - 1, mid + 1);
  }

  return answer;
};

console.log(solution2('study')); // u
console.log(solution2('good')); // oo
