## 구현(implementation)

- 머릿속에 있는 알고리즘을 소스코드로 바꾸는 과정
- problem - thinking - solution

## 구현 유형

- 풀이를 떠올리는것은 쉽지만 소스코드로 옮기기 어려운 문제
- 1. 알고리즘은 간단한데 코드가 지나칠만큼 길어지는 문제
- 2. 실수 연산을 다루고 특정 소수점까지 출력해야하는 문제
- 3. 문자열을 특정한 기준에 따라서 끊어 처리하는 문제
- 4. 적절한 라이브러리를 찾아 사용해야하는 문제

- 시뮬레이션, 완전탐색 문제에서는 2차원 공간에서의 방향벡터가 자주 사용

```js
//  동, 서, 남, 북
let dx = [0, 0, 1, -1];
let dy = [1, -1, 0, 0];

for (let i = 0; i <= 3; i++) {
  nx = x + dx[i];
  ny = y + dy[i];
}
```
