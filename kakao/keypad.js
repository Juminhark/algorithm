// 키패드 의 position 을 정하고
// 거리의 절대값을 구하는것이 메인 아이디어

const solution = (numbers, hand) => {
	let answer = [];

	const position = {
		1: [0, 0],
		2: [0, 1],
		3: [0, 2],
		4: [1, 0],
		5: [1, 1],
		6: [1, 2],
		7: [2, 0],
		8: [2, 1],
		9: [2, 2],
		'*': [3, 0],
		0: [3, 1],
		'#': [3, 2],
	};

	let leftHand = '*';
	let rightHand = '#';

	const calDist = (hand, leftHand, rightHand, pos, number) => {
		const X = 0,
			Y = 1;
		const leftDist =
			Math.abs(pos[leftHand][X] - pos[number][X]) +
			Math.abs(pos[leftHand][Y] - pos[number][Y]);
		console.log('leftDist');
		console.log(leftDist);
		const rightDist =
			Math.abs(pos[rightHand][X] - pos[number][X]) +
			Math.abs(pos[rightHand][Y] - pos[number][Y]);
		console.log('rightDist');
		console.log(rightDist);
		if (leftDist == rightDist) return hand == 'right' ? 'R' : 'L';
		return leftDist > rightDist ? 'R' : 'L';
	};

	numbers.map((number) => {
		if (number == 1 || number == 4 || number == 7) {
			leftHand = number;
			answer.push('L');
		} else if (number == 3 || number == 6 || number == 9) {
			rightHand = number;
			answer.push('R');
		} else if (number == 2 || number == 5 || number == 8 || number == 0) {
			answer.push(calDist(hand, leftHand, rightHand, position, number));
			answer[answer.length - 1] == 'L'
				? (leftHand = number)
				: (rightHand = number);
		}
	});

	return answer;
};

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
// console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'));
