# [programmers 문제](https://school.programmers.co.kr/learn/challenges?order=recent&languages=javascript)

```js
// dopa = "life is limited";
// Q1: 앞에서 3개의 문자열을 뽑아내라.
// Q2: 거꾸로 해서 출력하라
// Q3: 거꾸로 한다음 그 이후에 dopa!!를 추가하라

const dopa = 'life is limited';

const arrayDopa = dopa.split(' ');

//! 원본배열 회손없이 reverse
const reverse = [...arrayDopa].reverse();
const stringReverse = reverse.join(' ');

// const reverseDopa = reverse.push('dopa!!');
//! return 4

reverse.push('dopa!!');
const stringReverseDopa = reverse.join(' ');

console.log(arrayDopa);
console.log(stringReverse);
console.log(stringReverseDopa);

function solution(id_list, report, k) {
  const answer = new Array(id_list.length).fill(0);

  const report_list = {};

  id_list.map((user) => {
    report_list[user] = [];
  });

  report.map((el) => {
    const [user_id, report_id] = el.split(' ');
    if (!report_list[report_id].includes(user_id)) {
      report_list[report_id].push(user_id);
    }
  });

  for (const key in report_list) {
    if (report_list[key].length >= k) {
      report_list[key].map((user) => {
        answer[id_list.indexOf(user)] += 1;
      });
    }
  }

  return answer;
}

console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2
  )
);

const solution = (a, b) => {
  let bb = new Set();

  // 인수 분해
  for (let i = 2; i < Math.sqrt(b); i++) {
    if (b % i === 0) {
      bb.add(i);
      bb.add(b / i);
    }
  }

  for (let i of bb) {
    if (a % i === 0) {
      bb.delete(i);
      a = a / i;
    } else {
      for (let e = 2; e < i; e++) {
        if (i % e === 0) {
          bb.delete(i);
        }
      }
    }
  }

  console.log(bb);

  for (let e of bb) {
    if (e !== 2 && e !== 5) return 2;
  }

  return 1;
};

// https://mathbang.net/200
// https://velog.io/@loocia1910/javascript%EC%97%90%EC%84%9C-%EC%86%8C%EC%88%98Prime-number-%EA%B5%AC%ED%95%98%EA%B8%B0

// 아스키코드
// https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=diceworld&logNo=220175224345

// 인수분해

// https://datalabbit.tistory.com/m/42
// combination : 조합
// 순서 상관없는
// nCk = n! / k! (n - k)!

// permutation : 순열
// 순서 상관있는
// nPk = n! / (n - k)!

// factorial
const factorial = (n) => {
  if (n > 1) {
    return BigInt(n) * factorial(n - 1);
  } else {
    return BigInt(1);
  }
};
console.log(factorial(5, 1));

let arr = [1, 2, 3];

while (arr.length) {
  console.log(arr);
  arr.shift();
}

console.log([123].length);

console.log(BigInt(1));
```
