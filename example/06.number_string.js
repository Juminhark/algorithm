//? 문제 : 자연수 뒤집어 배열로 만들기

//? 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열령태로 return
//? n : 12345 => [5,4,3,2,1]

const solution = (n) => {
  let answer = [];

  while (n > 0) {
    answer.push(n % 10);
    n = Math.floor(n / 10);
  }
  return answer;
};

console.log(solution(12345)); // [5,4,3,2,1]

const solution2 = (n) => {
  let answer = n
    .toString()
    .split('')
    .reverse()
    .map((e) => (e = parseInt(e)));
  return answer;
};

console.log(solution2(12345)); // [5,4,3,2,1]
