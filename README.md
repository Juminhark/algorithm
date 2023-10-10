# Algorithm(알고리즘) : Data Processing within a finite amount of apace and time

- 알고리즘의 키 포인트는
- 1. Big-O Notation for Input Size : 주어진 데이터에 따른 Big-O 변화
- 2. Space & Time Complexity : 공간, 시간 복잡도
- 3. Data Structure : 이용하는 자료구조의 종류

## 구성

- Big-O
- dp

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

## Reference

- [검색 알고리즘 기초개념 - 노마드코더](https://www.youtube.com/watch?v=WjIlVlmmNqs)
- [javascript challanges series - john-smilga](https://github.com/john-smilga/javascript-challanges-series/tree/main/challanges)
- [Binary Search Trees - beiatrix](https://www.youtube.com/watch?v=6JeuJRqKJrI)
- [이코테 2021 - 동빈나](https://youtube.com/playlist?list=PLRx0vPvlEmdAghTr5mXQxGpHjWqSz0dgC)
- [자바스크립트 알고리즘 문제풀이 입문 - 인프런](https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4/dashboard)
