//? 버블 정렬(Bubble Sort)

//? N개의 숫자가 입력되면 오름차순으로 정렬하여 출력
//? 정렬하는 방법은 버블 정렬

//* 서로 인접한 두원소를 검사하여 순서에 맞지않은 경우 위치를 바꾼다 : O(n**2)

const solution = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};

let arr = [13, 5, 11, 7, 23, 15];
// console.log(solution(arr));

const solution2 = (arr) => {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return answer;
};
console.log(solution2(arr));
