//? 문제 : 하샤드 수

//? 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나눠져야 한다
//? x : 18 => 1 + 8 = 9 => 18이 9로 나뉘어 떨어지므로 x는 하샤드 수
//? 입력받은 x가 하샤드 수인지 출력

const solution = (x) => {
  let answer = true;
  let compare = x;
  let sum = 0;

  // 각 자릿수 합
  while (compare > 0) {
    sum += compare % 10;
    compare = Math.floor(compare / 10);
  }

  // 하샤드 판별
  if (!Number.isInteger(x / sum)) answer = false;

  return answer;
};

console.log(solution(10)); // true
console.log(solution(12)); // true
console.log(solution(11)); // false
console.log(solution(13)); // false
