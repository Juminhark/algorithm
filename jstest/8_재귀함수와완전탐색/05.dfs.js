//? 합이 같은 부분집합 (DFS : 아마존 인터뷰)

//? N개의 원소로 구성된 자연수 집합이 주어지면,
//? 이 집합을 두개의 부분집합으로 나누었을 때,
//? 두 부분집합으 ㅣ원소의 합이 서로 같은 경우 YES, 같지않으면 NO 출력
//? 둘로 나뉘는 두 부분집합은 서로소 집합, 두 집합을 합하면 원래의 집합
//? {1,3,5,6,7,10} => {1,3,5,7} = {6, 10}

//! 내 풀이
const solution = (arr) => {
  let answer = 'NO';

  const DFS = (n, subsetA, subsetB) => {
    if (n === arr.length) {
      let sumA = subsetA.reduce((a, b) => a + b, 0);
      let sumB = subsetB.reduce((a, b) => a + b, 0);

      if (sumA === sumB) {
        console.log('subsetA', subsetA);
        console.log('subsetB', subsetB);

        answer = 'YES';
        return;
      }
    } else {
      let a = arr[n];
      DFS(n + 1, [...subsetA, a], subsetB);
      DFS(n + 1, subsetA, [...subsetB, a]);
    }
  };

  DFS(0, [], []);

  return answer;
};

let arr = [1, 3, 5, 6, 7, 10];
// console.log(solution(arr));

//? 영상 풀이
const solution2 = (arr) => {
  let answer = 'NO',
    flag = 0;
  let total = arr.reduce((a, b) => a + b, 0);
  let n = arr.length;

  const DFS = (L, sum) => {
    if (flag === 1) return;
    if (L === n) {
      if (total - sum === sum) {
        answer = 'YES';
        flag - 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  };

  DFS(0, 0);
  return answer;
};

arr = [1, 3, 5, 6, 7, 10];
console.log(solution2(arr));
