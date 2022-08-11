//? 문제 : 등수 구하기

// N명 학생의 국어 점수가 입력되면 입력된 순서대로 출력
// 같은 점수면 높은 등수 동일처리

//! 내 풀이
const solution = (s) => {
  let answer = [],
    score = [...s];

  // 점수 내림 정렬
  s.sort((a, b) => b - a);

  for (let x of score) {
    // index + 1 이 등수
    answer.push(s.indexOf(x) + 1);
  }

  return answer;
};

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr)); // [ 4, 3, 2, 1, 5 ]

//? 영상 풀이
const solution2 = (arr) => {
  let n = arr.length;
  // let answer = Array.from({ length: n }).fill(1);
  let answer = Array.from({ length: n }, () => 1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }

  return answer;
};

arr = [92, 92, 92, 100, 76];
console.log(solution2(arr)); // [ 2, 2, 2, 1, 5 ]
