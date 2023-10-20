//? 문제 : 수식 최대화

// "100-200*300-500+20" 다음과 같은 문자열을 받았을때
// 연산자 계산 순위를 결정하여 결과값이 가장 큰것을 도출하는 함수를 완성

// expression을 [ 100, '-', 200, '*', 300, '-', 500, '+', 20 ] 으로 변환 하는 함수
// '-', '*', '+' 에 대해 앞뒤 인덱스를 뽑아내 게산하는 함수
// 모든 경우에서 가장 절대값이 큰 결과를 return

// ** eval() 함수
// eval('2+2");
// '2+2' 를 2+2 로계산

const solution = (expression) => {
	let answer = 0;
	let newExpression = [];
	let originalExpression = [];
	let cal = 0;
	let calSolution = [];

	const chars = expression.split('');
	let newItem = '';

	for (let i = 0; i < chars.length; i++) {
		if (chars[i] !== '-' && chars[i] !== '+' && chars[i] !== '*') {
			newItem += chars[i];
		} else {
			newExpression.push(newItem);
			newExpression.push(chars[i]);
			newItem = '';
		}

		if (i + 1 == chars.length) {
			newExpression.push(newItem);
			newItem = '';
		}
	}
	originalExpression = newExpression.slice();

	const arr = [
		['+', '-', '*'],
		['+', '*', '-'],
		['-', '+', '*'],
		['-', '*', '+'],
		['*', '+', '-'],
		['*', '-', '+'],
	];

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			for (let g = 0; g < newExpression.length; g++) {
				if (arr[i][j] == '-') {
					if (newExpression[g] == '-') {
						cal = Number(newExpression[g - 1]) - Number(newExpression[g + 1]);
						newExpression.splice(g - 1, 3, cal);
						cal = 0;
					}
				} else if (arr[i][j] == '+') {
					if (newExpression[g] == '+') {
						cal = Number(newExpression[g - 1]) + Number(newExpression[g + 1]);
						newExpression.splice(g - 1, 3, cal);
						cal = 0;
					}
				} else if (arr[i][j] == '*') {
					if (newExpression[g] == '*') {
						cal = Number(newExpression[g - 1]) * Number(newExpression[g + 1]);
						newExpression.splice(g - 1, 3, cal);
						cal = 0;
					}
				}
			}
		}

		if (newExpression.length > 2) {
			if (newExpression[1] == '-') {
				newExpression.splice(
					0,
					3,
					Number(newExpression[0]) - Number(newExpression[2])
				);
			} else if (newExpression[1] == '*') {
				newExpression.splice(
					0,
					3,
					Number(newExpression[0]) * Number(newExpression[2])
				);
			} else if (newExpression[1] == '+') {
				newExpression.splice(
					0,
					3,
					Number(newExpression[0]) + Number(newExpression[2])
				);
			}
		}
		calSolution.push(Math.abs(newExpression[0]));
		newExpression = originalExpression.slice();
	}
	answer = Math.max.apply(null, calSolution);
	return answer;
};

console.log(eval('2+2'));

// console.log(solution('100-200*300-500+20'));
// console.log(solution('50*6-3*2'));
// console.log(solution('300-400*900+100-20+100'));

// function solution(expression) {
// 	const prior = [
// 		['-', '*', '+'],
// 		['-', '+', '*'],
// 		['*', '-', '+'],
// 		['*', '+', '-'],
// 		['+', '-', '*'],
// 		['+', '*', '-'],
// 	];
// 	let cand = [];

// 	for (let opCand of prior) {
// 		const temp = expression.split(/(\D)/);
// 		for (let exp of opCand) {
// 			while (temp.includes(exp)) {
// 				const idx = temp.indexOf(exp);
// 				temp.splice(idx - 1, 3, eval(temp.slice(idx - 1, idx + 2).join('')));
// 			}
// 		}
// 		cand.push(Math.abs(temp[0]));
// 	}
// 	return Math.max(...cand);
// }

console.log(pos([1, 3] - [1, 6]));
