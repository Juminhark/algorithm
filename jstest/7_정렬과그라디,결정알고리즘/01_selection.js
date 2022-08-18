//? 문제 : 선택 정렬(Selection Sort)

// N개의 숫자가 입력되면 오름차순으로 출력
// 정렬하는 방법은 선택정렬

const solution = (arr) => {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      //* i 다음 인데스에 제일 작은 값을 갖는 인덱스를 찾아
      if (arr[minIndex] > arr[j]) minIndex = j;
    }

    //* i 인덱스의 값과 뒤바꾼다
    let tmp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = tmp;
  }

  return arr;
};

let arr = [13, 5, 11, 7, 23, 15];
// console.log(solution(arr));

//* 선택정렬
//* 배열의 작은 인덱스에 나머지 인덱스에서 제일 작은 값을 찾아
//* 두 인덱스의 값을 뒤바꾼다

const solution2 = (arr) => {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }

  return answer;
};

console.log(solution2(arr));

//* 2개의 값을 바꾸는방법

//* 기존방법
// let tmp = arr[i];
// arr[i] = arr[minIndex];
// arr[minIndex] = tmp;

//* 최신방법
// [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
