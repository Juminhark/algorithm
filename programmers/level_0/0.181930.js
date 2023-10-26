// https://school.programmers.co.kr/learn/courses/30/lessons/181930

//? 문제 : 주사위 게임 2
// 주사위를 굴려 얻은 숫자 a, b, c
// 모두 다르면 a + b + c
// 같은 2개가 있으면 (a + b + c) * (a^2 + b^2 + c^2)
// 3개가 같으면 (a + b + c) * (a^2 + b^2 + c^2) * (a^3 + b^3 + c^3)

// Math.pow / swith case

const solution = (a, b, c) => {
  let result = new Set([a, b, c]);

  switch (result.size) {
    case 1:
      return (
        (a + b + c) *
        (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)) *
        (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3))
      );
    case 2:
      return (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
    case 3:
    case 1:
      return a + b + c;
  }
};

console.log(solution(2, 6, 1));
console.log(solution(5, 3, 3));
console.log(solution(4, 4, 4));
