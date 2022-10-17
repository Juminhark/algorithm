//? 문제 : 연속된 수의 합

//? 연속된 정수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return

const solution = (num, total) => {
    let answer = [];
    
    // num = 1 : x             :  x
    // num = 2 : x x+1         : 2x + 1
    // num = 3 : x x+1 x+2     : 3x + 1 + 2
    // num = 4 : x x+1 x+2 x+3 : 4x + 1 + 2 + 3
    
    const DFS = (n, x) => {
        if(n === num) {
            let min = (total - x) / n
            let count = 0;
            while(count < n) {
                answer.push(min + count)
                count++
            }
            return answer
        } else {
            DFS(n + 1, x + n)
        }
    }
    
    DFS(1, 0)
    
    return answer;
  }
  
  console.log(solution(3,12))
  console.log(solution(5,15))
  console.log(solution(4,14))