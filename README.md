## hash

- 해쉬는 key-value 쌍으로 데이터를 저장하는 자료구조
- 해시함수(hash function)는 임의의 길이의 데이터를 고정된 길이의 데이터로 매핑하는 함수입니다. 이 때 매핑 전 원래 데이터의 값을 키(key), 매핑 후 데이터의 값을 해시값(hash value), 매핑하는 과정을 해싱(hashing)이라고 합니다.

### 카카오

- 예선테스트. 직사각형 : rectangle.js
- level 1. 키패드 누르기 : keypad.js
- level 1. 비밀지도 : treasure_map.js
- level 1. 크레인 인형뽑기 게임 : crane_game.js
- level 1. 다트게임 : dart_game.js
- level 1. 실패율 : failure_rate.js
- level 2. 수식 최대화 : maximize.js
- level 2. 문자열 압축 : string_array.js

### !!

- eval() : function

```sh
console.log(eval('2 + 2'));             // 4
console.log(eval(new String('2 + 2'))); // [String: '2 + 2']

// primitive type 의 string만 변환
// object type은 안된다.

```

- 비트 연산자

```sh
// 비트 AND
// 피연산자를 비트로 바꿨을 때 각각 대응하는 비트가 모두 1이면 그 비트값에 1을 반환.
a & b

// 비트 OR
// 피연산자를 비트로 바꿨을 때 각각 대응하는 비트가 모두 1이거나 한 쪽이 1이면 1을 반환.
a | b

// 비트 XOR
// 피연산자를 비트로 바꿨을 때 대응하는 비트가 서로 다르면 1을 반환.
a ^ b

// 비트 NOT
// 피연산자의 반전된 값을 반환.
~ a

const a = 9;
const b = 30;

console.log(a.toString(2));					// 00001
console.log(b.toString(2)); 				// 11110
console.log((a | b).toString(2));  	// 11111
```

- padStart() : function

```sh
str.padStart(targetLength, [padString])

targetLength : 목표 문자열 길이.
padString[Optional] : 현재 문자열에 채워넣을 다른 문자열. 기본값은 " "

console.log('ab'.padStart(5))   // "   ab"
console.log('ab'.padStart(5, "#"))   // "###ab"
```

- Math.abs() : 절대값
- Math.pow() : 거듭제곱
- Math.sqrt() : 제곱근

```sh
// 거듭제곱 : Math.pow([대상 숫자], [거듭제곱 횟수]);
// 제곱근 : Math.sqrt([대상 숫자]);
console.log(Math.pow(2, 2));
console.log(Math.sqrt(4));
```

- !isNaN(string) : string 이 숫자이면 true

```sh
console.log(!isNaN('1'));
console.log(!isNaN('9'));
console.log(!isNaN('s'));
console.log(!isNaN('#'));
```

### **exhaustive search (brute-force search) : 완전 탐색**

무차별 대입(brute-force) 의미로 문제해결에 가능한 모든 경우의 수를 열거하고 검사하는 알고리즘. 완전검색은 구현 하기 쉽고 솔루션이있는 경우 항상 찾을 수 있지만 비용은 후보 솔루션 수에 비례한다.

- Brute Force : for문과 if문을 이용하여 처음부터 끝까지 탐색
- 비트마스크(BitMask) : 정수를 이진수 형태로 표현하여 비트연산을 활용하는 방법
- 재귀함수
- 순열 : 서로 다른 n개의 원소에서 r개의 중복을 허용하지 않고 순서대로 늘어 놓은 수
- 백트래킹 : 현재상태에서 가능한 모든 후보군을 따라 들어가며 탐색
  - DFS(Depth First Search) : 깊이 우선 탐색
  - BFS(Breadth First Search) : 너비 우선 탐색
  - 최선우선탐색(Best First Search)

### **DP(Dynamic Programming) : 동적 계획법**

- 다이나믹 프로그래밍은 메모리를 적절히 수행 시간을 비약적으로 증가시키는 방법입니다.
- 다이나믹 프로그래밍의 구현은 일반적으로 두 가지 방식(탑다운, 바텀업)으로 구성됩니다
- 계산된 결과를 저장하여 같은 계산을 반복하지 않도록 하는것.
- 2가지를 만족하여야한다
  - 1. 최적부분구조(Optimal Substructure) : 작은문제의 답을 모아 큰문제를 해결
  - 2. 중복되는 부분(Overlapping Subproblem) : 동일한 작은 문제 반복

### Object 와 Array

- Object : 객체

```ts
let zero = {
	// key : value
	name: { firstName: 'Zero', lastName: 'Cho' },
	// value : any,  () => 일 경우 method
	nameChange: (b) => {
		zero.name.lastName = b;
	},
	deleteLastName: () => {
		delete zero.name.lastName;
	},
};

let zeroOne = new zero();

console.log(zero.name);
zero.nameChange('onepiece');
console.log(zero.name);
zero.deleteLastName();
console.log(zero.name);
```

- Array : 배열

```ts
Array 생성자
new Array(2)
Array(k).fill(0); : 0으로 채워 넣은 배열

k x k 2중 배열
Array.from(Array(k), () => Array(k).fill(0));

let zero = ['Zero', 'Cho'];

console.log(zero[0]);
let zero = [
	['firstName', 'Zero'],
	['lastName', 'Cho'],
];

console.log(zero[1][1]);
```

### Array.function()

- arr.push() : 뒤에넣기
- arr.pop() : 뒤에빼기

- [arr.split()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split) : 문자열 나누기
- [arr.slice()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) : 복사본 반환
- [arr.splice()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) : 배열 요소 삭제, 교체, 새 요소 추가
- [arr.find()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [arr.filter()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) : callback 후 새로운 배열 생성
- [arr.reduce()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) : 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
- [arr.sort()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [arr.includes()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [arr.forEach()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

```sh
// - 오름차순
answerMap.sort(function (a, b) {
  return a - b;
}

- 내림차순
answerMap.sort(function (a, b) {
  return b - a;
}
```

- [arr.reduce()]()

- forEach, map
- Queue

- for...in

```ts
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
	console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
```
