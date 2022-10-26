//? 문제 : 중복된 문자 제거

const solution = (my_string) => {
    let answer = new Set();
    
    my_string.split('').forEach((e) => {
        answer.add(e)
    })

    return [...answer].join('')
}

console.log(solution('people'))


function solution(my_string) {
    return [...new Set(my_string)].join('');
}
