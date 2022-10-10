const solution = (polynomial) => {
    let answer = '';
    let count = [0,0];
    let str = polynomial.split(" + ")

    str.forEach((e) => {
        if(e.includes('x')) {

            if(e === 'x'){
                count[0] += 1
            } else if(e === '-x') {
                count[0] += -1
            } else {
                let tmp = e.replace('x','')
                count[0] += Number(tmp)
            }       

        } else {
            count[1] += Number(e) 
        }
    })

    console.log(count)

    if(count[0] === 1){
        answer += 'x'
    } else if (count[0] > 1) {
        answer += count[0]
        answer += 'x'
    }

    if(count[0] === 0 && count[1] > 0){
        answer += count[1]
    } else if(count[1] > 0){
        answer += ' + '
        answer += count[1]
    }
    
    return answer;
}

console.log(solution("x + 7 + -x"))
// console.log(solution("x + x + x"))
