//? 문제 : 외계행성의 나이

//? a : 0, b : 1, ... , j : 9 일 때,
//? 주어진 age을 바꾸어 return

//? ASCII : 아스키코드
// console.log('c'.charCodeAt())
// String.fromCharCode()

const solution = (age) => {
    let answer = '';
    
    age.toString().split('').forEach((e) => {
        answer = answer + String.fromCharCode(e.charCodeAt() + 49)
    })
    
    return answer;
}

console.log(solution(23))


const solution2 = (age) => {
    let char = 'abcdefghij'
    return Array.from(age.toString()).map(t => char[+t]).join('');
}