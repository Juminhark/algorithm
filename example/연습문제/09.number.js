//? 문제 : 정수 내림차순으로 배치하기

//? 정수 n을 각 자릿수를 큰것부터 작은순으로 정렬한 새로운 정수를 리턴
//? n : 118372 => 873211

const solution = (n) => {
  let answer = [];

  while (n > 0) {
    answer.push(n % 10);
    n = Math.floor(n / 10);
  }

  answer.sort((a, b) => b - a);

  return Number(answer.join(''));
};

console.log(solution(118372));
