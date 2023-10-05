//? 문제 : 공통원소 구하기(Two Pointers Algorithm)

// A, B 두 집합의 공통 원소를 추출하여 오름차순으로 출력

//! 내 풀이
const solution = (arr1, arr2) => {
  let answer = [];

  arr1.forEach((a) => {
    if (arr2.includes(a)) answer.push(a);
  });

  //* Array.includes()

  return answer.sort((a, b) => a - b);
};

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];

console.log(solution(a, b));

//? 영상 풀이
const solution2 = (arr1, arr2) => {
  let answer = [];
  arr1.sort();
  arr2.sort();
  let p1 = (p2 = 0);

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    } else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }

  return answer;
};

console.log(solution2(a, b));

//* sort()를 정렬기준으로 주지 않으면
//* String으로 변환후 비교하여 사전순으로 정렬된다
//* 요소에 두자리 이상의 숫자가 있을때 문제가 된다
let e = [1, 3, 10, 5, 2];
console.log(e.sort()); // [ 1, 10, 2, 3, 5 ]
console.log(typeof e[1]);

console.log(e.sort((a, b) => b - a));
