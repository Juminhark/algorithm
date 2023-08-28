//? 문제 : 회문 문자열

// 회문 : 앞에서 읽을 때나 뒤에서 읽을 떄나 같은 문자열
// 회문 문자열이면 'YES', 아니면 'NO' 출력
// 대소문자 구분하지 않음

//! 내 풀이
const solution = (str) => {
  let answer = 'YES';
  let tmp = str.toUpperCase().split('');

  // 가운데 찾아서 양쪽 같은지 비교
  let len = Math.floor(tmp.length / 2);
  for (let i = 0; i < len; i++) {
    let a = tmp.shift();
    let b = tmp.pop();
    if (a !== b) return (answer = 'NO');
  }

  return answer;
};

console.log(solution('gooB')); // no
console.log(solution('gooOG')); // yes

//? 영상 풀이
const solution2 = (s) => {
  let answer = 'YES';
  s = s.toLowerCase();
  let len = s.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - i - 1]) return 'NO';
  }

  return answer;
};

console.log(solution2('gooOG')); // yes

//? 영상 풀이 : reverse()
const solution3 = (s) => {
  let answer = 'YES';
  s = s.toLowerCase();
  if (s !== s.split('').reverse().join('')) return 'NO';

  return answer;
};

console.log(solution3('gooOG')); // yes
