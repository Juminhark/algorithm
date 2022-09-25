//? 문제 : 자릿수 더하기

//? 자연수 N이 주어지면, N의 각 자릿수를 합을 구해서 출력
//? N = 123 => 1 + 2 + 3 = 6

const solution = (n) => {
    let answer = 0;
    while(n > 0) {
        answer += n % 10
        n = Math.floor(n / 10)
    }

    return answer
}

console.log(solution(123)) // 6
console.log(solution(987)) // 24