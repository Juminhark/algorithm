//? 문제 : 조합의 경우수(memoization)

//? nCr = n! / (n-r)! \* r! 이 공식 대신
//? nCr = n-1Cr-1 + n-1Cr 공식을 사용하여 재귀를 이용해 조합수를 출력

const solution = (n, r) => {
  let answer;

  const DFS = (n, r) => {
    if (n === r || r === 0) return 1;
    else return DFS(n - 1, r) + DFS(n - 1, r - 1);
  };

  answer = DFS(n, r);

  return answer;
};

// console.log(solution(5, 3)); // 10
// console.log(solution(33, 19)); // 818809200

//? 위 방법은 오래 걸려서 빠르게 구하는 방법이 memoization
//? 시간복잡도를 줄이는 방법

const solution2 = (n, r) => {
  let answer;
  let dy = Array.from(Array(35), () => Array(35).fill(0));

  const DFS = (n, r) => {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r) + DFS(n - 1, r - 1));
  };

  answer = DFS(n, r);

  return answer;
};

console.log(solution2(5, 3));
console.log(solution2(33, 19)); // 818809200
