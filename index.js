const solution = (X, Y) => {
    let answer = [];
    let arr_x = X.split('').sort()
    let arr_y = Y.split('').sort()
    
    let count_x = 0;
    let count_y = 0;

    while(count_x < arr_x.length && count_y < arr_y.length){
        if(arr_x[count_x] === arr_y[count_y]) {
            answer.push(arr_x[count_x])
            count_x++;
            count_y++;
        } else {
            if(arr_x[count_x] < arr_y[count_y]) count_x++;
            else count_y++;
        }
    }
    
    
    if(answer.length === 0) return '-1'

    answer = answer.sort((a,b) => b-a).join('')

    if(Number(answer) === 0) return '0'

    return answer;
}

console.log(solution("100", "2345"))
console.log(solution("100", "203045"))
console.log(solution("100", "123450"))
console.log(solution("12321", "42531"))
console.log(solution("5525", "1255"))