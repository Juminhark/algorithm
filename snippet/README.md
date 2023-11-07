## Prime number check

- [0.120852.js](../../programmers/level_0/0.120852.js)

```js
// 첫번쨰
const check = (i) => {
  for (let e = 2; e < i; e++) {
    if (i % e === 0) return false;
  }

  return true;
};

const isPrime = (n) => {
  return n === 1 ? true : check(n);
};

// 두번쨰
const isPrime2 = (n) => {
  // Prime number : 1과 자기 자신만으로만 나눌수 있는 수
  // 2 ~ n-1까지중에 나눠지는게 있으면 소수
  let num = 2;
  while (num < n) {
    if (n % num === 0) return false;
    num++;
  }

  return true;
};

//? 다른사람꺼 : Math.sqrt()
const isPrime3 = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
```

## [중앙 찾기](https://velog.io/@gagaeun/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%A4%91%EC%95%99%EA%B0%92-%EA%B5%AC%ED%95%98%EA%B8%B0)

```js
// 홀수, 짝수 경우 다르겠지만
const mid = Math.floor(arr.length / 2);
```

## 정량화 하기

```js
let data = ['a', 'b', 'c', 'b', 'c', 'b', 'c', 'a'];

let hash = data.reduce((acc, cur) => {
  acc[cur] = acc[cur] ? ++acc[cur] : 1;
  return acc;
}, {});

console.log(hash); // { a: 2, b: 3, c: 3 }

let numbers = [1, 2, 3, 3, 3, 4];

//! 이건 안된다
let obj = numbers.reduce((acc, cur) => {
  acc[cur] = acc[cur] ? acc[cur]++ : 1;
  return acc;
}, {});
console.log(obj); // { '1': 1, '2': 1, '3': 1, '4': 1 }

//?  ++acc[cur] 으로 해야하는 이유?
```

## 진수 변환

`toString()` 과 `paeseInt()` 를 이용해 숫자 진수들을 변환할수 있다

## 문자열 iterale 접근

- 0.120834.js

```js
'asdnlksad'[2]; // d

for (let e of 'hell') console.log(e);
```

## 이중 NOT(!!)

- 0.120866.js

```js
!!true; // !!truthy는 true를 반환합니다.
!!{}; // !!truthy는 true를 반환합니다. 임의의 object는 참 같은 객체입니다.
!!new Boolean(false); // .valueOf()에서 false값을 가지는 불리언 객체도요!
!!false; // !!falsy는 false를 반환합니다.
!!''; // !!falsy는 false를 반환합니다.
!!Boolean(false); // !!falsy는 false를 반환합니다.
```

## 두 점 사이의 거리 (math)

- 0.120890.js

## reference

- [snippet - inpa](https://inpa.tistory.com/category/Snippet/JS%20%EC%8A%A4%EB%8B%88%ED%8E%AB)
