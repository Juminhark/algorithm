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
        
        if(Number(todayArr[0]) > Number(compare[0])) answer.push(Number(i) + 1)
        else if( Number(todayArr[0]) === Number(compare[0]) && Number(todayArr[1]) > Number(compare[1])) answer.push(Number(i) + 1)
        else if( Number(todayArr[0]) === Number(compare[0]) && Number(todayArr[1]) === Number(compare[1]) && Number(todayArr[2]) >= Number(compare[2]))answer.push(Number(i) + 1)
    }

    return answer;
}

console.log(solution('2022.05.19',['A 6', 'B 12', 'C 3'], ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C']))


// 테스트 1 〉 통과 (0.15ms, 33.4MB)
// 테스트 2 〉 통과 (0.17ms, 33.5MB)
// 테스트 3 〉 통과 (0.14ms, 33.5MB)
// 테스트 4 〉 통과 (0.14ms, 33.6MB)
// 테스트 5 〉 통과 (0.17ms, 33.5MB)
// 테스트 6 〉 실패 (0.19ms, 33.4MB)
// 테스트 7 〉 통과 (0.19ms, 33.5MB)
// 테스트 8 〉 통과 (0.21ms, 33.6MB)
// 테스트 9 〉 실패 (0.38ms, 33.4MB)
// 테스트 10 〉 실패 (0.40ms, 33.5MB)
// 테스트 11 〉 실패 (0.38ms, 33.5MB)
// 테스트 12 〉 실패 (0.50ms, 33.5MB)
// 테스트 13 〉 실패 (0.50ms, 33.5MB)
// 테스트 14 〉 실패 (0.40ms, 33.6MB)
// 테스트 15 〉 실패 (0.41ms, 33.6MB)
// 테스트 16 〉 실패 (0.51ms, 33.5MB)
// 테스트 17 〉 실패 (0.50ms, 33.5MB)
// 테스트 18 〉 실패 (0.50ms, 33.6MB)
// 테스트 19 〉 실패 (0.60ms, 33.6MB)
// 테스트 20 〉 통과 (0.49ms, 33.6MB)
