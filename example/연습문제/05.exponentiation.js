//? 문제 : 정수 제곱근 판별

//? 양의 정수 n에 대해, 어떤 양의 정수 x 의 제곱인지 아닌지 판별
//? n이 양의 정수 x의 제곱이면 x+1의 제곱, 아니면 -1을 return

const solution = (n) => {
  let answer = -1;

  if (Number.isInteger(Math.sqrt(n))) {
    answer = (Math.sqrt(n) + 1) ** 2;
  }

  return answer;
};

console.log(solution(121)); // 144
console.log(solution(3)); // -1

//* Number.isInteger() : 정수 판별
//* ** : 제곱
