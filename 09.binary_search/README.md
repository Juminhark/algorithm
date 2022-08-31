## Binary Search

- 이진검색, 이진탐색, 이분검색, 이분탐색

- 정렬되어 있는 배열에서 특정 데이터를 찾기 위해 모든 데이터를 순차적으로 확인하는 대신 탐색 범위를 절반으로 줄여가며 찾는 탐색 방법

- 시간복잡도 : O(logN)

## 풀이 핵심

- 입력조건 범위에 0 ~ 10억 이면 이분탐색일 가능성이 매우 높다
- 구하려는 값이 무엇인가?
- target값과 mid값 을 비교 하여 left = mid +1, right = mid -1 으로 하는 조건

## 햇갈리는점

- 1. lt, rt 값을 어떻게 정할것인가?
- - 구하고자하는 값의 최소 값 : lt , 최대값 : rt
- 2. target값과 mid값을 비교하여 left, right에 mid값을 어떻게 반영할것인가?
- - target이 mid값보다 크면 left = mid + 1
- - target이 mid값보다 작으면 right = mid - 1

## [01.백준 1654](https://www.acmicpc.net/problem/1654)

## [02.백준 2343](https://www.acmicpc.net/problem/2343)

## [03.백준 2110](https://www.acmicpc.net/problem/2110)

## Reference

- [이진 검색 알고리즘 - 위키백과](https://ko.wikipedia.org/wiki/%EC%9D%B4%EC%A7%84_%EA%B2%80%EC%83%89_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)
- [이진 검색 문제풀이 - 천수환](https://www.youtube.com/watch?v=Wbhwlf4stfY)
