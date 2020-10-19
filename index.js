//* Recursion : 재귀
//* 재귀 알고리즘이 작동하려면 현재 범위의 해결이 작은 범위의 해결을
//* 이용해야하며 작은 범위가 반복되어 base case에 도달하여야한다.
//* ex) 마트료시카(러시아 인형)

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
	return n === 0 ? 1 : n * factorialRecursion(n - 1);
};

// console.log(factorialFor(4)); // 1 x 2 x 3 x 4 = 24
// console.log(factorialRecursion(4)); // 1 x 2 x 3 x 4 = 24

// 1. 상위 범위를 하위범위의 해를 이용해서 푼다
// 2. 하위범위 점점작아져서 base case까지 도달

//? 재귀를 이용해 회문 판단.
//! String.slice(start?: number, end?: number): string

const firstCharacter = (str) => {
	return str.slice(0, 1);
};

const lastCharacter = (str) => {
	return str.slice(-1);
};

const middleCharacters = (str) => {
	return str.slice(1, -1);
};

const isPalindrome = (str) => {
	console.log('str : ' + str + ' : ' + str.length);
	if (str.length <= 1) {
		return true;
	}
	if (firstCharacter(str) !== lastCharacter(str)) {
		return false;
	} else {
		return isPalindrome(middleCharacters(str));
	}
};

console.log(isPalindrome('rotor'));

//? 재귀를 이용해 거듭제곱 표현.

const isEven = (n) => {
	return n % 2 === 0;
};

const isOdd = (n) => {
	return !isEven(n);
};

const power = (x, n) => {
	// base case
	if (n === 0) {
		return 1;
	}
	// recursive case: n is negative
	if (n < 0) {
		return 1 / power(x, -n);
	}
	// recursive case: n is odd
	if (isOdd(n)) {
		return x * power(x, n - 1);
	}
	// recursive case: n is even
	if (isEven(n)) {
		let y = power(x, n / 2);
		return y * y;
	}
};

console.log(power(2, 2));
console.log(power(-2, 2));

//* 선택정렬
//* 최대 실행 시간 : Θ(n^2)
//* 최소 실행 시간 : Θ(n^2)
//* 평균 실행 시간 : Θ(n^2)

//* 삽입정렬
//* 최대 실행 시간 : Θ(n^2)
//* 최소 실행 시간 : Θ(n^2)
//* 평균 실행 시간 : Θ(n^2)

//* 병합정렬
//* 최대 실행 시간 : Θ(n^2)
//* 최소 실행 시간 : Θ(n^2)
//* 평균 실행 시간 : Θ(n^2)

//* 빠른정렬
//* 최대 실행 시간 : Θ(n^2)
//* 최소 실행 시간 : Θ(nlgn)
//* 평균 실행 시간 : Θ(n^2)

//* Merge Sort (병합 정렬) : 배열을 더이상 나눠질수없는 배열로 나누어 배열 단위로 정렬
