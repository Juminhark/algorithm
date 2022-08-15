//? 문제 : 두 배열 합치기(Two Pointers Algorithm)

// 오름차순 정렬된 두 배열을 오름차순으로 합쳐 출력

//! 내 풀이
const solution = (arr1, arr2) => {
  // //* Array.concat()
  //  concat() , sort() => 시간복잡도 over
  // let answer = arr1.concat(arr2);
  // return answer.sort((a, b) => a - b);

  let answer = [];
  let num = arr1.length + arr2.length;

  while (num) {
    let x = arr1.shift();
    let y = arr2.shift();

    if (isNaN(x)) answer.push(y);
    else if (isNaN(y)) answer.push(x);
    else if (x <= y) {
      answer.push(x);
      arr2.unshift(y);
    } else {
      answer.push(y);
      arr1.unshift(x);
    }

    num--;
  }

  return answer;
};

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));

//? 영상 풀이 : sort() : nlogn 시작복잡도 => Two Pointers Algorithm으로 풀이
const solution2 = (arr1, arr2) => {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);

  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }

  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);

  return answer;
};

a = [1, 3, 5];
b = [2, 3, 6, 7, 9];
console.log(solution2(a, b));
