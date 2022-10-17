//? 문제 : 최빈값 구하기

//? 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미
//? 정수 배열 array에서 최빈값을 return
//? 최빈값이 여러개면 -1을 return

const solution = (array) => {

    let obj = array.reduce((acc,cur) => {
        acc[cur] = acc[cur] ? ++acc[cur] : 1 
        return acc
    },{})



    let keys = Object.keys(obj)
    if(keys.length === 1) return Number(keys[0])

    let values = Object.values(obj)
    let sort_values = [...values].sort((a,b) => a-b)

    if(sort_values[sort_values.length-1] === sort_values[sort_values.length-2]) return -1
    else {
        return Number(keys[values.indexOf(sort_values[sort_values.length-1])])
    }

}

// console.log(solution([1, 2, 3, 3, 3, 4])) // 3
// console.log(solution([1, 1, 2, 2])) // -1
// console.log(solution([1])) // 1
