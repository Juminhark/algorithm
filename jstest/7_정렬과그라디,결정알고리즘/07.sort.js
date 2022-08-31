//? 문제 : 좌표 정렬

// N개의 좌표(x,y)가 주어지면 모든 좌표를 오름차순으로 정렬하여 출력
// 정렬기준 : x값에 의해 정렬하고 x값이 같으면 y값에 의해 정렬

//! 내 풀이
const solution = (arr) => {
  let answer = arr;

  for (let x = 0; x < arr.length - 1; x++) {
    for (let y = x + 1; y < arr.length; y++) {
      if (arr[x][0] > arr[y][0]) {
        [arr[x], arr[y]] = [arr[y], arr[x]];
      } else if (arr[x][0] === arr[y][0]) {
        if (arr[x][1] > arr[y][1]) {
          let tmp = arr[y];
          arr.splice(y, 1);
          arr.splice(x, 0, tmp);
        }
      }
    }
  }

  return answer;
};

let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution(arr));

//? 영상 풀이
//* 좌표 정렬하는 방법
const solution2 = (arr) => {
  let answer = arr;

  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  return answer;
};
arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution2(arr));
