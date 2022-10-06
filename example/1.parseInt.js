//? 문제 : 문자열을 정수로 바꾸기

//? 문자열 s를 숫자로 변환한 결과를 반환

const solution = (s) => {
  return parseInt(s);
};

console.log(solution('-1234')); // -1234
console.log(solution('+1234')); // 1234
