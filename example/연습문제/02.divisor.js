//? 문제 : 약수의 합

//? 정수 n을 입력받아 n의 약수를 모두 더한 값을 출력

const solution = (n) => {
    let answer = 0;
    
    for(let i = 1; i * i <= n; i++){

        if(i * i === n){ answer += i;
        } else if( n % i === 0) {
            answer += i
            answer += n / i 
        }
    }

    return answer;
}

console.log(solution(12)) // 28
console.log(solution(5)) // 6
console.log(solution(16)) // 31