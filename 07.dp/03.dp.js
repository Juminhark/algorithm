//? 문제 : 1로 만들기

//? 주어진 정수 X 에 다음 4가지 연산을 사용해 값을 1로 만들고자 한다.
//? 1. X가 5로 나누어 떨어 지면 , 5로 나눕니다.
//? 2. X가 3으로 나누어 떨어지면, 3으로 나눕니다.
//? 3. X가 2로 나누어 떨어지면, 2로 나눕니다.
//? 4. X에서 1을 뺍니다. 
//? 연산을 사용하는 횟수의 최소값을 출력.

// 1. 큰 문제 해결 = 작은 문제해결의 합
// 2. 큰 문제 해결 = 작은 문제해결의 합 ==> 반복

// f(i) : i 를 1로 만들기 위한 최소 연산 횟수
// 점화식 : f(i) = Math.min[f(i-1), f(i/2), f(i/3), f(i/5)] + 1

const solution = (n) => {
    let dy = Array(n).fill(0);

    for (let i = 2; i <= n; i++) {
      // 현재의 수에서 1을 빼는 경우
      dy[i] = dy[i - 1] + 1;

      // 현재의 수가 2로 나누어 떨어지는 경우
      if (i % 2 === 0) {
        dy[i] = Math.min(dy[i], dy[i / 2] + 1);
      }

      // 현재의 수가 3로 나누어 떨어지는 경우
      if (i % 3 === 0) {
        dy[i] = Math.min(dy[i], dy[i / 3] + 1);
      }

      // 현재의 수가 5로 나누어 떨어지는 경우
      if (i % 5 === 0) {
        dy[i] = Math.min(dy[i], dy[i / 5] + 1);
      }
    }

  
    return dy[n];
  };
  
  console.log(solution(26)); // 3