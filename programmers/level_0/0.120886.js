// https://school.programmers.co.kr/learn/courses/30/lessons/120886

//? 문제 : A로 B 만들기

// 문자열 before 과 after 이 매개변수로 주어질 때,
// before의 순서를 바꾸어 after 를 만들수 있으면 1, 만들 수 없으면 0 을 return

//* 내 풀이
const solution = (before, after) => {
  let arr_before = before.split('').sort();
  let arr_after = after.split('').sort();
  const len = arr_before.length;

  for (let i = 0; i < len; i++) {
    if (arr_after[i] !== arr_before[i]) return 0;
  }

  return 1;
};

console.log(solution('olleh', 'hello'));

//* 다른 사람 풀이
const solution2 = (before, after) =>
  [...before].sort().join('') === [...after].sort().join('') ? 1 : 0;

console.log(solution2('olleh', 'hello'));
