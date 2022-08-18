//? 문제 : LRU(Least Recntly Used) : 삽입정렬응용

// 캐시 크기 : S, 작업의 개수 N

const solution = (s, n, arr) => {
  let answer = Array.from({ length: s }).fill(0);

  for (let x of arr) {
    if (answer.includes(x)) {
      // Cache Hit
      let a = answer.indexOf(x);
      for (let i = a; i > 0; i--) {
        [answer[i], answer[i - 1]] = [answer[i - 1], answer[i]];
      }
    } else {
      // Cache Miss
      for (let i = s - 1; i > 0; i--) {
        answer[i] = answer[i - 1];
      }
      answer[0] = x;
    }
    console.log(answer);
  }

  return answer;
};

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
// console.log(solution(5, 9, arr));

const solution2 = (size, arr) => {
  let answer = Array.from({ length: size }, () => 0);

  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
    if (pos === -1) {
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });

  return answer;
};

// console.log(solution2(5, arr));

const solution3 = (size, arr) => {
  let answer = Array.from({ length: size }, () => 0);

  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
    if (pos === -1) {
      answer.unshift(x);
      if (answer.length > size) answer.pop();
    } else {
      answer.splice(pos, 1);
      answer.unshift(x);
    }
    console.log(answer);
  });

  return answer;
};

console.log(solution3(5, arr));
