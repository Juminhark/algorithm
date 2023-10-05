//? 문제 : 돌다리 건너기

//? 개울에서 N개의 돌다리를 만났을 때,
//? 한번에 1칸, 2칸 또는 3칸 씩 건널 수 있다면,
//? 반대 편으로 넘어갈 수있는 총 방법의 수 출력

//* n개의 돌다리를 건너 반대편이므로 n + 1 에 도달하여야한다

const solution = (n) => {
  let answer = 0;
  dy = Array.from({ length: n + 2 }, () => 0);

  dy[0] = 1;
  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i <= n + 1; i++) {
    dy[i] = dy[i - 3] + dy[i - 2] + dy[i - 1];
  }
  answer = dy[n + 1];

  return answer;
};

console.log(solution(7)); // 81

const solution2 = (n) => {
  let answer;
  let dy = Array.from({ length: n + 2 }, () => 0);

  const DFS = (n) => {
    if (n < 3) {
      //* 기저 상태 파악
      //* dy[0] = 1;
      //* dy[1] = 1;
      //* dy[2] = 2;
      if (n === 0) dy[n] = 1;
      else dy[n] = n;
    } else {
      //* 점화식 : dy[i] = dy[i-3] + dy[i-2] + dy[i-1]
      dy[n] = DFS(n - 3) + DFS(n - 2) + DFS(n - 1);
    }

    return dy[n];
  };

  answer = DFS(n + 1);

  return answer;
};

console.log(solution2(7)); // 81
