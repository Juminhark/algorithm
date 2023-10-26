// https://school.programmers.co.kr/learn/courses/30/lessons/181933

//? 문제 : flag에 따라 자른 값 변환하기
// flag : true -> a + b, flag : false -> a - b

const solution = (a, b, flag) => (flag ? a + b : a - b);

console.log(solution(-4, 7, true));
console.log(solution(-4, 7, false));
