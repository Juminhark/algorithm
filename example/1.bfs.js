
//? 문제 : 삼총사

const solution = (number) => {
    let answer = 0;
    const len = number.length
    
    for(let a = 0; a < len -2; a++) {
        for(let b = a + 1; b < len -1; b++){
            for(let c = b + 1; c < len; c++){
                console.log(number[a] + number[b] + number[c])
            }
        } 
    }
    
    return answer;
}

console.log(solution([-2, 3, 0, 2, -5]))



/// bfs
function solution(number) {
    let result = 0;

    const combination = (current, start) => {
        if (current.length === 3) {
            result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
            return;
        }

        for (let i = start; i < number.length; i++) {
            combination([...current, number[i]], i + 1);
        }
    }
    combination([], 0);
    return result;
}