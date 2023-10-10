//? 문제 : 이분검색(Binary Search)

// 입력된 N의 숫자를 오름차순으로 정렬한 다음
// N개의 수중 한개의 수인 M이 주어지면
// 이분검색으로 M이 정렬된 상태에서 몇번 째에 있는지 출력

//* 순차탐색은 시간복잡도 : O(N)
//* 이분검색은 시간복잡도 : O(logN)

//* Left Point, Right Point
//* mid = Math.floor((lt + rt) / 2);

//! 내 풀이

const solution = (m, arr) => {
  let answer = 0;

  arr.sort((a, b) => a - b);
  console.log(arr);
  answer = arr.indexOf(m) + 1;

  return answer;
};

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
// console.log(solution(32, arr));

//? 영상 풀이
const solution2 = (target, arr) => {
  let answer;
  arr.sort((a, b) => a - b);

  let lt = 0,
    rt = arr.length - 1;
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) rt = mid - 1;
    else lt = mid + 1;
  }

  return answer;
};

arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution2(32, arr));
