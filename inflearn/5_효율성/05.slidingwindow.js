//? 문제 : 최대매출(Sliding Window)

// N일동안의 매출기록중 연속된 K일동안의 최대 매출액

// K=3 , arr=[12, 14, 11 ,20, 25, 10, 20, 19, 13, 15]
// [11, 20, 25] => 56

const solution = (n, k, arr) => {
  let answer = 0;

  for (let x = 0; x <= n - k; x++) {
    let sum = 0;
    let check = []; //* 확인용
    for (let y = 0; y < k; y++) {
      sum += arr[x + y];
      check.push(arr[x + y]); //* 확인용
    }

    answer = Math.max(answer, sum);
    console.log(check); //* 확인용
  }

  return answer;
};

let arr = [12, 14, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(10, 3, arr));

//? 영상 풀이
//? 위 풀이는 이중for문으로 n^2 복잡도를 갖기 때문에 Sliding Window 활용
const solution2 = (k, arr) => {
  let answer,
    sum = 0;

  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }

  return answer;
};

console.log(solution2(3, arr));
