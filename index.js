
//? 소인수분해

// const solution = (n) =>{

//     // n보다 작은 수에서 소수찾기
//     // 찾은 소수로 n을 나눌수 있는지 확인
//     let answer = []
//     let prime = []

//     for(let i = 2; i < n; i++){
        
//     }
// }


// console.log(solution(12))


const solution = (my_string) => {
    let answer = new Set();
    
    my_string.split('').forEach((e) => {
        answer.add(e)
    })

    return [...answer].join('')
}

console.log(solution('people'))