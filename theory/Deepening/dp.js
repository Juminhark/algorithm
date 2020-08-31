// DP(Dynamic Programming) : 동적 계획법

// DP는 메모리를 적절히 사용하여 수행 시간을 비약적으로 증가시키는 방법.
// 작은 문제 결과를 저장하여 같은 계산을 반복하지 않도록 하는 방법.
// DP의 구현은 일반적으로 두 가지 방식(탑다운, 바텀업)으로 구성됩니다

// 다음 2가지를 만족하면 DP 사용.
// 1. 최적부분구조(Optimal Substructure) : 작은문제의 답을 모아 큰문제를 해결
// 2. 중복되는 부분(Overlapping Subproblem) : 동일한 작은 문제 반복

// * 피보나치 수열

// 1, 1, 2, 3, 5, 8, 13, 21, ...
// 점화식 : 인접한 항들 사이의 괸계식

// f(n) = f(n-1) + f(n-2); *점화식
// f(1) = 1, f(2) = 1;

// const fibo = (n) => {
// 	return n == 1 || n == 2 ? 1 : fibo(n - 1) + fibo(n - 2);
// };

// console.log(fibo(4));

// recursion으로 피보나치를 해결하면 지수 시간 복잡도를 가지게 된다.
// 같은 값이 중복되서 호출된다. => 이 문제를 해결하기 위한것이 DP
// 피보나치 수열의 시간 복잡도는 O(2^N) => F(30)은 10억가량의 연산이 필요

// 1. f(4) = f(3) + f(2)
// 2. f(n) = f(n-1) + f(n-2) 의 반복

// Memorization : DP의 구현 방법중 하나
// 한번 계산한 결과를 메모리 공간에 메모.
// 같은 문제를 다시 호풀하면 메모했던 결과를 가져온다.
// 값을 기록해 놓는다는점에서 Caching이라고도 한다.

// TopDown(Memorization) vs BottomUp
// DP의 전형적인 형태는 BottomUp => 결과 저장용 리스트는 DP Table
// Memorization은 이전의 결과를 일시적으로 기록해 놓는 넓은 개념을 의미

// // TopDown 예시
// // Memorization 하기 위한 DP Table : cache
// let d = Array(100).fill(0);
// // Fibonacci Function을 재귀함수로 구현
// const fiboMemo = (x) => {
// 	if (x == 1 || x == 2) {
// 		// 종료 조건
// 		return 1;
// 	} else if (d[x] !== 0) {
// 		// 계산한적이 있는지 여부
// 		return d[x];
// 	} else {
// 		// 계산한적이 없다면 점화식
// 		d[x] = fiboMemo(x - 1) + fiboMemo(x - 2);
// 		return d[x];
// 	}
// };

// console.log(fiboMemo(99));

// // BottomUp 예시
// DP Table
// d = Array(100).fill(0);

// d[1] = 1;
// d[2] = 1;
// let n = 99;

// for (let i = 3; i < n + 1; i++) {
// 	d[i] = d[i - 1] + d[i - 2];
// }

// console.log(d[50]);

// TopDown은 재귀, BottomUp은 반복문, 일반적인 경우 효율성은 비슷하기때문에 손에 익는걸 사용.

// DP VS 분할 정복
// 최적 부분 구조(큰 문제 해가 작은 문제의 해의 집합)를 가질때 둘다 사용 가능
// 차이점은 부분 문제의 중복 여부 - 분할 정복 문제에서는 반복적 계산이 없다.

// 분할 정복
// 퀵 정렬 - 기준 원소(Pivot)의 변경된 위치는 바뀌지않는다

// * 주어진 문제가 DP 유형임을 파악하는것이 중요.
// 가장 먼저 그리디, 구현, 완전 탐색등의 아이디어로 문제를 해결할수 있는지 검토
// 다른 알고리즘으로 풀이 방법이 떠오르지 않으면 DP를 고려
// 일단 재귀 함수로 비효율적인 완전탐색프로그램을 작성한뒤 작은 문제에서 구한 답이 큰 문제에서
// 그대로 사용될수 있으면, 코드를 개선하는 방법을 사용할수 있다.

// 문제 : 개미 전사

// 개미 전사는 일직선으로 이어져있는 메뚜기 마을의 창고를 습격
// 각 식량 창고에는 정해진 수의 식량창고를 선택하여 약탈
// 인접창고가 습격되면 메뚜기가 감지. 2칸 이상 떨어진 창고를 선택하여 약탈할떄
// 얻을수 있는 가장 많은 식량을 return

// 1. 최적부분구조(Optimal Substructure) : 작은문제의 답을 모아 큰문제를 해결
// f(i) : i 까지의 최적부분
// 2. 중복되는 부분(Overlapping Subproblem) : 동일한 작은 문제 반복
// f(i) 와 f(i-1) 중 더 큰수를 찾는 행동을 반복

// [1,3,1,5]
// f(0) = 1, f(1) = 3, f(2) = 3, f(4)= 8

