//* Sorting : 정렬

//? 문제 : 오름차순
// 다음 숫자들을 오른차순으로 정렬

const ascendingOrder = (str) => {
	let result = str.split(' ').sort((a, b) => {
		return a - b;
	});

	console.log(result);
	let answer = '';
	for (let i = 0; i < result.length; i++) {
		if (answer == '') {
			answer += result[i];
		} else {
			answer += ' ' + result[i];
		}
	}
	return answer;
};

// console.log(ascendingOrder('1 10 5 8 7 6 4 3 2 9'));

//? 문제 : K번째 수

// command : [a, b, c], arr에서 a번째부터 b번째까지 자른 것을 정렬했을때 c번째 원소
// command들의 결과값을 모은 배열을 return

const k = (arr, commands) => {
	let answer = [];
	while (commands.length !== 0) {
		let u = commands.shift();

		let unit = arr.slice(u[0] - 1, u[1]);
		// 오름차순
		unit.sort((a, b) => {
			return a - b;
		});
		console.log(unit);

		answer.push(unit[u[2] - 1]);
	}
	return answer;
};

// console.log(
// 	k(
// 		[1, 5, 2, 6, 3, 7, 4],
// 		[
// 			[2, 5, 3],
// 			[4, 4, 1],
// 			[1, 7, 3],
// 		]
// 	)
// );

//? 문제 : 가장 큰수

// 주어진 배열 :  100,000 이하
// 원소 : 1,000
// 주어진 정수를 이어붙여 만들수있는 가장 큰수를 구하여라

const largestNumber = (numbers) => {
	let answer = numbers
		.map((c) => c + '')
		.sort((a, b) => b + a - (a + b))
		.join('');

	return answer[0] === '0' ? '0' : answer;
};

// console.log(largestNumber([3, 30, 31, 34, 33, 5, 9])); // 95343333130
// console.log(largestNumber([3, 30, 34, 5, 191])); // 5 34 3 30 191;
// console.log(largestNumber([3, 30, 34, 5, 191, 432])); // 5 432 3 34 30 191
// console.log(largestNumber([0, 0, 0, 0, 0, 0])); // 0
// console.log(largestNumber([0, 0, 0, 1000])); // 1000
// console.log(largestNumber([0, 0, 0, 0])); // 0

//? 문제 : H-Index

// n 편의 논문중 h번 이상 인용된 논문이 h편 이상이고 나머지가 h번 이하 인용을 만족하는 최댓값
// [3, 0, 6, 1 ,5] => h = 3

const h_index = (citations) => {
	let result = 0;
	for (let i = 1; i <= citations.length; i++) {
		let count = 0;
		citations.forEach((element) => {
			if (element >= i) {
				count++;
			}
		});
		if (count >= i) {
			result = i;
		}
	}

	return result;
};

console.log(h_index([3, 0, 6, 1, 5])); //3
console.log(h_index([6, 6, 6, 6, 6, 1])); //5
console.log(h_index([20, 21, 22, 23])); //4
console.log(h_index([3, 3, 3, 3, 3])); //3

//? 문제 : H-Index

// n 편의 논문중 h번 이상 인용된 논문이 h편 이상이고 나머지가 h번 이하 인용을 만족하는 최댓값
// [3, 0, 6, 1 ,5] => h = 3

const h_index = (citations) => {
	let result = 0;
	for (let i = 1; i <= citations.length; i++) {
		let count = 0;
		citations.forEach((element) => {
			if (element >= i) {
				count++;
			}
		});
		if (count >= i) {
			result = i;
		}
	}

	return result;
};

// console.log(h_index([3, 0, 6, 1, 5])); //3
// console.log(h_index([6, 6, 6, 6, 6, 1])); //5
// console.log(h_index([20, 21, 22, 23])); //4
// console.log(h_index([3, 3, 3, 3, 3])); //3
