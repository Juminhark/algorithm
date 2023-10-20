// https://school.programmers.co.kr/learn/courses/30/lessons/120868
//? 문제 : 삼각형의 완성조건(2)

//? 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 삼각형을 만들수있다
//? 삼각형의 두 변의 길이가 담긴 배열 sides 주어질 때, 나머지 한 변이 될수 있는 정수의 개수를 return

const solution = (sides) => {
  let answer = 0;

  sides.sort((a, b) => a - b);

  let sum = sides[0] + sides[1];
  let min = sides[1] - sides[0];

  while (sum-- > min + 1) answer++;

  return answer;
};

console.log(solution([1, 2])); // 1
console.log(solution([3, 6])); // 5
console.log(solution([11, 7])); // 13

const solution2 = (sides) => {
  return Math.min(...sides) * 2 - 1;
};

console.log(solution2([1, 2])); // 1
console.log(solution2([3, 6])); // 5
console.log(solution2([11, 7])); // 13
