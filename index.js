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

console.log(fiboMemo(11)); // 89

// BottomUp 예시
// DP Table
d = Array(100).fill(0);

d[1] = 1;
d[2] = 1;
let n = 99;

for (let i = 3; i < n + 1; i++) {
  d[i] = d[i - 1] + d[i - 2];
}

console.log(d[11]); // 89
