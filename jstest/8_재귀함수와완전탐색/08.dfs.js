//? 문제 : 중복순열 구하기(다중 for문과 재귀의 차이점)

//? 1부터 N까지 번호가 적힌 구슬.
//? 중복을 허락하여 M번을 뽑아 일렬로 나열하는 방법을 모두 출력

//! 내 풀이
const solution = (n, m) => {
  let answer = [];

  const DFS = (i, tmp) => {
    if (i === m) {
      console.log(tmp);
      answer.push(tmp);
      return;
    } else {
      // 분기점에서 참조주소를 갈라주어야한다
      for (let k = 0; k < n; k++) {
        let arr = [...tmp];
        arr[i] = k + 1;
        DFS(i + 1, arr);
      }
    }
  };

  DFS(0, []);

  return answer.length;
};
// console.log(solution(3, 2));

//? 영상 풀이 - 얕은 복사 vs 깊은 복사 => slice()
const solution2 = (n, m) => {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);

  const DFS = (L) => {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  };

  DFS(0);

  return answer;
};

console.log(solution2(3, 2));
