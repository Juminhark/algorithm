//? 문제 : 마구간 정하기(결정 알고리즘)

// N개의 마구간은 x1, x2,..., xN의 좌표를 가지며, 좌표가 중복되지 않는다
// 가장 가까운 두말의 거리가 최대가 되도록 C마리의 말을 각 마구간에 넣을 때
// 가장 가까운 두말의 거리를 출력

//* 1,2,4,8,9로 정렬되고
//* 두말사이 거리는 lt = 1, rt =9 보다 작다
//* mid = Math.floor((1+9) /2) = 5 : 두말사이의 최소거리로 추정해놓고
//* arr[0] = 1에 첫번째 말이 들어가 있을 때
//* arr[1] = 2, arr[2] = 4 : 최소거리 불만족
//* arr[3] = 8에 두번째 말이 들어가나
//* arr[4] = 9에 세번째 말이 들어갈수없으므로
//* rt = mid - 1 = 5 - 1  = 4
//* mid = Math.floor((1 + 4)/2) = 2

const solution = (c, arr) => {
  let answer, mid, ep, count;
  let lt = arr[1] - arr[0];
  let rt = arr[arr.length - 1] - arr[0];

  arr.sort((a, b) => a - b);

  while (lt <= rt) {
    count = 1;
    ep = arr[0];
    mid = Math.floor((lt + rt) / 2);

    for (let x of arr) {
      if (arr[x] - ep >= mid) {
        count++;
        ep = arr[x];
      }
    }

    //* +1 ,-1 을 하는 의미 여기가 햇갈린 포인트
    if (count >= c) lt = mid + 1;
    else rt = mid - 1;

    answer = mid;
  }

  return answer;
};

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr)); // 3

const count = (stable, dist) => {
  let cnt = 1,
    ep = stable[0];
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - ep >= dist) {
      cnt++;
      ep = stable[i];
    }
  }

  return cnt;
};

const solution2 = (c, stable) => {
  let answer;
  stable.sort((a, b) => a - b);
  let lt = 1;
  let rt = stable[stable.length - 1];

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }

  return answer;
};

arr = [1, 2, 8, 4, 9];
console.log(solution2(3, arr)); // 3
