//* recursion 재귀 : 자신을 다시 호출

//? 문제 : 거듭제곱 (밑^지수)
// Math.pow(x, n) : 거듭제곱(x^n) 을 구현하는 2가지 방법

// 1. 반복적인 사고를 통한 방법: for 루프
const powFor = (x, n) => {
	let result = 1;
	// 반복문을 돌면서 x를 n번 곱함
	for (let i = 0; i < n; i++) {
		result *= x;
	}
	return result;
};

// 2. 재귀적인 사고를 통한 방법: 작업을 단순화하고 자기 자신을 호출함
const powRecursion = (x, n) => {
	if (n == 1) {
		return x;
	} else {
		return x * powRecursion(x, n - 1);
	}
};
x ^ 2;

console.log(powFor(2, 2)); // 4
console.log(powRecursion(2, 3)); // 8

// 재귀를 사용하면 코드가 짧아진다
const powShort = (x, n) => {
	// 조건문 ? true : false
	return n == 1 ? x : x * powShort(x, n - 1);
};

console.log(powShort(2, 2)); // 4
console.log(powShort(2, 3)); // 8

// javascript에서의 구현.
// Math.pow || ** : 지수 연산자
console.log(2 ** -1); // 0.5
console.log(Math.pow(2, -1)); // 0.5
console.log(2 ** 4); // 16
console.log(Math.pow(2, 4)); // 16

//? 문제 : 팩토리얼 : n! => 1 x 2 x ... x (n-1) x n

// for문
const factorialFor = (n) => {
	let result = 1;

	for (let i = 1; i <= n; i++) {
		result *= i;
	}
	return result;
};

// 재귀
const factorialRecursion = (n) => {
	return n == 1 ? 1 : n * factorialRecursion(n - 1);
};

console.log(factorialFor(4)); // 1 x 2 x 3 x 4 = 24
console.log(factorialRecursion(4)); // 1 x 2 x 3 x 4 = 24

//? 문제 : 피보나치수열

const fibonacci = (n) => {
	return n == 1 || n == 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(7)); // 1 1 2 3 5 8 [13]

//? 문제 : 급여
// 임직원의 모든 급여를 더한 값을 구하여라
// 재귀는 재귀적 순회 (recursive traversal)를 구현할 때 사용하면 좋다

let company = {
	sales: [
		{ name: 'John', salary: 1000 },
		{ name: 'Alice', salary: 1600 },
	],
	development: {
		sites: [
			{ name: 'Peter', salary: 2000 },
			{ name: 'Alex', salary: 1800 },
		],
		internals: [{ name: 'Jack', salary: 1300 }],
	},
};
1000 + 1600 + (2000 + 1800) + 1300;

// 급여 합계를 구해주는 함수
const sumSalaries = (department) => {
	if (Array.isArray(department)) {
		// 첫 번째 경우
		return department.reduce((prev, current) => prev + current.salary, 0); // 배열의 요소를 합함
	} else {
		// 두 번째 경우
		let sum = 0;
		for (let subdep of Object.values(department)) {
			sum += sumSalaries(subdep); // 재귀 호출로 각 하위 부서 임직원의 급여 총합을 구함
			console.log(sum);
		}
		return sum;
	}
};

console.log(sumSalaries(company)); //7700

//! arr.reduce(callback, [initialValue])
