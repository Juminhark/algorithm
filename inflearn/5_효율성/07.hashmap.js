//? 문제 : 아나그램(Hash)

// 길아가 같은두개의 단어가 주어지면 아나그램인지 판별하여 출력
// 대소문자 구분

//! 내 풀이
const solution = (str1, str2) => {
  let answer = 'YES';
  let sH = new Map();

  // 첫번째 문자열 map으로
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  // console.log(sH);

  // 두번째 문자열을 map에서 제거
  for (let x of str2) {
    if (sH.has(x)) {
      if (sH.get(x) === 0) return 'NO';
      else sH.set(x, sH.get(x) - 1);
    } else return 'NO';
  }
  // console.log(sH);

  // 제거후 남아있는것이 있다면 NO
  for (let [key, val] of sH) {
    if (val !== 0) return 'NO';
  }

  return answer;
};

let a = 'AbaAeCe';
let b = 'baeeACA';
// console.log(solution(a, b)); // YES;
a = 'abaCC';
b = 'Caaab';
// console.log(solution(a, b)); // NO

//* const map1 = new Map()
//* map1.set()
//* map1.get()
//* map1.has()
//* map1.delete()
//* map1.size

//? 영상 풀이
const solution2 = (str1, str2) => {
  let answer = 'YES';
  let sH = new Map();

  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }

  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) === 0) return 'NO';
    sH.set(x, sH.get(x) - 1);
  }

  return answer;
};
a = 'AbaAeCe';
b = 'baeeACA';
console.log(solution2(a, b)); // YES;
a = 'abaCC';
b = 'Caaab';
console.log(solution2(a, b)); // NO
