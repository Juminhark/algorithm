# Data Structure(자료구조) : Efficient access and modification

- 자료구조는 서비스나 어플리케이션에서 필요한 데이터를 메모리에 어떻게 구조적으로 정리해서 담아두고 관리하고
- 최종적으로 가장 효율적인 방식으로 필요한 데이터에 빠르게 접근하고 필요한 수정 삽입 삭제를 할수있도록 도와준다

- 효율적으로 data를 다루기 위해 기능에 적합한 자료구조를 쓰는것이 중요.
- 대표적으로 배열, 단일연결리스트, 이중연결 리스트, 스택, 해쉬테이블 등.

- 자료구조의 키 포인트는
- 1. Order : 자료구조안에서 데이터의 순서 보장 여부
- 2. Unique : 중복된 데이터 값을 가질수 있는지 여부
- 3. Search : 검색의 효율성
- 4. Modification : 데이터 수정의 효율성
-

# Algorithm(알고리즘) : Data Processing within a finite amount of apace and time

- 알고리즘의 키 포인트는
- 1. Big-O Notation for Input Size : 주어진 데이터에 따른 Big-O 변화
- 2. Space & Time Complexity : 공간, 시간 복잡도
- 3. Data Structure : 이용하는 자료구조의 종류

### function

- eval() : function

```sh
console.log(eval('2 + 2'));             // 4
console.log(eval(new String('2 + 2'))); // [String: '2 + 2']

// primitive type 의 string만 변환
// object type은 안된다.

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

- !isNaN(string) : 주어진 값이 NaN 인지 판별

```sh
console.log(!isNaN('1')); // true
console.log(!isNaN('9')); // true
console.log(!isNaN('s')); // false
console.log(!isNaN('#')); // false

//* NaN : Not a Number
// 1. 숫자로서 읽을 수 없음 (parseInt("어쩌구"), Number(undefined))
// 2. 결과가 허수인 수학 계산식 (Math.sqrt(-1))
// 3. 피연산자가 NaN (7 ** NaN)
// 4. 정의할 수 없는 계산식 (0 * Infinity)
// 5. 문자열을 포함하면서 덧셈이 아닌 계산식 ("가" / 3)
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

### 정규 표현식

```ts
// 생성자
let re = /ab+c/;
re = new RegExp('ab+c');

// ^ : 입력의 시작부분을 대응
re = /^A/;

let t = 'An E';
re.test(t); // true : A 와 대응
t = 'an A';
re.test(t); // false

// $ : 입력의 끝부분과 대응
re = /t$/;

t = 'eater';
re.test(t); // false
t = 'eat';
re.test(t); // true : t와 대응

//  * : 앞의 표현식의 0번 이상 반복되는 부분과 대응
re = /bo*/;

t = 'A ghost booooed';
re.test(t); // true : boooo 와 대응
t = 'A bird warbled';
re.test(t); // true : b 와 대응
t = 'A goat grunted';
re.test(t); // false

// + : 앞의 표현식의 1번 이상 반복되는 부분과 대응
re = /a+/;

t = 'candy';
re.test(t); // true : a 와 대응
t = 'caaaaaaandy';
re.test(t); // true : 모든 a 와 대응
t = 'cndy';
re.test(t); // false
```

## javascript 자료형

- 동적 타이핑 : 변수 타입을 미리 선언하지않아도된다.

```ts
let foo = 42; // foo는 Number형
foo = 'bar'; // foo는 String형
foo = true; // foo는 Boolean형
```

- data type
  - 최신 ECMAScript 표준 : 7가지 자료형
    - Primitive : 기본자료형
      - Boolean
      - Null
      - Undefined
      - Number
      - String
      - Symbol (ES6에 추가)
    - Object

## 컴퓨터와 수학

### 대수학의 수체계

