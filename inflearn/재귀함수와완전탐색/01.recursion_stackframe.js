//? 문제 : 재귀함수

//? 자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지 출력

const solution = (n) => {
  const DFS = (L) => {
    if (L === 0) return;
    else {
      console.log(L);
      DFS(L - 1);
    }
  };

  DFS(n);
};

solution(3);

//? 아래는 거꾸로 출력됨 => function stack에 의해 실행순서가 바뀐다
const solution2 = (n) => {
  const DFS = (L) => {
    if (L === 0) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  };

  DFS(n);
};

solution2(3);
