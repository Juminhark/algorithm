//? 문제 : 평균구하기

//? 정수를 담고 있는 배열 arr의 평균값을 return

const solution = (arr) => {
    let answer = 0;

    for(let i of arr) answer += i
    //* === arr.reduce((acc, cur) => acc + cur, 0)

    answer = answer / arr.length

    return answer
}


console.log(solution([1,2,3,4])) // 2.5