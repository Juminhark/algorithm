//? 문제 : 문자 찾기

// 문자열을 입력받고, 특정 문자를 입력받아
// 문자열에 특정 문자가 몇개 존재하는지 출력

//! 내 풀이
const solution = (str, s) => {
  let answer = 0;
  str.split('').forEach((i) => {
    if (i === s) answer++;
  });

  return answer;
};

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R')); // 3

//? 영상 풀이
const solution2 = (s, t) => {
  let answer = 0;

  for (let x of s) {
    if (x === t) answer++;
  }

  return answer;
};

console.log(solution2(str, 'G')); // 2

//? 영상 풀이2
const solution3 = (s, t) => {
  let answer = s.split(t).length;

  return answer - 1;
};

console.log(solution3(str, 'G')); // 2

//* for(let i of 문자열)
