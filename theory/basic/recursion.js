//* recursion 재귀 : 자신을 다시 호출

// pow(x, n):function 을 구현하는 2가지 방법

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
const pow = (x, n) => {
	if (n == 1) {
		return x;
	} else {
		return x * pow(x, n - 1);
	}
};

console.log(powFor(2, 2)); // 4
console.log(pow(2, 3)); // 8
console.log(pow(2, 4)); //16

// 재귀를 사용하면 코드가 짧아진다
const powShort = (x, n) => {
	// 조건문 ? true : false
	return n == 1 ? x : x * pow(x, n - 1);
};

// 재귀는 재귀적 순회 (recursive traversal)를 구현할 때 사용하면 좋다
// ? 임직원의 급여를 더한 값

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

// arr.reduce(callback, [initialValue])
// callback(acc, cur, [idx], [src])
// accumulator : initial있으면 initial값, 누산기
// currentValue : 처리할 요소
// [currentIndex] : 처리할 요소의 인덱스
// [array(src)] :원본배열
