//? 문제 : 유효한 회문

// 회문이면 'YES' 아니면 'NO' 출력
// 대소문자를 구분하지 않으며 알파벳 이외의 문자들은 무시

//! 내 풀이
const solution = (str) => {
  let answer = 'YES';

  str = str
    .toLowerCase()
    .split('')
    .filter((a) => a.match(/[a-z]/g));

  let tmp = [...str].reverse();

  if (str.join('') !== tmp.join('')) return 'NO';

  return answer;
};

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
// str = 'asdwdq';
// console.log(solution(str)); // YES

//* String.match(regexp)
// regexp = new RegExp(obj)
// g : 전체 , i : 대소문자 구분없이

//? 영상 풀이
const solution2 = (s) => {
  let answer = 'YES';
  s = s.toLowerCase().replace(/[^a-z]/g, ''); //* ^ : 부정

  if (s !== s.split('').reverse().join('')) return 'NO';

  return answer;
};

console.log(solution2(str));

//* str.replace()

//* sol는 배열 sol2 문자열을 다뤘기 떄문에 참조값이 ob이여서 reverse()로 원본 배열에 영향
