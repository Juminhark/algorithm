//? 문제 : 계단오르기i

//? 계단을 한번에 한 계단 또는 두 계단씩 올라간다
//? N계단을 오를 수 있는 방법은 몇가지 인가?

//* 한 계단 또는 두 계단을 오를 수 있으므로
//* i번 째 계단에 오를 수 있는 방법은
//* i-1 에서 한 계단, i-2에서 두 계단을 오르는 방법이다
//* 점화식 : dy[i] = dy[i-2] + dy[i-1]

//* Bottom-Up : tabulation : for
const solution_for = (n) => {
  let answer;

  //* 0 1 2 3 ... n : n번째 인덱스를 활용하기 위해
  let dy = Array.from({ length: n + 1 }, () => 0);

  dy[1] = 1; //* 한 칸씩 1번
  dy[2] = 2; //* 한 칸씩 2번, 두 칸씩 1번

  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
    console.log(dy);
  }

  answer = dy[n];

  return answer;
};

// console.log(solution_for(7)); // 21

//* Top-Down : Memoization : recursion
const solution_recursion = (n) => {
  let answer;
  let dy = Array.from({ length: n + 1 }, () => 0);

  const DFS = (n) => {
    if (n < 3) {
      // dy[1] = 1;
      // dy[2] = 2;
      dy[n] = n;
    } else {
      dy[n] = DFS(n - 2) + DFS(n - 1);
      console.log(dy);
    }

    return dy[n];
  };

  answer = DFS(n);

  return answer;
};
console.log(solution_recursion(7)); // 7

//* recursion도 결국 앞에서부터 채워가야 하는거라서
//* bottom-up이 효율적인거 같은데
