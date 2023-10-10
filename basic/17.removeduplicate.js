//? 문제 : 중복단어제거

// N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력

//! 내 풀이
const solution = (arr) => {
  let answer = [];

  for (let x in arr) {
    // console.log(arr.indexOf(arr[x]), x, arr[x]);
    if (arr.indexOf(arr[x]) === Number(x)) answer.push(arr[x]);
  }

  return answer;
};

let arr = ['good', 'time', 'good', 'time', 'student'];
// console.log(solution(arr)); // [ 'good', 'time', 'student' ]

//? 영상 풀이
const solution2 = (s) => {
  let answer;

  answer = s.filter(function (v, i) {
    // console.log(v, i);
    return s.indexOf(v) === i;
  });

  return answer;
};

console.log(solution2(arr)); // [ 'good', 'time', 'student' ]
