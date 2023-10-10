//? 문제 : 이진트리 순회(DFS : 깊이우선탐색)

//    1
//  2   3
// 4 5 6 7

//? 전위순회 출력 : 1,2,4,5,3,6,7
//? 중위순회 출력 : 4,2,5,1,6,3,7
//? 후위순회 출력 : 4,5,2,6,7,3,1

//? 전위순회 : 부 - 왼 - 오
const solution = (v) => {
  let answer;

  const DFS = (v) => {
    if (v > 7) return;
    else {
      console.log(v);
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  };

  DFS(v);

  return answer;
};
console.log(solution(1));

//? 중위순회 : 왼 - 부 - 오
const solution2 = (v) => {
  let answer;

  const DFS = (v) => {
    if (v > 7) return;
    else {
      DFS(v * 2);
      console.log(v);
      DFS(v * 2 + 1);
    }
  };

  DFS(v);

  return answer;
};
console.log(solution2(1));

//? 후외순회 : 왼 - 오 - 부
const solution3 = (v) => {
  let answer;

  const DFS = (v) => {
    if (v > 7) return;
    else {
      DFS(v * 2);
      DFS(v * 2 + 1);
      console.log(v);
    }
  };

  DFS(v);

  return answer;
};
console.log(solution3(1));
