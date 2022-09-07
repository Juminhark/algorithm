//? 문제 : 돌다리 건너기

//? N개의 돌로 다리가 있을 때, 한번에 한 칸 또는 두 칸씩 건너뛰어 건널수있는 방법은 몇가지 인지 출력

const solution = (n) => {
    let answer = 0;
    dy = Array.from({length: n+1}, ()=> 0);

    dy[1] = 1;
    dy[2] = 2;

    for(let i = 3; i<=n; i++) {
        dy[i] = dy[i-2] + dy[i-1]
    }
    answer = dy[n]

    return answer
}

console.log(solution(7))