function solution(today, terms, privacies) {
    var answer = [];
    let termsObj = {}

    let todatDate = new Date(today) // 2022-05-18T15:00:00.000Z

    for(let a of terms) {
        let tmp = a.split(' ');
        termsObj[tmp[0]] = Number(tmp[1])
        }

    for(let i in privacies) {
        let tmp = privacies[i].split(' ')
        let tmpDate = new Date(tmp[0])
        
        tmpDate.setMonth(tmpDate.getMonth() + termsObj[tmp[1]])

        if(todatDate >= tmpDate) answer.push(Number(i) + 1)
       }

    return answer;
}

console.log(solution('2022.05.19',['A 6', 'B 12', 'C 3'], ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C'])) // [1, 3]
console.log(solution('2020.01.01',['Z 3', 'D 5'], ['2019.01.01 D', '2019.11.15 Z', '2019.08.02 D', '2019.07.01 D','2018.12.28 Z'])) // [1, 4, 5]

//! : Date 를 쓸줄 아느냐
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date
// https://codechacha.com/ko/javascript-compare-dates/