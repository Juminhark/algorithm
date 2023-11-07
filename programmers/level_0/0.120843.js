// https://school.programmers.co.kr/learn/courses/30/lessons/120843

//? 문제 : 공 던지기

// 공은 1번부터 던지며 오른쪽으로 한 명을 던너뛰고 드 다음 사람에게만 던질 수 있다.
// 정수 배열 numbers와 정수 k가 주어질 때, k번째로 공을 던지는 사람의 번호 return

//* 다른사람풀이
const solution3 = (numbers, k) => numbers[(2 * (k - 1)) % numbers.length];

//! 나머지로 접근 하는 방식 연습 필요

const solution = (numbers, k) => {
  let count = 0;
  let len = numbers.length;
  k--;

  while (k--) {
    count += 2;
    if (count >= len) count -= len;
  }

  return numbers[count];
};

const solution2 = (numbers, k) => {
  let arr = [...numbers];

  // numbers가 반복된 배열안에서
  // 1 + (k-1) * 2 번째 선택

  let choice = 1 + (k - 1) * 2;

  while (choice > arr.length) {
    arr = [...arr, ...numbers];
  }

  return arr[choice - 1];
};
