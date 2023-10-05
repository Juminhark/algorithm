//? 최대 부분 증가수열(LIS : Longest Increasing Subsequence)

//? N개의 자연수로 이루어진 수열이 주어졌을 때,
//? 그 중 가장 길게 증가하는(작은 수에서 큰수로) 원소들의 집합을 찾는 프로그램을 작성
//? [2,7,5,8,6,4,7,12,3] => [2,5,6,7,12]

//* dy[i] : arr의 i번째 숫자가 증가수열의 마지막 숫자
//* dy[i] : arr[0 ~ i-1]이 arr[i]보다 작은값중 dy[0 ~ i-1] 최대값 + 1

const solution = (arr) => {
  let answer = 0;
  let dy = Array.from({ length: arr.length }, () => 0);

  dy[0] = 1;
  for (let i = 1; i < arr.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && dy[j] > max) {
        max = dy[j];
      }
    }
    dy[i] = max + 1;
    console.log(dy);
    answer = Math.max(answer, dy[i]);
  }

  return answer;
};

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr)); // 4
arr = [2, 7, 5, 8, 6, 4, 7, 12, 3];
// console.log(solution(arr)); // 5
