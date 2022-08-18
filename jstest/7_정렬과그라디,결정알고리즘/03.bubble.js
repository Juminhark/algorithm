//? 문제 : Special Sort(Bulbble Sort 응용)

// N개의 정수가 입력되면 정렬해서 출력
// 음의 정수는 앞쪽의 양의 정수는 뒷쪽에 있어야 한다
// 양의 정수와 음의 정수는 순서에는 변함이 없어야한다

//! 내 풀이
const solution = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < 0 && arr[j - 1] > 0) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }

  return arr;
};

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
// console.log(solution(arr)); // [-3, -2, -6, 1,2,3,5,6]

//? 영상 풀이
const solution2 = (arr) => {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], (arr[j + 1] = arr[j + 1]), arr[j]];
      }
    }
  }

  return answer;
};

arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr)); // [-3, -2, -6, 1,2,3,5,6]
