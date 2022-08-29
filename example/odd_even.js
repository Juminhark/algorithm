'use strict';

//? ODD or EVEN

//? 각자리수를 더한 값이 홀수이면 ODD 짝수이면 EVEN

//? sum(56) - ODD
//? 5 + 6 = 11
//? 11 % 2 = 1

//? sum(745) - EVEN
//? 7 + 4 + 5 = 16
//? 16 % 2 = 0

//? solution
const sum = (number) => {
	//? 각자리값을 문자열로써 나누고
	const sumEach = (number + '')
		.split('')
		.reduce((acc, cur) => Number(acc) + Number(cur), 0);

	//? 짝수 홀수 판단
	return sumEach % 2 === 0 ? 'EVEN' : 'ODD';
};

console.log(sum(56));
console.log(sum(745));

//? answer 1
const sumAnswer1 = (number) => {
	const items = [...(number + '')];
	const result = items.reduce((total, item) => {
		return total + Number(item);
	}, 0);

	return result % 2 === 0 ? 'EVEN' : 'ODD';
};

console.log(sumAnswer1(56));
console.log(sumAnswer1(745));

//? answer 2
const sumAnswer2 = (number) =>
	[...number.toString()].reduce((total, item) => total + Number(item), 0) %
		2 ===
	0
		? 'EVEN'
		: 'ODD';

console.log(sumAnswer2(56));
console.log(sumAnswer2(745));

// Number To String
// .toString()
// + ''

// String To Number
// parseInt - for integer
// parseFloat - for decimals
// Number - returns NaN if not a number
