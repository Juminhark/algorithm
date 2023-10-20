// https://school.programmers.co.kr/learn/courses/30/lessons/12944

//? 문제 : 평균구하기
// 정수를 담고 있는 배열 arr의 평균값을 return

const solution = (arr) => {
  let answer = 0;

  for (let i of arr) answer += i;

  return answer / arr.length;
};

//* arr.reduce((acc, cur) => acc + cur, 0)
const solution2 = (arr) => {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
};

console.log(solution([1, 2, 3, 4])); // 2.5
console.log(solution2([1, 2, 3, 4]));
console.log(solution2([5, 5]));
