const solution = (arr) => {
  let answer = [];
  let tmp = [];
  let lenx = arr.length; // 3
  let leny = arr[0].length; // 4

  // 모든 시험에서
  for (let i = 0; i < lenx; i++) {
    for (let j = 0; j < leny - 1; j++) {
      for (let k = j + 1; k < leny; k++) {
        if (arr[i][j] > arr[i][k]) tmp.push([j, k]);
      }
    }
  }

  for (let i = 0; i < tmp.length; i++) {
    let a = tmp[i];
    let count = 1;
    for (let j = i + 1; j < tmp.length; j++) {
      if (a[0] === tmp[j][0] && a[1] === tmp[j][1]) {
        count++;
      }
    }
    console.log(count);
    if (count === 3) answer.push(a);
  }

  return answer;
};

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
