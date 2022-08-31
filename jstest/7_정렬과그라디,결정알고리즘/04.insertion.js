//? 문제 : 삽입 정렬(Insertion Sort)

//? N개의 숫자가 입력되면 오름차순으로 정렬하여 출력
//? 정렬하는 방법은 삽입 정렬

//* 앞의 원소부터 차레대로 진행하여 원소 앞의 이미 정렬된 배열에 자신의 위치를 삽입
//* 시간복잡도 : O(N**2)

const solution = (arr) => {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    let n = answer.length;
    answer[n] = arr[i];
    for (let j = answer.length; j > 0; j--) {
      if (answer[j - 1] > answer[j]) {
        [answer[j - 1], answer[j]] = [answer[j], answer[j - 1]];
      }
    }
    console.log(answer);
  }

  return answer;
};

let arr = [11, 7, 5, 6, 10, 9];
// console.log(solution(arr));

const solution2 = (arr) => {
  let answer = arr;

  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i],
      j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }

  return answer;
};

console.log(solution2(arr));
