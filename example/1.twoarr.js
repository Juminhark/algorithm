//? 문제 : 숫자 짝꿍

//? 두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 <= k <= 9)들을 이용하여
//? 만들수 있는 가장 큰 정수를 return

//* 두 배열 비교

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



const solution2 = (X, Y) => {
    const commonNumbers = [...new Set(X.split(''))].filter((number) => {
        return Y.includes(number);
    }).sort((a, b) => b - a)

    if (!commonNumbers.length) return '-1';

    if (!Number(commonNumbers[0])) return '0';

    return commonNumbers.map((number) => {
        const Xcount = X.split('').reduce((count, Xnumber) => {
            if (Xnumber === number) return count += 1;

            return count;
        }, 0)

        const Ycount = Y.split('').reduce((count, Ynumber) => {
            if (Ynumber === number) return count += 1;

            return count;
        }, 0)        

        return Xcount <= Ycount ? number.repeat(Xcount) : number.repeat(Ycount)
    }).join('')
}