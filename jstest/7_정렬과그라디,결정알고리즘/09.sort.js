//? 문제 : 결혼식

// N명의 참석하는 시간정보를 통해 동시에 존재하는 최대 인원수

//! 내 풀이
const solution = (arr) => {
  let answer = 0;

  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  for (let x = 0; x < arr.length - 1; x++) {
    let count = 1;
    let start = arr[x][0];
    let end = arr[x][1];

    for (let y = x + 1; y < arr.length; y++) {
      if (start <= arr[y][0] && arr[y][0] < end) {
        count++;
      }
    }

    answer = Math.max(answer, count);
  }

  return answer;
};

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
// console.log(solution(arr)); //2

//? 영상 풀이
const solution2 = (times) => {
  let answer = Number.MIN_SAFE_INTEGER;
  let t_line = [];

  for (let x of times) {
    t_line.push([x[0], 's']);
    t_line.push([x[1], 'e']);
  }

  t_line.sort((a, b) => {
    //* 'e'가 's'보다 아스키 코드값이 낮다
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });

  let cnt = 0;
  for (let x of t_line) {
    if (x[1] === 's') cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }

  return answer;
};
// console.log(solution2(arr)); //2
