//? 문제 : 1이 될 때까지

//? N이 1이 될 때까지 다음 두 과정을 최소로 수행하는 횟수를 출력
//? 1. N에서 1을 뺀다
//? 2. N을 K로 나눈다

//* greedy 정당성 분석
//* 주어진 n에 대하여 최대한 많이 나누기를 수행
//* 2 이상의 수로 나누는 과정이 1을 빼는 과정보다 수를 더 많이 줄일수 있다

const solution = (n, k) => {
  let answer = 0;

  while (n > 1) {
    if (n % k === 0) {
      n /= k;
      answer++;
    } else {
      n--;
      answer++;
    }
    console.log(n, answer);
  }

  return answer;
};

console.log(solution(17, 4)); // 3
console.log(solution(25, 5)); // 2
