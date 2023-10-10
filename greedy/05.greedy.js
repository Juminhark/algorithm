//? 문제 : 설탕 배달

//? 3kg, 5kg의 설탕봉지가 있을 때,
//? 정확히 N kg의 배달 할 수 있는 최소 봉지 수 출력
//? 정확히 N kg을 만들수 없다면 -1 출력

const solution = (n) => {
  let answer = 0;

  let max = Math.ceil(n / 5);
  let start = 0;
  while (start < max) {
    let tmp = n - start * 5;

    if (tmp % 3 === 0) {
      answer = start + tmp / 3;
    }

    start++;
  }

  if (answer === 0) return -1;

  return answer;
};

// console.log(solution(18)); // 4
// console.log(solution(4)); //-1
// console.log(solution(6)); // 2
// console.log(solution(9)); //3
// console.log(solution(11)); //3

const solution2 = (n) => {
  let answer = 0;
  while (n >= 0) {
    if (n % 5 === 0) {
      return (answer += n / 5);
    }
    n -= 3;
    answer++;
  }
  return -1;
};

console.log(solution2(18)); // 4
console.log(solution2(4)); //-1
console.log(solution2(6)); // 2
console.log(solution2(9)); //3
console.log(solution2(11)); //3
