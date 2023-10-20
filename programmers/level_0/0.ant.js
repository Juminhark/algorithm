//? 문제 : 개미 군단

//? [5,3,1] 공격력을 가진 개미들을 사냥감 체력에 맞게 대리고 나갈 때,
//? 최소한의 병력을 구성하려면 몇마리인가 return

const solution = (hp) => {
    let answer = 0;

    answer += Math.floor(hp/5);
    hp = hp % 5

    answer += Math.floor(hp/3);
    hp = hp % 3

    answer += hp

    return answer
}

console.log(solution(999))
