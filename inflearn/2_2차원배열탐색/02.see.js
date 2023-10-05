//? 문제 : 보이는 학생

// N명의 학생이 일렬로 서 있을때 선생님이 볼수 있는 학생 수 출력
// 앞에 있는 사람보다 크면 보이고 작거나 같으면 보이지 않음

// MAX값 지정하여 비교하면서 앞에서부터 탐색

//! 내 풀이
const solution = (n, arr) => {
  let answer = [];
  let max = arr[0];

  answer.push(max);

  for (let i = 1; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i];
      answer.push(max);
    }
  }

  return answer.length;
};

let arr = [130, 135, 148, 140, 150, 150, 153];
console.log(solution(8, arr));

//? 영상 풀이
const solution2 = (arr) => {
  let answer = 1,
    max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      answer++;
      max = arr[i];
    }
  }

  return answer;
};

console.log(solution2(arr));
