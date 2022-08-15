//? 문제 : 모든 아나그램 찾기(Hash, Two Point, Sliding Window) : 중요 문제
//? 어려우니까 반복 풀이

// S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수 출력

const solution = (str1, str2) => {
  let answer = 0;
  let lt = 0;
  let sH = new Map();
  let tH = new Map();

  for (let x of str2) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  let tmp = [...str1].entries();

  for (let [rt, val] of tmp) {
    if (sH.size < 1) {
      if (sH.has(val)) sH.set(val, sH.get(val) + 1);
      else sH.set(val, 1);
    } else {
      if (sH.has(val)) sH.set(val, sH.get(val) + 1);
      else sH.set(val, 1);

      // console.log(tH);

      answer++;
      for (let [key, val] of sH) {
        // console.log(key);
        if (tH.get(key) !== 1) {
          answer--;
          break;
        }
      }
      sH.delete(tmp[lt++]);
    }
  }

  return answer;
};

let a = 'bacaAacba';
let b = 'abc';
// console.log(solution(a, b)); // 3

//* Array.entries()
//* 배열의 각 인덱스에 대한 키/값 쌍을 갖은 새로운 Array Iterator 객체를 반환

const compareMaps = (map1, map2) => {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
};

const solution2 = (s, t) => {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();

  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  // console.log(tH);

  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  // console.log(sH);

  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    if (compareMaps(sH, tH)) answer++;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }

  return answer;
};
console.log(solution2(a, b)); // 3
