//? 문제 : 문자열 정렬하기(1)

const solution = (my_string) => {
    let answer = []
    let regexp = new RegExp(/[0-9]/,'i')
    
    for(let e of my_string) {
        if(regexp.test(e)) answer.push(Number(e))
    }
    
    return answer.sort();
}

console.log(solution("hi12392"))

function solution(my_string) {
    return my_string.match(/\d/g).sort((a, b) => a - b).map(n => Number(n));
}


// str.match(regexp)
// regexp.test