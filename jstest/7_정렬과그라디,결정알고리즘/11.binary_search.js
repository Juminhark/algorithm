//? 문제 : 뮤직비디오(결정 알고리즘) : 어렵다 이해필요

// N개의 곡을 M개의 DVD로 나눌 때, DVD의 용량이 최소가 되는 경우를 출력
// 곡은 연속 되어야한다

//! 내 풀이
const solution = (m, arr) => {
  let answer = 0;

  arr.sort((a, b) => b - a);

  for (let x = 0; x < arr.length - 1; x++) {
    answer += arr[x];
    let max = answer;
    let count = 1;
    for (let y = x + 1; y < arr.length - 1; y++) {
      if (max - arr[y] < 0) {
        count++;
        max = answer - arr[y];
      } else max -= arr[y];
    }

    if (count < m) return answer;
  }

  return answer;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(solution(3, arr));

//! 주어진 배열의 값이 일정하게 증가하는 값이 아니였다면
//! sort()에서 주어진 배열의 순서가 어긋하게 되어 조건을 충족할수없다

//? 영상 풀이
const count = (songs, capacity) => {
  let cnt = 1,
    sum = 0;
  for (let x of songs) {
    if (sum + x > capacity) {
      cnt++;
      sum = x;
    } else sum += x;
  }

  return cnt;
};

const solution2 = (m, songs) => {
  let answer;
  let lt = Math.max(...songs);
  let rt = songs.reduce((a, b) => a + b, 0);
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else lt = mid + 1;
  }

  return answer;
};
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution2(3, arr));
