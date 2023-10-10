# 기본문제풀이

## 전개구문(spread syntax)

- 배열이나 문자열과 같이 반복 가능한 문자를 0개 이상의 인수(함수로 호출할 경우) 또는 요소(배열의 리터럴의 경우)로 확장하여, 0개 이상의 키-값의 쌍으로 객체 확장

```js
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

// 함수호출 : 인수
console.log(sum(...numbers));

// spread syntax를 사용하지 않을 때
console.log(sum.apply(null, numbers));

// 배열 리터럴과 문자열
console.log([...numbers, '4', '5', '6']);
```

## Parameters vs Arguments

- 매개변수(Parameters)는 함수 선언의 변수
- 인수(Arguments)는 함수로 보내는 실제 값, 실제 데이터

```js
funtion sundEmail(from, to) { // from, to : Parameters
  ...
}

sendEmail('me', 'you'); // 'me', 'you' : Arguments
```

## for in / for of

```js
let arr = [6, 5, 1, 3, 11];

for (const a in arr) {
  console.log(typeof a + ' ' + a);
}

// string 0
// string 1
// string 2
// string 3
// string 4

for (const a of arr) {
  console.log(typeof a + ' ' + a);
}

// number 6
// number 5
// number 1
// number 3
// number 11
```

## 정렬

- arr.sort()

```js
let arr = [123, 121, 110, 151, 144, 99];

//? callback함수 정의 없으면 문자 기준 정렬
console.log(arr.sort()); // [ 110, 121, 123, 144, 151, 99 ]
console.log(arr.sort((a, b) => a - b)); // [ 99, 110, 121, 123, 144, 151 ]

//? 오름차순 : 작은것부터 큰것으로 정렬
console.log(arr.sort((a, b) => a - b));

//? 내림차순 : 큰것부터 작은것으로 정렬
console.log(arr.sort((a, b) => b - a));
```

## Math.function

```js
//? Math.ceil() : 올림
console.log(Math.ceil(7.04)); // 8

//? Math.floor() : 내림
console.log(Math.floor(7.04)); // 7

//? Math.round() : 반올림
console.log(Math.round(7.04)); // 7
console.log(Math.round(7.54)); // 8

//? Math.sqrt(x) : 제곱근
console.log(Math.sqrt(4)); // 2
```

## Reference

- [spread syntax](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [매개변수(Parameters)와 인수(Arguments)의 차이점](https://youtube.com/shorts/w2BBfkZQ47I?feature=share)
