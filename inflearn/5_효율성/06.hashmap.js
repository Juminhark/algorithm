//? 문제 : 학급 회장 (Hash)

// N명의 학생이 투표후 가장 많은 투표수를 획득한 학생 출력

const solution = (str) => {
  let answer = {};
  let tmp = str.split('');

  console.log(tmp);

  for (let i of tmp) {
    let a = Object.keys(answer).find((e) => e === i);

    if (typeof a !== 'string') {
      answer[i] = 1;
    } else {
      answer[i] = answer[i] + 1;
    }
  }

  let max = 0;
  let maxS;
  for (let i of Object.keys(answer)) {
    if (answer[i] > max) {
      max = answer[i];
      maxS = i;
    }
  }

  return maxS;
};

let s = 'BACBACCACCBDEDE';

// console.log(solution(s));

//? 영상 풀이
const solution2 = (s) => {
  let answer;
  let sH = new Map();

  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  // console.log(sH);
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    // console.log(key, val);
    if (val > max) {
      max = val;
      answer = key;
    }
  }

  return answer;
};

console.log(solution2(s));

//* [Object로 hash map형식을 사용하지 말것](https://betterprogramming.pub/stop-using-objects-as-hash-maps-in-javascript-9a272e85f6a8)
