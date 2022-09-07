//? 문제 : 계단오르기

//? 계단을 한번에 한 계단 또는 두 계단씩 올라간다
//? N계단을 오를 수 있는 방법은 몇가지 인가?

const solution = (n) => {
    let answer = 0;
    let dy = Array.from({length: n +1}, () => 0);

    dy[1] = 1;
    dy[2] = 2;

    for(let i =3; i<=n; i++) {
        dy[i] = dy[i-2] + dy[i-1];
    }

    return answer = dy[n];
}

console.log(solution(7))