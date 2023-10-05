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

console.log(solution_for(7)); // 21
