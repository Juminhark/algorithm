//? 문제 : 저주의 숫자 3

//? 3의 배수와 숫자 3을 사용하지 않을 때,
//? 10진법 정수 n에 대응하는 숫자를 return

const solution = (n) => {
    let count = 0;
    let answer = 0;

    const not_3 = (n) => {
        if( n % 3 === 0) return true
        else {
            let tmp = n.toString().split('')
            for(let e of tmp) {
                if( e === '3') return true
            }
        }

        return false
    }

    
    while(count < n) {
        count++
        answer++

        while(not_3(answer)) answer++
    }

    return answer;
}

console.log(solution(10))