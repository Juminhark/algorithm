# Algorithm(알고리즘) : Data Processing within a finite amount of apace and time

- 알고리즘의 키 포인트는
- 1. Big-O Notation for Input Size : 주어진 데이터에 따른 Big-O 변화
- 2. Space & Time Complexity : 공간, 시간 복잡도
- 3. Data Structure : 이용하는 자료구조의 종류

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

## **exhaustive search (brute-force search) : 완전 탐색**

무차별 대입(brute-force) 의미로 문제해결에 가능한 모든 경우의 수를 열거하고 검사하는 알고리즘. 완전검색은 구현 하기 쉽고 솔루션이있는 경우 항상 찾을 수 있지만 비용은 후보 솔루션 수에 비례한다.

- Brute Force : for문과 if문을 이용하여 처음부터 끝까지 탐색
- 비트마스크(BitMask) : 정수를 이진수 형태로 표현하여 비트연산을 활용하는 방법
- 재귀함수
- 순열 : 서로 다른 n개의 원소에서 r개의 중복을 허용하지 않고 순서대로 늘어 놓은 수
- 백트래킹 : 현재상태에서 가능한 모든 후보군을 따라 들어가며 탐색
  - DFS(Depth First Search) : 깊이 우선 탐색
  - BFS(Breadth First Search) : 너비 우선 탐색
  - 최선우선탐색(Best First Search)

## **DP(Dynamic Programming) : 동적 계획법**

- 다이나믹 프로그래밍은 메모리를 적절히 수행 시간을 비약적으로 증가시키는 방법입니다.
- 다이나믹 프로그래밍의 구현은 일반적으로 두 가지 방식(탑다운, 바텀업)으로 구성됩니다
- 계산된 결과를 저장하여 같은 계산을 반복하지 않도록 하는것.
- 2가지를 만족하여야한다
  - 1. 최적부분구조(Optimal Substructure) : 작은문제의 답을 모아 큰문제를 해결
  - 2. 중복되는 부분(Overlapping Subproblem) : 동일한 작은 문제 반복

## Reference

- [검색 알고리즘 기초개념 - 노마드코더](https://www.youtube.com/watch?v=WjIlVlmmNqs)
- [javascript challanges series - john-smilga](https://github.com/john-smilga/javascript-challanges-series/tree/main/challanges)
- [Binary Search Trees - beiatrix](https://www.youtube.com/watch?v=6JeuJRqKJrI)
- [이코테 2021 - 동빈나](https://youtube.com/playlist?list=PLRx0vPvlEmdAghTr5mXQxGpHjWqSz0dgC)
