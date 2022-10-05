//? 문제 : 다음에 올 숫자

//? 배열 common 요소들이 등차 또는 등비 수열일 때, 다음에 올 숫자를 return
//? [1,2,3,4] = 5
//? [2,4,8] => 16

const solution = (common) => {
  let answer = 0;
  let len = common.length;

  if (common[1] - common[0] === common[2] - common[1]) {
    answer = common[len - 1] + (common[1] - common[0]);
  } else {
    answer = common[len - 1] * (common[1] / common[0]);
  }

  return answer;
};

console.log(solution([1, 2, 3, 4]));
console.log(solution([2, 4, 8]));
