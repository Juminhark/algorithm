//? 문제 : 랜선 자르기

//? K개의 랜선이 있다
//? 랜선을 동일한 길이로 잘라 총 N개 이상의 랜선을 만들어야 하는 문제
//? 300cm 랜선에서 140cm 랜선 두개를 자르면 나머지 20cm 랜선은 버린다.
//? 조건을 만적하는 최대 랜선 길이는?

const count = (arr, mid) => {
  let count = 0;

  for (let x of arr) {
    count += Math.floor(x / mid);
  }

  return count;
};

const solution = (n, arr) => {
  let answer;

  arr.sort((a, b) => a - b);

  let lt = 1;
  let rt = arr[arr.length - 1];

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);

    if (count(arr, mid) >= n) {
      answer = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }

  //* count가 많다는것은 더 긴 길이로 자른것이 답이 될 가능성이 있다
  //* => lt = mid + 1;

  return answer;
};

let arr = [802, 743, 457, 539];
console.log(solution(11, arr));

//? 풀이과정
//? 1. left = 0, right = 랜선의 최대 길이
//? 2. 중간값(mid) 길이로 랜선이 몇개 나오는지 계산한다
//? 3. 중간겂으로 랜선을 N개 이상 만들 수
//? 있다면 left = mid + 1
//? 없다면 right = mid - 1
