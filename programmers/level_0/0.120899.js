// https://school.programmers.co.kr/learn/courses/30/lessons/120899

//? 문제 : 가장 큰 수 찾기

//* 내 풀이
const solution = (array) => {
  let min = Number.MIN_SAFE_INTEGER;
  let answer = [];

  // array의 key, value 접근
  for (const index in array) {
    if (min < array[index]) {
      min = array[index];
      answer = [min, Number(index)];
    }
  }

  return answer;
};

console.log(solution([1, 8, 3]));

//* 다른 사람 풀이
const solution2 = (array) => {
  let max = Math.max(...array);

  return [max, array.indexOf(max)];
};

console.log(solution2([1, 8, 3]));
