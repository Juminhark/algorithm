const solution = (s) => {
	let answer = 0;
	let answerMap = Array(s.length).fill('');
	let temp = [];
	let resultMap = [];

	// 문자열을 n개씩 잘려서 배열

	// for문 조건식 : for문
	for (let i = 1; i < s.length + 1; i++) {
		for (let j = 0; j < s.length; j += i) {
			temp.push(s.substring(j, j + i));
		}
		resultMap.push(temp);
		temp = [];
	}

	for (let i = 0; i < resultMap.length; i++) {
		let piece1 = 0;
		let piece2 = 0;
		let count = 0;

		for (let j = 0; j < resultMap.length - i; j++) {
			// 하나 꺼내고
			if (piece1 == 0) {
				piece1 = resultMap[i].shift();
			}
			// 또 하나 꺼냈는데
			if (piece2 == 0) {
				piece2 = resultMap[i].shift();
			}
			// 둘이 같으면 count +1
			// 둘이 다르면 count 랑 piece1 를 넣는다
			if (piece1 !== 0 && piece1 == piece2) {
				count++;
				piece2 = 0;
			} else if (piece1 !== piece2) {
				if (count !== 0) {
					answerMap[i] += String(count + 1);
					count = 0;
				}
				answerMap[i] += piece1;
				piece1 = piece2;
				piece2 = 0;
			}
		}
	}
	console.log(answerMap);
	answerMap.map((value, i) => {
		answerMap[i] = value.length;
	});

	answer = answerMap[0];
	// 최소값
	for (let i = 0; i < answerMap.length; i++) {
		if (answer > answerMap[i]) {
			answer = answerMap[i];
		}
	}

	console.log(answerMap);

	return answer;
};

// const solution = (s) => {
// 	const range = [...Array(s.length)].map((_, i) => i + 1);
// 	return Math.min(...range.map((i) => compress(s, i).length));
// };

// const compress = (s, n) => {
// 	const make = ([a, l, c]) => `${a}${c > 1 ? c : ''}${l}`;
// 	return make(
// 		chunk(s, n).reduce(
// 			([a, l, c], e) => (e === l ? [a, l, c + 1] : [make([a, l, c]), e, 1]),
// 			['', '', 0]
// 		)
// 	);
// };

// const chunk = (s, n) =>
// 	s.length <= n ? [s] : [s.slice(0, n), ...chunk(s.slice(n), n)];

console.log(solution('aabbaccc'));
console.log(solution('ababcdcdababcdcd'));
console.log(solution('abcabcdede'));
console.log(solution('abcabcabcabcdededededede'));
console.log(solution('xababcdcdababcdcd'));
