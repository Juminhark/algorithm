//? 문제 : 피보나치 수열

//? 1, 1, 2, 3, 5, 8, 13, 21, ... 와 같이
//? f(n+2) = f(n+1) + f(n) 의 점화식을 갖을 때 , n 번째 항의 값을 출력

//* 점화식 : 인접한 항 사이의 관계식
//* f(n) = f(n-2) + f(n-1)

//* 기저 상태
//* f(1) = 1
//* f(2) = 1

//* bottom-up
const solution_for = (n) => {
  let answer = 0;
  let dy = Array(n + 1).fill(0);

  dy[1] = 1;
  dy[2] = 1;

  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }

  answer = dy[n];

  return answer;
};
// console.log(solution_for(8)); // 21

//* top-down
const solution_recursion = (n) => {
  let answer;
  let dy = Array(n + 1).fill(0);

  const DFS = (n) => {
    console.log(dy);
    if (n < 3) {
      dy[n] = 1;
    } else {
      dy[n] = DFS(n - 2) + DFS(n - 1);
    }
    return dy[n];
  };
  answer = DFS(n);

  return answer;
};
console.log(solution_recursion(4)); // 21

//* top-down-short
const recursion_short = (n) => {
  return n == 1 || n == 2 ? 1 : recursion_short(n - 1) + recursion_short(n - 2);
};
// console.log(recursion_short(8)); // 21