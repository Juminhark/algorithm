//? 문제 : 폰켓몬

//? 연구실에 있는 N마리 포켓몬중에서 N/2마리를 가져가도 된다
//? 같은 종류의 폰켓몬은 같은 번호를 가질 때,
//? 가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아
//? 그 때의 폰켓몬 종류 번호의 개수를 return

//? N마리 포켓몬의 배열 nums는 항상 짝수로 주어진다

const solution = (nums) => {
  let len = nums.length / 2;

  let hash_list = nums.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? ++acc[cur] : 1;
    return acc;
  }, {});

  let hash_len = Object.keys(hash_list).length;

  let answer = len <= hash_len ? len : hash_len;

  return answer;
};

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));
