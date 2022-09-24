// * DP(Dynamic Programming) : 동적 계획법

// DP는 메모리를 적절히 사용하여 수행 시간을 비약적으로 증가시키는 방법.
// 작은 문제 결과를 저장하여 같은 계산을 반복하지 않도록 하는 방법.
// DP의 구현은 일반적으로 두 가지 방식(top-down, bottom-up)으로 구성됩니다

// 다음 2가지를 만족하면 DP 사용.
// 1. 최적부분구조(Optimal Substructure) : 작은문제의 답을 모아 큰문제를 해결
// 2. 중복되는 부분(Overlapping Subproblem) : 동일한 작은 문제 반복

// * 대표적 예제 : 피보나치 수열

// 1, 1, 2, 3, 5, 8, 13, 21, ...
// 점화식 : 인접한 항들 사이의 괸계식

// f(n) = f(n-1) + f(n-2); *점화식
// f(1) = 1, f(2) = 1;

const fibo = (n) => {
  return n == 1 || n == 2 ? 1 : fibo(n - 1) + fibo(n - 2);
};

console.log(fibo(4));

// recursion으로 피보나치를 해결하면 지수 시간 복잡도를 가지게 된다.
// 같은 값이 중복되서 호출된다. => 이 문제를 해결하기 위한것이 DP
// 피보나치 수열의 시간 복잡도는 O(2^N) => F(30)은 10억가량의 연산이 필요

// 1. f(4) = f(3) + f(2)
// 2. f(n) = f(n-1) + f(n-2) 의 반복

// 해결 => 이미 나온 함수의 결과를 기록해서 다른곳에서 연산하지 않도록 설정.

// Memorization : DP의 구현 방법중 하나
// 한번 계산한 결과를 메모리 공간에 메모.
// 같은 문제를 다시 호풀하면 메모했던 결과를 가져온다.
// 값을 기록해 놓는다는점에서 Caching이라고도 한다.

// TopDown vs BottomUp
// DP의 전형적인 형태는 BottomUp => 결과 저장용 리스트는 DP Table
// Memorization은 이전의 결과를 일시적으로 기록해 놓는 넓은 개념을 의미

// TopDown 예시
// Memorization 하기 위한 DP Table : cache
let d = Array(100).fill(0);
// Fibonacci Function을 재귀함수로 구현
const fiboMemo = (x) => {
  if (x == 1 || x == 2) {
    // 종료 조건
    return 1;
  } else if (d[x] !== 0) {
    // 계산한적이 있는지 여부
    return d[x];
  } else {
    // 계산한적이 없다면 점화식
    d[x] = fiboMemo(x - 1) + fiboMemo(x - 2);
    return d[x];
  }
};

console.log(fiboMemo(50));

// BottomUp 예시
// DP Table
d = Array(100).fill(0);

d[1] = 1;
d[2] = 1;
let n = 99;

for (let i = 3; i < n + 1; i++) {
  d[i] = d[i - 1] + d[i - 2];
}

console.log(d[50]);

// TopDown은 재귀, BottomUp은 반복문, 일반적인 경우 효율성은 비슷하기때문에 손에 익는걸 사용.

// DP VS 분할 정복
// 최적 부분 구조(큰 문제 해가 작은 문제의 해의 집합)를 가질때 둘다 사용 가능
// 차이점은 부분 문제의 중복 여부 - 분할 정복 문제에서는 반복적 계산이 없다.

// 분할 정복
// 퀵 정렬 - 기준 원소(Pivot)의 변경된 위치는 바뀌지않는다

//! 주어진 문제가 DP 유형임을 파악하는것이 중요.
// 가장 먼저 그리디, 구현, 완전 탐색등의 아이디어로 문제를 해결할수 있는지 검토
// 다른 알고리즘으로 풀이 방법이 떠오르지 않으면 DP를 고려
// 일단 재귀 함수로 비효율적인 완전탐색프로그램을 작성한뒤 작은 문제에서 구한 답이 큰 문제에서
// 그대로 사용될수 있으면, 코드를 개선하는 방법을 사용할수 있다.

// *  문제 : 효율적인 화폐 구성

// N가지 종류의 화폐중 개수를 최소한으로 이용해서 그 가치의 합이 M원이 되도록 한다.
// input : [2, 3] , 15  => 3원 5개로 15를 만드는것이 최소의 화폐개수
// output : 5
// M은 화폐로 표현하지 못하는 경우 -1

// f(i) : 금액 i를 만들수 있는 최소한의 화폐개수
// k : 각 화폐의단위
// 점화식 : 각 화폐의 단위인 k를 하나씩  확인하며
// f(i-k)를 만드는 방법이 존재하는 경우  f(i) = Math.min(f(i), f(i-k) +1)
//  f(i-k)를 만드는 방법이 존재하지 않는 경우  f(i) = INF(구할수 없는 값)

const money = (arr, m) => {
  // 나올수 있는 최대 숫자가 10000 => 나올수없는 숫자로 채워 넣는다 -> 이경우 -1을 리턴하게
  let d = Array(m + 1).fill(10001);

  d[0] = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i]; j <= m; j++) {
      if (d[j - arr[i]] != 10001) {
        d[j] = Math.min(d[j], d[j - arr[i]] + 1);
      }
    }
  }

  if (d[m] == 10001) return -1;
  else return d[m];
};

