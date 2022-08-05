//? 문제 : 자릿수의 합

// n 개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고
// 그 합이 최대인 자연수를 출력
// 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 return
// ex) [235, 1234] return 1234

//! 내 풀이
const solution = (n, arr) => {
	let answer;

	const list = {};

	// arr 뽑아서 배열로 쪼개고 그배열을 value, 총합을 key값 으로 갖는 object 생성

	arr.map((el) => {
		const elSplit = el.toString().split(''); //* 숫자 문자로 변환후 쪼개기

		// 총합
		const sum = elSplit.reduce((a, b) => Number(a) + Number(b)); //* reduce()

		const sumString = sum.toString(); //* Object key 값으로 숫자 불가

		if (Object.keys(list).includes(sumString)) {
			list[sumString].push(el);
		} else {
			list[sumString] = [];
			list[sumString].push(el);
		}
	});

	console.log(list);

	const maxKeys = Math.max.apply(null, Object.keys(list)); //* 배열안에서 최대값 찾기
	answer = Math.max.apply(null, list[maxKeys]);

	return answer;
};

let arr = [128, 460, 603, 40, 521, 137, 123];
// console.log(solution(7, arr));

//? 영상 풀이1
const solution2 = (n, arr) => {
	let answer,
		max = Number.MIN_SAFE_INTEGER;

	for (let x of arr) {
		let sum = 0,
			tmp = x;
		while (tmp) {
			sum += tmp % 10;
			tmp = Math.floor(tmp / 10);
		}

		if (sum > max) {
			max = sum;
			answer = x;
		} else if (sum === max) {
			if (x > answer) {
				answer = x;
			}
		}
	}

	return answer;
};

arr = [128, 460, 603, 40, 521, 137, 123];
// console.log(solution2(7, arr));

//? 영상 풀이2
const solution3 = (n, arr) => {
	let answer,
		max = Number.MIN_SAFE_INTEGER;

	for (let x of arr) {
		let sum = x
			.toString()
			.split('')
			.reduce((a, b) => a + Number(b), 0); //* 초기값 주어지는거 참고

		if (sum > max) {
			max = sum;
			answer = x;
		} else if (sum === max) {
			if (x > answer) {
				answer = x;
			}
		}
	}

	return answer;
};

arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution3(7, arr));
