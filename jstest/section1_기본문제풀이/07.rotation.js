//? 문제 : 10부제

// 번호의 일의자리 숫자와 날짜 일의 자리가 같으면 운행 금지
// 일의 자리 숫자, 자동차 번호 끝 두자리가 주어졌을때
// 위반하는 자동차 대수를 출력

//! 내 풀이
const solution = (n, arr) => {
  let answer = 0;

  for (const i of arr) {
    let el = i.toString().split('');
    if (Number(el[1]) === n) {
      answer++;
    }
  }

  return answer;
};

let arr = [25, 33, 11, 47, 53, 17, 33];
console.log(solution(3, arr)); // 3
let arr1 = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(0, arr1)); // 3

//? 영상 풀이
const solution2 = (arr) => {
  let answer = 0;

  for (let x of arr) {
    if (x % 10 === day) answer++;
  }

  return answer;
};

console.log(solution2(3, arr));

//* 일의자리 관한 문제 : 10으로 나눈 나머지

//* String.function()
// String.split()

//* Number.function()
// Number.toString()
