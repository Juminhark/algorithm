//? 문제 : 회의실 배정(Greedy 대표문제)

// 회의실을 사용하고자하는 N개의 회의의 시작시간과 끝나는 시간이 주어졌을 때
// 회의가 겹치지 않고 회의실을 사용할수 있는 최대수의 회의를 출력

//! 내 풀이
const solution = (arr) => {
  let answer = 0;

  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  console.log(arr);

  for (let x = 0; x < arr.length; x++) {
    let count = 1;
    let end = arr[x][1];
    for (let y = x + 1; y < arr.length; y++) {
      if (arr[y][0] >= end) {
        count++;
        end = arr[y][1];
      }
    }
    answer = Math.max(answer, count);
  }

  return answer;
};

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
// console.log(solution(arr));

arr = [
  [3, 3],
  [1, 3],
  [2, 3],
];
// console.log(solution(arr));

//? 영상 풀이
const solution2 = (meeting) => {
  let answer = 0;

  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let et = 0;
  for (let x of meeting) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }

  return answer;
};

arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution2(arr));

arr = [
  [3, 3],
  [1, 3],
  [2, 3],
];

console.log(solution2(arr));
