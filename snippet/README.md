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

## Prime number check

## reference

- [snippet - inpa](https://inpa.tistory.com/category/Snippet/JS%20%EC%8A%A4%EB%8B%88%ED%8E%AB)
