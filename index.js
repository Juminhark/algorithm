<<<<<<< HEAD
const solution_for = (n) => {
  let answer;

  //* 0 1 2 3 ... n : n번째 인덱스를 활용하기 위해
  let dy = Array.from({ length: n + 1 }, () => 0);

  dy[1] = 1; //* 한 칸씩 1번
  dy[2] = 2; //* 한 칸씩 2번, 두 칸씩 1번

  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
    console.log(dy);
  }

  answer = dy[n];

  return answer;
};

console.log(solution_for(7)); // 21
=======

//? 소인수분해

// const solution = (n) =>{

//     // n보다 작은 수에서 소수찾기
//     // 찾은 소수로 n을 나눌수 있는지 확인
//     let answer = []
//     let prime = []

//     for(let i = 2; i < n; i++){
        
//     }
// }




console.log(solution(["meosseugi", "1234"], [["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]))
>>>>>>> 4b6a270149cb0acd0e7fe0465c558b200d35a24d
