## hash

- 해쉬는 key-value 쌍으로 데이터를 저장하는 자료구조

### 카카오

- level 1. 키패드 누르기 : keypad.js
- level 2. 수식 최대화 : maximize.js

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
```

- padStart() : function

```sh
str.padStart(targetLength, [padString])

targetLength : 목표 문자열 길이.
padString[Optional] : 현재 문자열에 채워넣을 다른 문자열. 기본값은 " "

console.log('ab'.padStart(5))   // "   ab"
console.log('ab'.padStart(5, "#"))   // "###ab"
```
