// https://school.programmers.co.kr/learn/courses/30/lessons/120862

//? 문제 : 최댓값 만들기(2)

// 정수 배열 numbers의 원소 중 두개를 곱해 만들 수 있는 최댓값을 return

//* 내 풀이
const solution = (numbers) => {
  const len = numbers.length;
  let answer = [];

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      answer.push(numbers[i] * numbers[j]);
    }
  }

  return Math.max(...answer);
};

console.log(solution([1, 2, -3, 4, -5]));

//* 다른 사람 풀이
const solution2 = (numbers) => {
  const len = numbers.length;
  numbers.sort((a, b) => a - b);
  return Math.max(numbers[0] * numbers[1], numbers[len - 2] * numbers[len - 1]);
};

console.log(solution2([1, 2, -3, 4, -5]));
