//? 문제 : 공 던지기

const solution = (numbers, k) => {
    let count = 0;
    let len = numbers.length
    k--

    while(k--){
        count += 2
        if(count >= len) count -= len
    }
    
    return numbers[count];
}

console.log(solution(	[1, 2, 3, 4, 5, 6], 5))