// console.log(money([2, 3, 5], 15)); // 5
// console.log(money([3, 5, 7], 4)); // -1

// [ 0 : 0, 1 : 10001, 2 : 10001, 3 : 10001, 4 :  10001 , 5 : 10001 ,6 : 10001, 7 : 10001 ,8 : 10001 9 : 10001, 10 : 10001 ...]
// step 1 : 화폐가 2인 경우
// [ 0 : 0, 1 : 10001, 2 : 1, 3 : 10001, 4 :  2 , 5 : 10001 ,6 : 3, 7 : 10001 ,8 : 4, 9 : 10001, 10 : 5 ...]
// step 2 : 화폐가 3인 경우
// [ 0 : 0, 1 : 10001, 2 : 1, 3 : 1, 4 :  2 , 5 : 2 ,6 : 2, 7 :3 ,8 : 3, 9 : 3, 10 : 5 ...]
// step 2 : 화폐가 5인 경우
// [ 0 : 0, 1 : 10001, 2 : 1, 3 : 1, 4 :  2 , 5 : 1 ,6 : 2, 7 :2 ,8 : 2, 9 : 3, 10 : 2  ...]

//* 문제 : 금광
// n x m 크기의 금광 각칸에는 특정한 크기의 금이존재
// 1열 선택한 행에서 출발. 다음 열에서 같은 행 또는 1칸 위아래 행 이동 하여
// 마지막 열까지 도착했을때 채굴자가 얻을수 있는 금의 최대 크기를 출력하는 프로그램

//! ㅡ 행 | 열

// 1 3 3 2
// 2 1 4 1    => 2 + 6 + 4 + 7 = 19
// 0 6 4 7

// arr[i][j] : i행j열 금 크기
// dp[i][j] : i행 j열까지 얻을수 있는 최대 크기의 금
// dp[i][j] = arr[i][j] + Math.max[dp[i-1][j-1], dp[i][j-1], dp[i+1][j-1]]

const mine = (arr) => {
  let n = arr.length;
  let m = arr[0].length;

  for (let j = 1; j < m; j++) {
    for (let i = 0; i < n; i++) {
      let left_up;
      let left_down;
      let left;

      // 왼쪽 위에서 오는 경우
      if (i == 0) {
        left_up = 0;
      } else {
        left_up = arr[i - 1][j - 1];
      }
      // 왼쪽 아래에서 오는 경우
      if (i == n - 1) {
        left_down = 0;
      } else {
        left_down = arr[i + 1][j - 1];
      }
      // 왼쪽에서 오는 경우
      left = arr[i][j - 1];

      arr[i][j] = arr[i][j] + Math.max(left_up, left_down, left);
    }
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    result = Math.max(result, arr[i][m - 1]);
  }

  return result;
};

// console.log(
// 	mine([
// 		[1, 3, 3, 2],
// 		[2, 1, 4, 1],
// 		[0, 6, 4, 7],
// 	])
// );

// ! LIS(Longest Increasing Subsequence) : 최장 증가 수열
// DP 중 특별 케이스
// 배열중 몇개의 수를 제거하여 부분수열을 만들때
// 오름차순으로 정렬된 가장 긴 수열: 최장 증가 수열

// [3, 5, 7, 9, 2, 1, 4, 8]
// [3, 7, 9, 1, 4, 8] (5, 2 제거)
// [7, 9, 1, 8] (3, 5, 2, 4 제거)
// [3, 5, 7, 8] (9, 2, 1, 4 제거) : 오른 차순 : LIS
// [1, 4, 8] (3, 5, 7, 9, 2 제거) : 오름 차순

// arr[i] : i번째 원소
// dp[i] : arr[i]번째 수를 마지막 원소로 가지는 LIS의 길이
// dp[i] = if(arr[j] < arr[i]) Math.max(dp[i], dp[j]+1)

const LIS = (arr) => {
  let n = arr.length;
  let dp = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max.apply(null, dp);
};

// console.log(LIS([10, 20, 40, 25, 20, 50, 30, 70, 85]));

// * 문제 : 병사 배치하기

// 무작위로 배치된 병사들중 열외를 통해 맨 앞 병사가 전투력이
// 가장 높은 내림차순을 만들때 배치된 병사의 수가 최대인 경우
// 열외자의 수를 구하여라

// [15, 11, 4, 8, 5, 2, 4] : 3,6번을 열외
// [15, 11, 8, 5, 4] => 5명

const out = (arr) => {
  let n = arr.length;
  let dp = Array(n).fill(1);

  arr = arr.reverse();

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return n - Math.max.apply(null, dp);
};

// console.log(out([15, 11, 4, 8, 5, 2, 4]));

//? 문제 : 설탕 배달
// https://reakwon.tistory.com/126
//? 3kg, 5kg의 설탕봉지가 있을 때,
//? 정확히 N kg의 배달 할 수 있는 최소 봉지 수 출력
//? 정확히 N kg을 만들수 없다면 -1 출력

const solution = (n) => {
  n;
  let answer;

  return answer;
};

console.log(solution(18)); // 4
// console.log(solution(4)); //-1
// console.log(solution(6)); // 2
// console.log(solution(9)); //3
// console.log(solution(11)); //3
