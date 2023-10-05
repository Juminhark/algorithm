//? 문제 : 연속 부분수열2 * 어려워

// N개로 이루어진 수열에서 연속부분수열의 합이 M이하가 되는 수를 출력

//! 내 풀이
const solution = (n, m, arr) => {
  let answer = 0;
  let sum = 0;
  let sumArr = []; //* 확인용

  for (let lt = 0; lt < n; lt++) {
    let rt = lt;
    while (sum <= m) {
      sumArr.push(arr[rt]); //* 확인용
      sum += arr[rt++];
      if (sum <= m) {
        answer++;
        console.log(sumArr); //* 확인용
      }
    }
    sum = 0;
    sumArr = []; //* 확인용
  }

  return answer;
};

let arr = [1, 3, 1, 2, 3];
console.log(solution(5, 5, arr));

//? 영상 풀이
const solution2 = (m, arr) => {
  let answer = 0,
    sum = 0,
    lt = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) sum -= arr[lt++];
    answer += rt - lt + 1;
  }

  return answer;
};

console.log(solution2(5, arr));
