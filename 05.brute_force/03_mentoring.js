//? 문제 : 멘토링

// 현수네 반 선생님은 반 학생들의 수학점수를 향상시키기 위해 멘토링 시스템을 만들려고 합니다
// 멘토링은 멘토와 멘티가 한짝이 되어 멘토가 멘티의 수학공부를 도와주는것입니다.
// 선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다
// 만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면,
// A학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 합니다.
// M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇가지 인지 출력

// M : 수학테스트 횟수
// N : 학생수
// M번의 수학테스트에서 모두 멘티보다 멘토가 등수가 높은 짝의 개수 출력

// EX)
// 4 3
// 3 4 1 2 => 3번학생이 1등, 4번학생이 2등, 1번학생이 3등, 2번 학생이 4등
// 4 3 2 1
// 3 1 4 2

//! 내 풀이
const solution = (m, n, arr) => {
  let answer = [];
  let tmp = [];

  for (let i = 0; i < n; i++) {
    // 시험
    for (let j = 0; j < m - 1; j++) {
      for (let k = j + 1; k < m; k++) {
        tmp.push([arr[i][j], arr[i][k]]);
      }
    }
  }

  for (let i = 0; i < tmp.length; i++) {
    let a = tmp[i];
    let count = 1;
    for (let j = i + 1; j < tmp.length; j++) {
      if (a[0] === tmp[j][0] && a[1] === tmp[j][1]) {
        count++;
      }
    }
    if (count === 3) answer.push(a);
  }

  return answer.length;
};

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(4, 3, arr));

//? 영상 풀이1
const solution2 = (test) => {
  let answer = 0,
    tmp = [];
  m = test.length;
  n = test[0].length;

  // 모든 2명의 학생쌍 중 첫번째 학생이 두번째 학생보다 M번의 시험에서 점수가 높은경우만 카운트
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = (pj = 0);
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) {
        tmp.push([i, j]);
        answer++;
      }
    }
  }

  return answer;
};

console.log(solution2(arr));
