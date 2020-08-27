## hash

- 해쉬는 key-value 쌍으로 데이터를 저장하는 자료구조

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

- split('') : 나누기
- slice("/") : 자르기

- !isNaN(string) : string 이 숫자이면 true

```sh
console.log(!isNaN('1'));
console.log(!isNaN('9'));
console.log(!isNaN('s'));
console.log(!isNaN('#'));
```

- Array.prototype.push() : 넣기
- Array.prototype.pop() : 빼기
