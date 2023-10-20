# Algorithm(알고리즘) : Data Processing within a finite amount of apace and time

- 알고리즘의 키 포인트는
- 1. Big-O Notation for Input Size : 주어진 데이터에 따른 Big-O 변화
- 2. Space & Time Complexity : 공간, 시간 복잡도
- 3. Data Structure : 이용하는 자료구조의 종류

## 구성

- [inflearn 강의](inflearn)
- Big-O
- dp

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

## Reference

- [검색 알고리즘 기초개념 - 노마드코더](https://www.youtube.com/watch?v=WjIlVlmmNqs)
- [javascript challanges series - john-smilga](https://github.com/john-smilga/javascript-challanges-series/tree/main/challanges)
- [Binary Search Trees - beiatrix](https://www.youtube.com/watch?v=6JeuJRqKJrI)
- [이코테 2021 - 동빈나](https://youtube.com/playlist?list=PLRx0vPvlEmdAghTr5mXQxGpHjWqSz0dgC)
