# 기본문제풀이

## [전개구문(spread syntax)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

- 배열이나 문자열과 같이 반복 가능한 문자를 0개 이상의 인수(함수로 호출할 경우) 또는 요소(배열의 리터럴의 경우)로 확장하여, 0개 이상의 키-값의 쌍으로 객체 확장

```js
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

// 함수호출 : 인수
console.log(sum(...numbers));

console.log(sum.apply(null, numbers));

// 배열 리터럴과 문자열
console.log([...numbers, '4', '5', '6']);
```

## [Array.forEach()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

## [Array.map()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

## [Array.filter()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## [Array.reduce()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

## [String.replace()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

## [String.substring](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substring)

- sting객체의 시작인덱스부터 종료인덱스 전 까지 부분 문자열 반환

## [String.indexOf()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)

## [매개변수(Parameters)와 인수(Arguments)의 차이점](https://youtube.com/shorts/w2BBfkZQ47I?feature=share)

- 매개변수는 함수 선언의 변수
- 인수는 함수로 보내는 실제 값, 실제 데이터

```js
funtion sundEmail(from, to) { // from, to : Parameters
  ...
}

sendEmail('me', 'you'); // 'me', 'you' : Arguments
```
