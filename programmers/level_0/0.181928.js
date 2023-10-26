// https://school.programmers.co.kr/learn/courses/30/lessons/181928

//? 문제 : 이어 붙인 수
// 주어진 배열의 홀수만 순서대로 이어붙은 수와 짝수만 이어 붙인 수의 합 return

//* 내 풀이
const solution = (num_list) => {
  let even = '';
  let odd = '';

  for (let e of num_list) {
    e % 2 === 0 ? (even += e) : (odd += e);
  }

  return Number(even) + Number(odd);
};

console.log(solution([3, 4, 5, 2, 1])); // 393
console.log(solution([5, 7, 8, 3])); // 581

//* 다른 사람 풀이 : reduce 초기값 설정
const solution2 = (num_list) => {
  const { odds, evens } = num_list.reduce(
    ({ odds, evens }, num) => {
      if (num % 2 === 0) {
        evens.push(num);
      } else {
        odds.push(num);
      }
      return { odds, evens };
    },
    { odds: [], evens: [] }
  );
  return Number(odds.join('')) + Number(evens.join(''));
};