```ts

                                복소수(Complex number)
                                      |
            -------------------------------------------------------
            |                                                     |
허수(imaginary number)                                     실수 (real number)
                                                                  |
                                        -------------------------------------------------------
                                        |                                                     |
                                 무리수(irrational number)                          유리수(rational number)
                                                                                              |
                                                                    --------------------------------------------------------
                                                                    |                                                      |
                                                             정수가 아닌 유리수                                       정수(integer)
                                                                    |                                                      |
                                                        -------------------------                       -------------------------------------
                                                        |                       |                       |                  |                |
                                                    유한소수                  순환소수                음(negative)의 정수    0        양(positive)의 정수
                                                                                                                                  자연수(natural number)
```

- 자연수 : 1,2,3,4, ...
- 음의 정수 : -1,-2,-3, ...
- 유한소수 : 1/4, 3/10, ...
- 순환소수 : 2/3, 3/7, ...
- 무리수 : √2, √3, π(파이), ...
- 허수 : i
- 복소수 : a + bi
- 대수학 기본 정리 = 복소수를 계수로 갖는 1차 이상의 다항식은, 반드시 복소수 근을 갖는다.
- => 복소수 이상의 수의 확장은 없다.

### 컴퓨터의 수체계

- int 는 정수형을 처리하기 위한 변수.
- 과거 컴퓨터는 cpu는 16bit(2byte)씩 연산
- 현재 cpu는 34bit(4byte), 64bit(8byte) 를 이용
- cpu의 연산을 최적화하기 위한 data크기를 설정한것이 변수단위

- 32bit cpu의 처리 비트수.
- char: 8비트 정수형
- short: 16비트 정수형
- int: 32비트 정수형
- long long: 64비트 정수형

### 비트 연산자

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

## [Big-O 표기법](https://malonmiming.tistory.com/104)

- Mathematical notation that describes algorithm efficiency : 알고리즘의 효율성을 묘사하는 수학적 표기법
- Time & Space complexity : 시간 & 공간 복잡도
- Describes the growth rate of algorithms : 알고리즘의 성장률(입력 크기가 커짐에 따라 알고리즘의 비용이 증가하는 속도) - 실제 러닝타임의 표시 보다는 data나 user의 증가율에 따른 알고리즘의 성능을 예측하는것.

- 처리속도의 증가율을 고려하기 때문에 상수값을 제외한 가장 큰 차수로 표기.

### O(1) : constant time

```ts
const one = (arr) => {
	return arr[0] == 0 ? true : false;
};
```

- 입력데이터의 크기와 상관없이 언제나 일정한 시간 소요.
- 데이터가 증가함에 따라 성능의 차이가 없다.

### O(n) : liner(1차) time

```ts
const n = (arr) => {
	for (let unit of arr) {
		console.log(unit);
	}
};
```

- 입력데이터의 크기와 비례해서 처리 시간이 증가

### O(n^2) : quadratic(2차) time

```ts
const n = (arr) => {
	for (let i of arr) {
		for (let j of arr) {
			console.log(i + j);
		}
	}
};
```

### O(nm) : quadratic(2차) time

```ts
const n = (arr1, arr2) => {
	for (let i of arr1) {
		for (let j of arr2) {
			console.log(i + j);
		}
	}
};
```

### O(n^3) : polynomial(다항) / cubic(직육면체 - 3차원) time

```ts
const n = (arr) => {
	for (let i of arr) {
		for (let j of arr) {
			for (let k of arr) {
				console.log(i + j + k);
			}
		}
	}
};
```

### O(2^n) : exponential(지수) time

```ts
const fibonacci = (n) => {
	if (n <= 0) return 0;
	return n == 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
};
```

### O(m^n) : exponential(지수) time

### O(log n ) : log time

```ts
const binarySearch = (k, arr, s, e) => {
	// 오름차순 배열안에서 찾을 구간의 첫번째 값 s, 마지막 값 e
	if (s > e) return -1;
	let m = (s + e) / 2; // 중간 값
	if (arr[m] == k) return m;
	else if (arr[m] > k) return binarySearch(k, arr, s, m - 1);
	else return binarySearch(k, arr, m + 1, e);
};
```

### O(sqrt(n)) : square root time
