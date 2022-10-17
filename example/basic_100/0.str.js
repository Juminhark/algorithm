//? 문제 : 특정 문자 제거하기

const solution = (my_string, letter) => {

    let answer = [...my_string]

    while(answer.includes(letter)){
        answer.splice(answer.indexOf(letter) , 1)
    }

    return answer;
}

console.log(solution('abcdefg', 'g'))

// split
const solution2 = (my_string, letter) => {
    const answer = my_string.split(letter).join('')
    return answer;
}

// reg
const solution3 = (my_string, letter) => {
    let reg = new RegExp(letter, 'g');
    return my_string.replace(reg, '');
}

// filter
const solution4 = (my_string, letter) => {
    return my_string.split("").filter((v) => v!==letter).join("")
}
