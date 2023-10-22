// https://school.programmers.co.kr/learn/courses/30/lessons/120896

//? 문제 : 한 번만 등장한 문자

//* 내 풀이
const solution = (s) => {
  let answer = [];
  let str = s.split('');
  let len = str.length;

  // continue , label
  first: for (let i = 0; i < len; i++) {
    let e = str[i];
    for (let j = 0; j < len; j++) {
      if (i === j) continue;
      if (e === str[j]) continue first;
    }
    answer.push(e);
  }

  // sort() https://hianna.tistory.com/409
  return answer.sort().join('');
};

console.log(solution('abcabcadc')); // d
console.log(solution('abdc')); // abcd

//* 다른 사람 풀이 : lastIndexOf()
const solution2 = (s) => {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join('');
};

console.log(solution2('abcabcadc')); // d
console.log(solution2('abdc')); // abcd