// f(i) = max[f(i-1), f(i-2) + k(i)]
// f(i) : i번째 까지 식량창고의 최적의 해
// k(i) : i번째 식량창고에 있는 식량의 양

// const ant = (arr) => {
// 	// 식량창고의 개수
// 	let n = arr.length;

// 	// DP Table
// 	let d = Array(100).fill(0);
// 	// DP - BottomUp
//   d[0] = arr[0];
// 	d[1] = Math.max(arr[0], arr[1]);
// 	for (let i = 2; i < n; i++) {
// 		d[i] = Math.max(d[i - 1], d[i - 2] + arr[i]);
// 	}

// 	return d[n - 1];
// };

// console.log(ant([1, 3, 1, 5, 4, 4, 1, 4, 4]));
// console.log(ant([1,2,3,4,5]))

// DP는 점화식을 세우는것이 가장 핵심이다.

// 문제 : 1로 만들기

// 주어진 정수 X 에 다음 4가지 연산을 사용해 값을 1로 만들고자 한다.
// 1. X가 5로 나누어 떨어 지면 , 5로 나눕니다.
// 2. X가 3으로 나누어 떨어지면, 3으로 나눕니다.
// 3. X가 2로 나누어 떨어지면, 2로 나눕니다.
// 4. X에서 1을 뺍니다.
// 연산을 사용하는 횟수의 최소값을 출력.

// 1. 큰 문제 해결 = 작은 문제해결의 합
// 2. 큰 문제 해결 = 작은 문제해결의 합 ==> 반복

// f(i) : i 를 1로 만들기 위한 최소 연산 횟수
// 점화식 : f(i) = Math.min[f(i-1), f(i/2), f(i/3), f(i/5)] + 1

// const one = (X) => {
// 	let d = Array(30001).fill(0);
// 	for (let i = 2; i <= X; i++) {
// 		// 현재의 수에서 1을 빼는 경우
// 		d[i] = d[i - 1] + 1;
// 		// 현재의 수가 2로 나누어 떨어지는 경우
// 		if (i % 2 == 0) {
// 			d[i] = Math.min(d[i], d[i / 2] + 1);
// 		}
// 		// 현재의 수가 3로 나누어 떨어지는 경우
// 		if (i % 3 == 0) {
// 			d[i] = Math.min(d[i], d[i / 3] + 1);
// 		}
// 		// 현재의 수가 5로 나누어 떨어지는 경우
// 		if (i % 5 == 0) {
// 			d[i] = Math.min(d[i], d[i / 5] + 1);
// 		}
// 	}

// 	return d[X];
// };

// console.log(one(26));

// 문제 : 효율적인 화폐 구성

// N가지 종류의 화폐중 개수를 최소한으로 이용해서 그 가치의 합이 M원이 되도록 한다.
// input : [2, 3] , 15  => 3원 5개로 15를 만드는것이 최소의 화폐개수
// output : 5
// M은 화폐로 표현하지 못하는 경우 -1

// f(i) : 금액 i를 만들수 있는 최소한의 화폐개수
// k : 각 화폐의단위
// 점화식 : 각 화폐의 단위인 k를 하나씩  확인하며
// f(i-k)를 만드는 방법이 존재하는 경우  f(i) = Math.min(f(i), f(i-k) +1)
//  f(i-k)를 만드는 방법이 존재하지 않는 경우  f(i) = INF(구할수 없는 값)

// const money = (arr, m) => {
// 	// 나올수 있는 최대 숫자가 10000 => 나올수없는 숫자로 채워 넣는다 -> 이경우 -1을 리턴하게
//   let d = Array(m + 1).fill(10001);

// 	d[0] = 0;

// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = arr[i]; j <= m; j++) {
// 			if (d[j - arr[i]] != 10001) {
// 				d[j] = Math.min(d[j], d[j - arr[i]] + 1);
// 			}
// 		}
// 	}

// 	if (d[m] == 10001) return -1;
// 	else return d[m];
// };

// console.log(money([2, 3, 5], 15)); // 5
// console.log(money([3, 5, 7], 4)); // -1

// [ 0 : 0, 1 : 10001, 2 : 10001, 3 : 10001, 4 :  10001 , 5 : 10001 ,6 : 10001, 7 : 10001 ,8 : 10001 9 : 10001, 10 : 10001 ...]
// step 1 : 화폐가 2인 경우
// [ 0 : 0, 1 : 10001, 2 : 1, 3 : 10001, 4 :  2 , 5 : 10001 ,6 : 3, 7 : 10001 ,8 : 4, 9 : 10001, 10 : 5 ...]
// step 2 : 화폐가 3인 경우
// [ 0 : 0, 1 : 10001, 2 : 1, 3 : 1, 4 :  2 , 5 : 2 ,6 : 2, 7 :3 ,8 : 3, 9 : 3, 10 : 5 ...]
// step 2 : 화폐가 5인 경우
// [ 0 : 0, 1 : 10001, 2 : 1, 3 : 1, 4 :  2 , 5 : 1 ,6 : 2, 7 :2 ,8 : 2, 9 : 3, 10 : 2  ...]
