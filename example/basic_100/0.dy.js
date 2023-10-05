//? 문제 : 겹치는 선분의 길이

//? 빨간색, 초록색, 파란색 선분의 x좌표의 시작과 끝이 주어질 때,
//? 두개 이상의 선분이 겹치는 부분의 길이를 return

const solution = (lines) => {
    let answer = 0;
    let dy = Array.from({length : 200}, () => 0)

    for(let e of lines) {

        let [start, end] = e.sort()
        start += 100
        end += 100
        
        while(start < end){
            dy[start]++
            start++
        }
    }

    dy.forEach((e) => {
        if(e > 1) answer++
    })

    // answer = dy.filter(e => e >1 ).length

    return answer
}

console.log(solution([[1, -1], [1, 3], [9, 3]]))