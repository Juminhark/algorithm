const solution = (emergency) => {
    
    let count = 1;
    let len = emergency.length
    let answer = Array.from({length : len}, () => 0);
    
    
    while(count <= len) {
        let max = Math.max(...emergency)
        let index = emergency.indexOf(max)
        answer[index] = count
        emergency[index] = -1
        count++
    }
    
    return answer;
}

console.log(solution([3, 76, 24]))
console.log([1, 2, 3, 4, 5, 6, 7])


const solution2 = (emergency) => {
    let sorted = emergency.slice().sort((a,b)=>b-a);
    return emergency.map(v=>sorted.indexOf(v)+1);
}


//* 등수 매기기
//* 중복있으면? 중복이여도 상관 없다
