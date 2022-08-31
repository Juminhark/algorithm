//? 문제 : 장난꾸러기 현수

//? N명의 학생. 반 번호를 정하기 위해 운동장에서 키가 작은 학생부터 키순으로 세웠을 때,
//? 현수가 자신보다 키가 작은 짝꿍과 위치를 바꾸고 번호가 부여되었다.
//? 키 정보를 주어질 때, 현수가 받은번호와 현수 짝꿍이 받은 번호를 출력

//! 내 풀이
const solution = (arr) => {
  let answer = [];

  let tmp = [...arr];
  tmp.sort((a, b) => a - b);

  for (let el in arr) {
    if (arr[el] !== tmp[el]) answer.push(el);
  }

  return [Number(answer[0]) + 1, Number(answer[1]) + 1];
};

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
// console.log(solution(arr));

arr = [120, 130, 150, 150, 130, 150];
// console.log(solution(arr));

//? 영상 풀이
const solution2 = (arr) => {
  let answer = [];
  let sortArr = arr.slice();

  //* array.slice() : 배열안에 원시형값만 있으면 깊은 복사, 참조형이 있으며 얕은복사

  sortArr.sort((a, b) => a - b);
  console.log(sortArr);

  //* sort() : callback 함수정의 없으는 문자 기준 정렬

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i]) answer.push(i + 1);
  }

  return answer;
};

arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
// console.log(solution2(arr));

arr = [120, 130, 150, 150, 130, 150];
console.log(solution2(arr));
