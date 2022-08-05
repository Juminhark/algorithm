//? 문제 : 뒤집은 소수

// n개의 자연수를 뒤집은 후 (3 <= n <=100)
// 그 뒤집은 수가 소수이면 출력하는 프로그램 작성
// ex) 32 -> 23 은 소수 출력.
// ex) 910 -> 019 -> 19 은 소수 출력

// 소수(Prime Number) : 2보다 큰 자연수중 1과 자기 자신을 제외한 자연수로는 나누어 떨어지지 않는 자연수

//! 내 풀이
const solution = (n, arr) => {
	const answer = [];

	// 소수 판별 함수 생성
	const checkPrime = (a) => {
		if (a === 1 || a === 2) {
			return true;
		}

		for (let i = 2; i < a; i++) {
			// 2 ~ a 까지 나눈 나머지가 0 이면 몫이 있어 소수가 아니다
			if (a % i === 0) {
				return false;
			}
		}

		return true;
	};

	// 뒤집은 수 소수 판별 진행 arr에서 shift() 하여 answer에 push() 로 순서 변동x
	while (arr.length) {
		const unit = Number(
			arr
				.shift()
				.toString()
				.split('')
				.reverse()
				.reduce((a, b) => a + b)
		);

		if (unit === 1) {
		} else if (checkPrime(unit)) answer.push(unit);
	}

	return answer;
};

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
// console.log(solution(9, arr)); // [23, 2, 73, 2, 3]

//? 영상 풀이1
function isPrime(num) {
	if (num === 1) return false;

	// ex) 16 => [1, 16], [2, 8], [4, 4], [8, 2], [16, 1] 이라서 1,2,4 절반만 확인해도 소수판별가능
	for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
		if (num % i === 0) return false;
	}

	return true;
}

const solution2 = (n, arr) => {
	let answer = [];

	for (let x of arr) {
		let res = 0;

		while (x) {
			let t = x % 10;
			res = res * 10 + t;
			x = parseInt(x / 10);
		}

		// 소수 확인
		if (isPrime(res)) answer.push(res);
	}

	return answer;
};

// console.log(solution2(9, arr)); // [23, 2, 73, 2, 3]

//? 영상 풀이2
const solution3 = (n, arr) => {
	let answer = [];

	for (let x of arr) {
		let res = Number(x.toString().split('').reverse().join(''));

		// 소수 확인
		if (isPrime(res)) answer.push(res);
	}

	return answer;
};

console.log(solution3(9, arr)); // [23, 2, 73, 2, 3]
