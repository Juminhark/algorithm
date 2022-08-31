//? 문제 : 재귀함수를 이용한 이진수 출력

//? 10진수 N이 입력되면 재귀함수를 이용하여 2진수로 변환하여 출력

//! 내 풀이
const solution = (n) => {
  let answer = [];

  const recursion = (n) => {
    if (n !== 0) {
      answer.unshift(n % 2);
      recursion(Math.floor(n / 2));
    } else return;
  };

  recursion(n);

  return answer.join('');
};

// console.log(solution(11)); // 1011

//? 영상 풀이
const solution2 = (n) => {
  let answer = '';

  const DFS = (n) => {
    if (n === 0) return;
    else {
      DFS(Math.floor(n / 2));
      answer += String(n % 2);
    }
  };

  DFS(n);

  return answer;
};
console.log(solution2(11));
