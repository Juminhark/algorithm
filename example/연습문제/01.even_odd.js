//? 문제 : 짝수와 홀수

//? 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환

const solution = (num) => {
    let answer = 'Even'

    if(num % 2 !== 0) answer = 'Odd'
    
    return answer;
}

console.log(solution(4))
console.log(solution(3))
console.log(solution(0))
console.log(solution(-1))