//? 문제 : 분수의 덧셈

//? 두개의 분수의 분자와 분모가 각각 (denum1, num1), (denum2, num2) 주어졌을 때,
//? 두 분수를 더한 값의 기약분수를 분자와 분모 순서로 담은 배열을 return

//* 최대 공약수(Greatest Common Divisor, GCD)
//* 유클리드 호제법

const solution = (denum1, num1, denum2, num2) => {
    let answer = [(denum1 * num2) + (denum2 * num1), num1 * num2];
    let arr = answer.slice().sort((a,b) => b - a);

    // 최대 공약수 찾기
    if(arr[0] % arr[1] > 0) {

        while(arr[0] % arr[1] !== 0){
            let tmp = arr[0] % arr[1]
            arr[0] = arr[1]
            arr[1] = tmp;
        }     
    }
    let GCD = arr[1];

    return answer = [answer[0] / GCD, answer[1] / GCD];
}

console.log(solution(1,2,3,4))


// DFS
const solution2 = (denum1, num1, denum2, num2) => {
    let denum = denum1*num2 + denum2*num1;
    let num = num1 * num2;

    const fnGCD = (a, b) =>{
        return (a % b) ? fnGCD(b, a % b) : b;
    }

    let GCD = fnGCD(denum, num); //최대공약수

    return [denum/GCD, num/GCD];
}