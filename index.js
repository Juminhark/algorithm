const solution = (numbers, k) => {
    let count = 0;
    let len = numbers.length
    
    while(k--){
        count += 3
        if(count >= len) count -= len
        console.log(count)
    }
    
    return numbers[count];
}

console.log(solution(	[1, 2, 3, 4, 5, 6], 5))