// https://school.programmers.co.kr/learn/courses/30/lessons/120887

//? 문제 : k의 개수

// 정수 i, j, k 가 매개변수로 주어질 때,
// i부터 j까지 k가 몇번 등장하는지 return

// 1 ~ 13 의 수 중 1은 6번 등장 : 1, 10, 11, 12, 13

const solution = (i, j, k) => {
  const check = k.toString();
  let answer = 0;

  for (let e = i; e <= j; e++) {
    let arr = e.toString().split('');

    for (let el of arr) {
      if (el === check) answer++;
    }
  }

  return answer;
};

console.log(solution(1, 13, 1)); // 6
