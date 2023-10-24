// https://school.programmers.co.kr/learn/courses/30/lessons/120904

//? 문제 : 숫자 찾기

// 정수 num을 이루는 숫자중에 k가 있으면 숫자가 있는 자리수 return
// 없으면 -1

//* 내 풀이
const solution = (num, k) => {
  const check = k.toString();
  let arr = num.toString();

  for (let index in arr) {
    if (arr[index] === check) return +index + 1;
  }

  return -1;
};

console.log(solution(29183, 1)); // 3
console.log(solution(232443, 4)); // 4
console.log(solution(123456, 7)); // -1

//* 다른 사람 풀이
const solution2 = (num, k) => {
  return (
    num
      .toString()
      .split('')
      .map((e) => Number(e))
      .indexOf(k) + 1 || -1
  );
};

console.log(solution2(29183, 1)); // 3
console.log(solution2(232443, 4)); // 4
console.log(solution2(123456, 7)); // -1
