//? 문제 : 삼각형 판별하기

//? 길이가 서로 다른 A, B, C 세개의 막대 길이
//? 이 막대로 삼각형을 만들수 있으면 'YES', 없으면 'NO' 출력

//* 삼각형 성질 : 삼각형의 두변의 길이의 합은 나머지한병의 길이보다 크다

//! 내 풀이
const solution = (a, b, c) => {
  let arr = [a, b, c];

  arr.sort((a, b) => a - b); // 오름차순 정렬
  console.log(arr);

  if (arr[0] + arr[1] > arr[2]) return 'YES';

  return 'NO';
};

console.log(solution(6, 7, 11)); // yes
console.log(solution(13, 33, 17)); // no

//? 영상 풀이
const solution2 = (a, b, c) => {
  let answer = 'YES',
    max;
  let sum = a + b + c;

  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;

  if (sum - max <= max) answer = 'NO';

  return answer;
};

console.log(solution2(6, 7, 11)); // yes
console.log(solution2(13, 33, 17)); // no
