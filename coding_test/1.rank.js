//? 문제 : 등수 매기기

//* 두 배열 비교

const solution = (score) => {
    let answer = Array.from({length : score.length} , () => 0)
    let scores = score.map((e) => {
        let [a,b] = e
        return (a + b) / 2
})

    let tmp = scores.slice().sort((a,b)=> b-a);
    let count = 0; // 등수
    let before = Number.MAX_SAFE_INTEGER; // 이전점수
    let be_count = 0; // 같은점수 인원

    for(let i of tmp) {
        if(i < before) {
            count++
            count += be_count
            be_count = 0
            before = i
        } else {
            be_count++
        }
        let index = scores.indexOf(i) 
       answer[index] = count
       scores[index] = -1
        
    }

    return answer;
}

// console.log(solution([[80, 70], [70, 80], [30, 50], [90, 100], [100, 90], [100, 100], [10, 30]]))
console.log(solution([[1, 2], [1, 1], [1, 1]]))


const solution2 = (score) => {
    let avg = score.map((e) => e[0] + e[1] / 2)
    let sorted = avg.slice().sort((a,b) => b - a)

    return avg.map((e) => sorted.indexOf(e) + 1)
}