//? 문제 : 공유기 설치

//? N개의 집이 수직선상에 있다.
//? C개의 공유기를 설치 할 때, 가장 인접한 두 공유기 사이의 거리를 최대
// N = 5, C = 3, arr = [1,2,8,4,9]

const solution = (n, c, arr) => {
  let answer;

  arr.sort((a, b) => a - b);

  let left = arr[1] - arr[0];
  let right = arr[arr.length - 1] - arr[0];

  console.log(arr);
  console.log(left, right);

  const set = (arr, distance) => {
    let count = 1;
    let ep = arr[0];

    for (let x of arr) {
      if (x - ep >= distance) {
        count++;
        ep = x;
      }
    }

    return count;
  };

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (set(arr, mid) >= c) {
      answer = mid;
      left = mid + 1;
    } else right = mid - 1;
  }

  return answer;
};

let arr = [1, 2, 8, 4, 9];
console.log(solution(5, 3, arr));

//* 1. 공유기 사이 거리를 x로 설정
//* 2. 공유기를 C개 이상 설치 할수 있다 => 여유가 있다.
//* 3. x보다 짧은 거리는 볼 필요 없이 거리를 늘려 최대값 확인
