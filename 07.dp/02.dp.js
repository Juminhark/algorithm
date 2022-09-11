//? 문제 : 개미 전사

//? 개미 전사는 일직선으로 이어져있는 메뚜기 마을의 창고를 습격
//? 각 식량 창고에는 정해진 수의 식량창고를 선택하여 약탈
//? 인접창고가 습격되면 메뚜기가 감지. 2칸 이상 떨어진 창고를 선택하여 약탈할떄
//? 얻을수 있는 가장 많은 식량을 return

//* 1. 최적부분구조(Optimal Substructure) : 작은문제의 답을 모아 큰문제를 해결
//* f(i) : i 까지의 최적부분
//* 2. 중복되는 부분(Overlapping Subproblem) : 동일한 작은 문제 반복
//* f(i) 와 f(i-1) 중 더 큰수를 찾는 행동을 반복

// [1,3,1,5]
// f(0) = 1, f(1) = 3, f(2) = 3, f(4)= 8

// f(i) = max[f(i-1), f(i-2) + k(i)]
// f(i) : i번째 까지 식량창고의 최적의 해
// k(i) : i번째 식량창고에 있는 식량의 양

const solution = (arr) => {
    // 식량창고의 개수
    let n = arr.length;
  
    // DP Table
    let dy = Array(100).fill(0);
    // DP - BottomUp
    dy[0] = arr[0];
    dy[1] = Math.max(arr[0], arr[1]);
    for (let i = 2; i < n; i++) {
        dy[i] = Math.max(dy[i - 1], dy[i - 2] + arr[i]);
    }
  
    return dy[n - 1];
  };

  
  //! DP는 점화식을 세우는것이 가장 핵심이다.

console.log(solution([1, 3, 1, 5, 4, 4, 1, 4, 4])); // 16
console.log(solution([1, 2, 3, 4, 5])); // 9


