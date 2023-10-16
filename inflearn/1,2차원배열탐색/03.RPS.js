//? 문제 : 가위 바위 보

// A, B 두사람이 총 N 번의 가위 바위 보 게임
// A가 이기면 A 출력, B가 이기면 B 출력, 비기면 D 출력
// 가위 1 , 바위 2, 보 3

//! 내 풀이
const solution = (n, arrA, arrB) => {
  let answer = [];

  const winer = (a, b) => {
    if (a === 1) {
      // A 가 가위 일 때
      if (b === 1) return 'D';
      else if (b === 2) return 'B';
      else return 'A';
    } else if (a === 2) {
      // A 가 바위 일 때
      if (b === 1) return 'A';
      else if (b === 2) return 'D';
      else return 'B';
    } else {
      // A 가 보 일 때
      if (b === 1) return 'B';
      else if (b === 2) return 'A';
      else return 'D';
    }
  };

  for (let i = 0; i < n; i++) {
    answer.push(winer(arrA[i], arrB[i]));
  }

  return answer.join(' ');
};

let A = [2, 3, 3, 1, 3];
let B = [1, 1, 2, 2, 3];
console.log(solution(5, A, B));

const solution2 = (a, b) => {
  let answer = '';

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer += 'D' + ' ';
    else if (a[i] === 1 && b[i] === 3) answer += 'A' + ' ';
    else if (a[i] === 2 && b[i] === 1) answer += 'A' + ' ';
    else if (a[i] === 3 && b[i] === 2) answer += 'A' + ' ';
    else answer += 'B' + ' ';
  }

  return answer;
};

console.log(solution2(A, B));
