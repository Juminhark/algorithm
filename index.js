
//? 소인수분해

// const solution = (n) =>{

//     // n보다 작은 수에서 소수찾기
//     // 찾은 소수로 n을 나눌수 있는지 확인
//     let answer = []
//     let prime = []

//     for(let i = 2; i < n; i++){
        
//     }
// }


// console.log(solution(12))


const solution = (id_pw, db) => {
    let answer = '';
    let db_obj = {};
    
    db.forEach((e) => {
        let [a,b] = e;
        db_obj[a] = b;
    })

    let [id, pw] = id_pw

    const pw_check = (a, b) => {
        if(a === b) return 'login'
        else return 'wrong pw'
    }

    db_obj[id] ? 
    answer = pw_check(db_obj[id],pw)
     : answer = 'fail'

    return answer;
}

console.log(solution(["meosseugi", "1234"], [["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]))