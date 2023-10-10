const solution = (n) => {
    let answer;
    let dy = [1,1];
    
    const DFS = (x) => {
        dy[x] = x * dy[x-1]
        if( dy[x] > n) {
            answer = x - 1
        }
        else DFS(x+1)
    }
    
    DFS(1)
    
    return answer;
}
console.log(solution(3628800))