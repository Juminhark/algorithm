# Big-O 표기법

- Mathematical notation that describes algorithm efficiency : 알고리즘의 효율성을 묘사하는 수학적 표기법
- Time & Space complexity : 시간 & 공간 복잡도
- Describes the growth rate of algorithms : 알고리즘의 성장률(입력 크기가 커짐에 따라 알고리즘의 비용이 증가하는 속도) - 실제 러닝타임의 표시 보다는 data나 user의 증가율에 따른 알고리즘의 성능을 예측하는것.

- 처리속도의 증가율을 고려하기 때문에 상수값을 제외한 가장 큰 차수로 표기.

## O(1) : constant time

```ts
const one = (arr) => {
  return arr[0] == 0 ? true : false;
};
```

- 입력데이터의 크기와 상관없이 언제나 일정한 시간 소요.
- 데이터가 증가함에 따라 성능의 차이가 없다.

## O(n) : liner(1차) time

```ts
const n = (arr) => {
  for (let unit of arr) {
    console.log(unit);
  }
};
```

- 입력데이터의 크기와 비례해서 처리 시간이 증가

## O(n^2) : quadratic(2차) time

```ts
const n = (arr) => {
  for (let i of arr) {
    for (let j of arr) {
      console.log(i + j);
    }
  }
};
```

## O(nm) : quadratic(2차) time

```ts
const n = (arr1, arr2) => {
  for (let i of arr1) {
    for (let j of arr2) {
      console.log(i + j);
    }
  }
};
```

## O(n^3) : polynomial(다항) / cubic(직육면체 - 3차원) time

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

## O(2^n) : exponential(지수) time

```ts
const fibonacci = (n) => {
  if (n <= 0) return 0;
  return n == 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
};
```

## O(m^n) : exponential(지수) time

## O(log n ) : log time

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

## O(sqrt(n)) : square root **time**

## reference

- [마론미밍 - 알고리즘 빅오 표기법](<(https://malonmiming.tistory.com/104)>)
