## 정렬과 그라디, 결정 알고리즘

## 정렬

### 01. 선택정렬(Selection sort)

- 1.  주어진 리스트 중에 최소값을 찾는다
- 2.  그 값을 맨 앞에 위치한 값과 교체한다
- 3.  맨 처음 위치를 뺀 나머지 리스트를 같은 방법으로 교체한다
- 시간 복잡도 : Θ(n^2)

```js
const selection_sort = (arr) => {
  let minIndex;
  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
};

let arr = [13, 5, 11, 7, 23, 15];
console.log(selection_sort(arr)); // [ 5, 7, 11, 13, 15, 23 ]
```

### 02.버블정렬(Bubble sort)

- 서로 인접한 두원소를 검사하여 정렬
- 시간복잡도 : Θ(n^2)

```js
const bubble_sort = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};
let arr = [5, 4, 6, 1, 3, 2];
console.log(bubble_sort(arr)); // [ 1, 2, 3, 4, 5, 6 ]
```

### 04.삽입정렬(Insertion sort)

```js
const insert = (array, rightIndex, value) => {
  let i;
  for (i = rightIndex; i >= 0 && array[i] > value; i--) {
    array[i + 1] = array[i];
  }
  array[i + 1] = value;
};

//? 삽입 정렬 구현
const insertion_sort = (array) => {
  for (let i = 1; i < array.length; i++) {
    insert(array, i - 1, array[i]);
  }

  return array;
};

let arr = [11, 7, 5, 6, 10, 9];
console.log(insertion_sort(arr));
```

## 탐욕(Greedy algorithm)

## 결정

## 두 값을 바꾸는 방법 : 구조 분해 할당

```js
let arr = [1, 2, 3, 4, 5];

// 기존방법
let tmp = arr[0];
arr[0] = arr[4];
arr[4] = tmp;
console.log(arr); // [ 5, 2, 3, 4, 1 ]

// 최신방법
[arr[0], arr[4]] = [arr[4], arr[0]];
console.log(arr); // [ 1, 2, 3, 4, 5 ]
```

## 거듭제곱 표현

```js
// 2의 3승 표현

2 ^ 3; // 틀린표현 -> Bitwise XOR

2 ** 3; // 맞는표현

// 왜 ^를 거듭제곱으로 알고있었지?
```

## Array.slice()

- 배열안에 다른 배열이 존재하면 얕은 복사가 되지만 다른배열이 없을경우 깊은 복사가 된다

# Reference

- [Bitwise XOR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)
- [XOR 비트연산](https://ko.khanacademy.org/computing/computer-science/cryptography/ciphers/a/xor-bitwise-operation)
- [갚은 복사 vs 얕은 복사](https://zzang9ha.tistory.com/372)
