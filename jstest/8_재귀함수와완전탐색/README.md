## 재귀함수와 완전탐색(DFS:깊이우선탐색)

## [Stack Frame](http://www.tcpschool.com/c/c_memory_stackframe)

- 메모리 스택 영역에 함수의 호출과 관계되는 지역변수와 매개변수가 저장되는 영역
- 함수가 호출되면 스택에는 함수의 매개변수, 호출이 끝난 뒤 돌아갈 반환 주소값, 함수에서 선언된 지역변수 등이 저장

## 01. recursion

- 재귀실행함수와 실행코드간의 위치에 따라
- Stack frame에 의해 전체 순서가 반전이 될수 있다

```js
const DFS = (L) => {
  if (L === 0) return;
  else {
    console.log(L);
    DFS(L - 1);
  }
};

const DFS = (L) => {
  if (L === 0) return;
  else {
    DFS(L - 1);
    console.log(L);
  }
};
```

## Rerference

- [stack frame - tcp school](http://www.tcpschool.com/c/c_memory_stackframe)
- [순열, 조합 공식 - 코딩팩토리](https://coding-factory.tistory.com/606)
