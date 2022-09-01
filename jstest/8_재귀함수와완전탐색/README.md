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

## 순열(permutation) / 조합(combination)

- 순열 : 서로 다른 n개중에 r개를 선택하는 경우의 수 (순서 상관 있음)
- - nPr = n! / (n-r)!
- 조합 : 서로 다른 n개중에 r개를 선택하는 경우의 수 (순서 상관 없음)
- - nCr = n! / (n-r)! \* r!

## 순열 푸는방법

```js
// n개 중에 m개를 고를 때, 순서가 상관 있으면
const solution2 = (n, m, arr) => {
  // arr 에서 고른것을 체크
  let ch = Array.from({ length: n }, () => 0);

  // 고른것을 넣어 놓을 공간
  let tmp = Array.from({ length: m }, () => 0);

  const DFS = (L) => {
    // l은 깊이 즉, tmp의 index
    if (L === m) {
      // tmp 공간에 바꿔 가며 넣는거라 참조주소가 남아있으면 다 바뀜
      // 깊은 복사 필요
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  };

  DFS(0);
};

let arr = [3, 6, 9];
solution2(3, 2, arr);
```

## 조합의 성질

- nCr = nCn-r
- nCn = 1, nCo = 1
- nCr = n-1Cr + n-1Cr-1

## 조합푸는 방법

## 이항계수

## Rerference

- [stack frame - tcp school](http://www.tcpschool.com/c/c_memory_stackframe)
- [순열, 조합 공식 - 코딩팩토리](https://coding-factory.tistory.com/606)
- [조합의 성질 - 강쌤](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=vollollov&logNo=220919085017)
- [파스칼의 삼각형 - 자바실험실](https://javalab.org/pascals_triangle/)
