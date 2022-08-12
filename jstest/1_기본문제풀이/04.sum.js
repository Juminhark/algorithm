//? 문제 : 1부터 N까지 합 출력하기

// 자연수 N이 입력되면 1부터 N까지의 합을 출력

const solution = (n) => {
  let answer = 0;

  while (n > 0) {
    answer += n;
    n--;
  }

  return answer;
};

console.log(solution(6)); // 21
console.log(solution(10)); // 55

const solution2 = (n) => {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    answer = answer + i;
  }

  return answer;
};

console.log(solution2(6)); // 21
console.log(solution2(10)); // 55
