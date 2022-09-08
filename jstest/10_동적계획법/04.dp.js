//? 문제 : 동전 교환(냅색 알고리즘)

//? 여러 단위의 동전들이 주어질 때,
//? 거스름돈을 가장 적은수의 동전으로 교환

//* DFS로 풀어보았으나, 동전의 종류개수나 거슬러 줄 금액이 커지면 DP로 풀어야한다

const solution = (m, coin) => {
    let answer = 0;
    let dy = Array.from({length: m+1}, () => 1000);
    dy[0] = 0;

    for(let i = 0; i< coin.length; i++) {
        for(let j = coin[i]; j<=m; j++) [
            dy[j] = Math.min(dy[j], dy[j-coin[i]] + 1)
        ]
    }
    answer = dy[m]
    return answer;
}

let arr = [1,2,5]
console.log(solution(15, arr));