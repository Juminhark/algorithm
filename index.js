function solution(today, terms, privacies) {
    var answer = [];
    let termsObj = {}
    let todayArr = today.split('.')

    for(let a of terms) {
        let tmp = a.split(' ');
        termsObj[tmp[0]] = tmp[1]
        }

    for(let i in privacies) {
        let tmp = privacies[i].split(' ')
        
        let compare = tmp[0].split('.')
        
        compare[1] = String(Number(compare[1]) + Number(termsObj[tmp[1]]))
        
        if(compare[1] > 12) {
            compare[0] = String(Number(compare[0]) + 1)
            compare[1] = '0' + String(Number(compare[1] - 12))
        } else if (compare[1] < 10) {
            compare[1] = '0' + compare[1]
        }
        
        console.log(todayArr)
        console.log(compare)
        if(Number(todayArr[0]) > Number(compare[0])) answer.push(Number(i) + 1)
        else if( Number(todayArr[0]) === Number(compare[0]) && Number(todayArr[1]) > Number(compare[1])) answer.push(Number(i) + 1)
        else if( Number(todayArr[0]) === Number(compare[0]) && Number(todayArr[1]) === Number(compare[1]) && Number(todayArr[2]) >= Number(compare[2]))answer.push(Number(i) + 1)
    }

    return answer;
}

console.log(solution('2022.05.19',['A 6', 'B 12', 'C 3'], ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C']))