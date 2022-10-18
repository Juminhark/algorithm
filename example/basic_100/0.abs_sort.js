//? 문제 : 특이한 정렬

//? 주어진 정수 배열 numlist의 원소중 n에 가까운 순서대로 정렬한 배열을 return

const solution = (numlist, n) => {
    let answer = []; 
    let data = {};
    
    numlist.forEach((e) => {
        let len = Math.abs(e - n)
        data[len] ? data[len].push(e) : data[len] = [e]
    })

    let keys = Object.keys(data)

    keys.forEach((e) => {    
        let tmp = data[e].sort((a,b) => a-b)
        let len = tmp.length
        
        if(len > 1) { 
            while(tmp.length > 0)answer.push(tmp.pop())
        } else answer.push(tmp.pop())
    })
    
    return answer;
}

// console.log(solution([1, 2, 3, 4, 5, 6], 4))
// console.log(solution([10000,20,36,47,40,6,10,7000],  30))
// console.log(solution([10,9,8,7,6,5,4,3,2,1,11],6))


const solution2 = (numlist, n) => {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}