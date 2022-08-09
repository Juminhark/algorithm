//? 문제 : 일곱 난쟁이

// 9명의 난쟁이중 키의 합이 100인 7명 출력

//! 내 풀이
const solution = (arr) => {
  let answer;

  // 2명을 제외한 합이 100인 경우 출력
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  let len = arr.length;
  let list;

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        list = [i, j];
      }
    }
  }

  answer = arr.filter((_, index) => {
    return index !== list[0] && index !== list[1];
  });

  return answer;
};

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
// console.log(solution(arr)); // [ 20, 7, 23, 19, 10, 8, 13]

//? 영상 풀이
const solution2 = (arr) => {
  let answer = arr; //* 얕은복사 : 같은 값을 참조
  let sum = arr.reduce((a, b) => a + b, 0);

  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1); // 뒤에꺼 부터 지우면
        arr.splice(i, 1); // 앞에 지울때 영향 없다
      }
    }
  }
  return answer;
};

console.log(solution2(arr));

//* Array.splice()
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열 내용을 변경
