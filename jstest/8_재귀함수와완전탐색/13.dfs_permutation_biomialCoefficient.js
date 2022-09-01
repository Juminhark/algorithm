//? 문제 : 수열 추측하기(순열, 이항계수 응용)

//? 가장 윗줄에 1부터 N까지의 숫자가 한 개씩 있다.
//? 둘째 줄부터 차례대로 위의 두개를 더한 값이 저장
//? n과 가장 밑에 있는 숫자가 주어져 있을 때,
//? 가장 윗줄에 있는 숫자를 구하는 프로그램을 작성

//? 정수 N(1 <= N <= 10)

const solution = (n, f) => {
  let answer,
    flag = 0;
  let dy = Array.from(Array(11), () => Array(11).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  let p = Array.from({ length: n }, () => 0);
  let b = Array.from({ length: n }, () => 0);

  const combi = (n, r) => {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  };

  const DFS = (L, sum) => {
    if (flag) return;
    if (L === n && sum === f) {
      answer = p.slice(); // 깊은복사
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p[L] = i;
          DFS(L + 1, sum + b[L] * p[L]);
          ch[i] = 0;
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }

  DFS(0, 0);

  return answer;
};

// console.log(solution(4, 16)); // [3, 1, 2, 4]

//* 파스칼의 삼각형
//* 이항계수를 삼각형 모양의 기하학적 형태로 배열
//* 이항계수(서로 다른 몇개의 물건중에서 순서없이 물건을 선택할수 있는 경우)
//*           0C0                 1
//*         1C0 1C1              1 1
//*       2C0 2C1 2C2           1 2 1
//*     3C0 3C1 3C2 3C3        1 3 3 1
//*   4C0 4C1 4C2 4C3 4C4     1 4 6 4 1
//* 5C0 5C1 5C2 5C3 5C4 5C5  1 5 10 10 5 1

const solution2 = (n, f) => {
  let answer,
    flag = 0;
  let dy = Array.from(Array(11), () => Array(11).fill(0)); // memoization
  let ch = Array.from({ length: n + 1 }, () => 0); // 순열
  let p = [];
  let b = Array.from({ length: n }, () => 0);

  const combi = (n, r) => {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  };

  const DFS = (L, sum) => {
    if (flag) return;
    if (L === n && sum === f) {
      answer = p.slice(); // 깊은복사
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p.push(i);
          DFS(L + 1, sum + b[L] * p[L]);
          ch[i] = 0;
          p.pop();
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }

  DFS(0, 0);

  return answer;
};

console.log(solution2(4, 16)); // [3, 1, 2, 4]
