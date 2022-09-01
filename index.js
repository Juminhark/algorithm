//* DFS / BFS : 그래프 탐색 알고리즘

//* Recursive Function : 재귀 함수
// 자기 자신을 다시 호출하는 함수를 의미한다.

const recursive = (i) => {
    // 종료 조건 암시
if (i == 5) {
    return;
}

console.log(i, '재귀 함수에서 ', i + 1, '번째 재귀함수를 호출');
recursive(i + 1);
console.log(i, '번째 재귀함수 종료');
};
  
recursive(1);

//? 문제 : 팩토리얼 구현
// n! = 1 x 2 x 3 x ... x (n-1) x n
// 0! = 1! = 1

// 반복문으로 구현
const factorial_iterative = (num) => {
let result = 1;

for (let i = 1; i < num + 1; i++) {
    result *= i;
}

return result;
};
console.log(factorial_iterative(4));

// 점화식을 이용해 재귀적으로 구현
const factorial_recursive = (num) => {
if (num > 1) {
    return num * factorial_recursive(num - 1);
} else {
    return 1;
}
};

console.log(factorial_recursive(4));