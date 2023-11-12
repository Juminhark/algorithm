// https://school.programmers.co.kr/learn/courses/30/lessons/181926

//? 문제 : 수 조작하기1

// 'w' : n이 1 커집니다
// 's' : n이 1 작아집니다
// 'd' : n이 10 커집니다
// 'a' : n이 10 작아집니다

// 위 문자열의 모음 control의 앞에서부터 순서대로 문자에 따라 정수 n을 조작하여 return

const solution = (n, control) => {
  for (let s of control) {
    switch (s) {
      case 'w':
        n += 1;
        break;
      case 's':
        n -= 1;
        break;
      case 'd':
        n += 10;
        break;
      case 'a':
        n -= 10;
        break;
    }
  }

  return n;
};

console.log(solution(0, 'wsdawsdassw')); // -1

//* 다른 사람 풀이

const operations = {
  w: (n) => n + 1,
  s: (n) => n - 1,
  d: (n) => n + 10,
  a: (n) => n - 10,
};

const solution2 = (n, control) => {
  return [...control].reduce((acc, cur) => operations[cur](acc), n);
};

console.log(solution2(0, 'wsdawsdassw')); // -1
