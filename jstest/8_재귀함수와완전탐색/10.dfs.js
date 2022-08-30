//? 문제 : 순열 구하기 (permutation)

//? 10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로
//? 나열하는 방법을 모두 출력

//! 내 풀이
const solution = (m, arr) => {
  let answer = [];

  const DFS = (i, arr, insert) => {
    if (i === m) {
      answer.push(insert);
    } else {
      for (let x = 0; x < arr.length; x++) {
        let arrTmp = arr.slice();
        let insertTmp = insert.slice();
        insertTmp.push(arrTmp[x]);
        arrTmp.splice(x, 1);
        DFS(i + 1, arrTmp, insertTmp);
      }
    }
  };

  DFS(0, arr, []);

  return answer;
};

let arr = [3, 6, 9];
console.log(solution(2, arr));

//? 영상 풀이
const solution2 = (m, arr) => {
  let answer = [];
  const n = arr.length;
  let ch = Array.from({ length: n }, () => 0);
  let tmp = Array.from({ length: m }, () => 0);

  const DFS = (L) => {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  };

  DFS(0);

  return answer;
};

arr = [3, 6, 9];
console.log(solution2(2, arr));

//* 순열과 조합은 방법을 외워야 한다!
