# 완전탐색(Exhaustive Search)

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

## 1. 자릿수의 합

- Object => key : value
- - key 값은 숫자 불가
- [Array.forEach() : 각 요소에 callback function 실행](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [Array.reduce() : 각 요소에 callback function 실행하고 하나의 값을 반환](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [Object.keys() : key 값을 요소로 갖는 배열 반환](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [Spread syntax](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

## Reference

- [완전탐색](https://hongjw1938.tistory.com/78)
