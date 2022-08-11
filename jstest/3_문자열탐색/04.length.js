//? 문제 : 문자거리 * 오래걸렸음

// 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력
// ex) teachermode e => 1 0 1 2 1 0 1 2 2 1 0

//! 내 풀이
const solution = (str, t) => {
  let regexp = new RegExp(t, 'g');
  //* 정규식안에 변수 넣는 방법
  let answer = str.replace(regexp, 0).split('');
  let len = str.length;

  for (let i = 0; i < len; i++) {
    // 찾을 수
    let num = i + 1;
    for (let j = 0; j < len; j++) {
      // 검색할 영역
      if (Number(answer[j]) === i) {
        if (j - 1 >= 0 && isNaN(Number(answer[j - 1]))) answer[j - 1] = num;
        if (j + 1 <= len - 1 && isNaN(Number(answer[j + 1])))
          answer[j + 1] = num;
      }
    }
  }

  return answer.join(' ');
};

let str = 'teachermode';
console.log(solution(str, 'e'));

const solution2 = (s, t) => {
  let answer = [];
  let p = 1000;

  // 왼쪽으로 한번 훑고 오른쪽으로 한번 훑고
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }

  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }

  return answer;
};

console.log(solution2(str, 'e'));
