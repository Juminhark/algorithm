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

### O(sqrt(n)) : square root **time**

# [7 JS data structures](https://www.educative.io/blog/javascript-data-structures)

## What are data structures

- 높은 수준의 데이터 구조는 수정, 탐색, 접근을 보다 쉽게 해주는 데이터 저장 및 구성 기술입니다.
- 데이터 구조는 데이터 수집 방법, 데이터에 접근하는데 사용할수 있는 기능 및 데이터 간의 관계를 결정합니다.
- 데이터 구조는 운영 체제에서 기본 바닐라 코드, 인공 지능에 이르기까지 컴퓨터 과학 및 프로그래밍의 거의 모든 영역에서 사용됩니다.

- 데이터 구조는 우리가 다음과 같은것들이 가능하게합니다.

  - 1. 대규모의 자료집합의 관리 및 활용
  - 2. 데이터베이스에서 특정한 데이터 탐색
  - 3. 특정 프로그램에 맞는 설계 알고리즘
  - 4. 사용자들의 여러 요청을 한 번에 처리
  - 5. 데이터 처리 단순화 및 속도 향상

- 데이터 구조는 효율적인 실제적인 문제 해결에 필수적이다.
- 무엇보다 우리가 데이터를 구성하는 방식은 성능과 유용성에 많은 영향을 미칩니다.
- 실제로 대부분의 최고 기업은 데이터 구조에 대한 강력한 이해를 필요로합니다.
- 이러한 기술은 당신이 당신의 데이터를 효과적으로 관리하는 방법을 이해하는지를 증명합니다.
- 코딩 인터뷰를 깨부실려하는 사람은 누구나 데이터 구조 숙달을 필요로 한다.

- JavaScript에는 기본(원시) 및 비 기본(원시) 데이터 구조가 있습니다.
- 기본 데이터 구조 및 데이터 유형은 프로그래밍 언어에 기본으로 제공됩니다.
- 여기에는 boolean, null, number, string, 기타등등이 포함된다.
- 기본이 아닌 데이터 구조는 프로그래밍 언어가 아니라 프로그래머에 의해 정의됩니다.
- 여기에는 선형 데이터 구조, 정적 데이터 구조, queue 및 linked-list와 같은 동적 데이터 구조가 포함됩니다.

- 선형 : linked-list, stack, queue
- 비선형 : tree, graph

## 7 JavaScript data structures you need to know

- 1. Array

  - 모든 데이터 구조 중 가장 기본적인 배열은 나중에 사용할 수 있도록 데이터를 메모리에 저장합니다.
  - 각 배열에는 생성시 결정된 고정 된 수의 셀이 있으며 각 셀에는 데이터를 선택하는 데 사용되는 해당 숫자 인덱스가 있습니다.
  - 배열를 사용하고 싶을 때마다 원하는 인덱스 만 있으면되고 그 안의 모든 데이터에 접근 할 수 있습니다.
  - 장점 : 복잡한 데이터 구조를위한 기본 구성 요소로서 생성 및 사용이 간단
  - 단점 : 고정크기, 비효율적인 분류, 값을 삽입 / 삭제하거나 다시 정렬하는 데 많은 비용이 듭니다.
  - 활용 : 기본적인 spreadsheets 에서 사용하거나, 해시 테이블과 같은 복잡한 구조 내에서 사용.

- 2. 3. Stack & Queues

  - 둘다 순차적 구조
  - Stack : LIFO(Last In First Out) : 후입선출 : 나중에 들어온것이 먼저 나간다
  - Queue : FIFO(First In First OUT) : 선입선출 : 먼저 들어온것이 먼저 나간다
  - 장점 : 동적 크기, 낮은 런타임
  - 단점 : 가장오래된, 가장 최근 요소만 검색할수있다.
  - 활용 : 한번에 1가지 처리를할때 처리 대상의 우선순위가 있는경우

- 4. Linked List

  - 메모리에서 물리적 배치를 사용하지 않는 데이터 구조.
  - 즉, Linked List는 색인이나 위치가 아닌 참조 시스템을 사용합니다.
  - 요소는 다음 노드에 대한 포인터를 포함하는 노드에 저장되며 모든 노드가 링크 될 때까지 반복됩니다.
  - 이 시스템을 사용하면 재구성 할 필요없이 항목을 효율적으로 삽입하고 제거 할 수 있습니다.
  - 장점 : 새로운 요소의 효율적인 삽입 및 제거, array 재구성보다 덜 복잡
  - 단점 : 배열보다 더 많은 메모리를 사용,특정 요소를 검색하는 데 비효율적, 목록을 뒤로 탐색하는 것은 비효율적
  - 활용 : 알 수없는 위치에서 데이터를 연속적으로 빠르게 추가 및 제거해야 할 때 가장 적합

- 5. Trees

  - Trees는 계층 구조를 나타내는 데 특화된 또 다른 관계 기반 데이터 구조입니다.
  - Linked List와 마찬가지로 노드에는 데이터 요소와 직접 노드와의 관계를 표시하는 포인터가 모두 포함됩니다.
  - 각 트리에는 다른 모든 노드가 분기되는 "루트"노드가 있습니다.
  - 루트에는 "하위 노드"라고하는 바로 아래에있는 모든 요소에 대한 참조가 포함됩니다.
  - 이것은 각 자식 노드와 함께 더 많은 자식 노드로 분기됩니다.
  - 연결된 자식 노드가있는 노드를 내부 노드라고하며 자식 노드가없는 노드는 외부 노드라고합니다.
  - 일반적인 유형의 트리는 저장된 데이터를 쉽게 검색하는 데 사용되는 binary search tree 입니다.
  - 이러한 검색 작업은 검색 기간이 노드 수가 아니라 트리 아래의 수준 수에 따라 달라 지므로 매우 효율적입니다.

- 6. Graphs

  - 관계 기반 데이터 구조.
  - 그래프에서 호출되는 각 노드 또는 정점에는 제목 (A, B, C 등), 내부에 포함 된 값 및 다른 정점과의 링크 목록(edges))이 있습니다.
  - 관계 : Undirected(양방통행), Directed(방향성)
  - 처음에는 시각화하기 어렵지만, 이 구조는 회로에서 훈련 네트워크에 이르기까지 관계 차트를 텍스트 형식으로 전달하는 데 매우 중요합니다.

- vertex(정점) 혹은 node, edge(간선)
- adjacent vertex(인접정점) : edge로 연결된 vertex
- degree(차수-등급-계급)
  - 1.  undirected graph 에서는 연결된 edge의 수
  - 2.  directed graph 에서는 vertex 기준.
    - in-degree : 입력차수 : vertex가 방향의 대상이 되는 edge의 수
    - out-degree : 출력차수 : vertex가 시작의 대상이 되는 edge의 수
- cycle : vertex가 경로의 출발임과 동시에 도착의 대상이 될 경우
- complete graph : 모든 vertex가 서로 direct하게 adjacent vertex 인 경우

- **weighted graph** : edge에 가중치가 존재할경우

- 장점 : 텍스트를 통해 시각적으로 빠르게 전달, 많은 정보를 포함하고 있는 관계형 구조를 표현해야하는 주제에 적합
- 단점 : 높은 수준에서는 텍스트를 이미지화 하기 어렵다.
- 활용 : 네트워크 표현

- 7. Hash Tables (Map)
