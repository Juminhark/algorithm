// 1 1 2 3 5 8 13 21


const fibo = (n) => {
    return n === 1 || n ===2 ? 1 : fibo(n-2) + fibo(n-1)
}

// bottom-up
const solution = (n) => {
    let answer;
    let dy = Array(n).fill(0);

    // 기저 상태
    dy[1] = 1
    dy[2] = 1

    // 점화식
    // dy[i] = dy[i-2] + dy[i-1]

    for(let i = 3; i<= n; i++) {
        dy[i] = dy[i-2] + dy[i-1]        
    }

    answer = dy[n]

    return answer
}

// top-down
const fibo_recursion = (n) => {
    let answer;
    let dy = Array(n).fill(0)

    const DFS = (n) => {
        if(n < 3) dy[n] = 1
        else {
            dy[n] = DFS(n-2) + DFS(n-1);
        }

        return dy[n]
    }

    answer = DFS(n)

    return answer
}

console.log(fibo_recursion(8)) // 21