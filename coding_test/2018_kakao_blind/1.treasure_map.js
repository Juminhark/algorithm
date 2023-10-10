//? 문제 : 비밀지도

const solution = (n, arr1, arr2) => {
	let answer = Array(n).fill('');

	const arrayToMatrix = (n, arr) => {
		let map = Array.from(Array(n), () => Array(n).fill(null));
		for (let i = 0; i < n; i++) {
			map[i][n - 1] = arr[i];
			for (let j = n - 1; j > 0; j--) {
				//  2로 나눈 값이 1보다 크면 그 값을 전 index
				if (parseInt(map[i][j] / 2) > 0) {
					map[i][j - 1] = parseInt(map[i][j] / 2);
					// 자기 자리에 2로 나눈 나머지
					map[i][j] %= 2;
				} else {
					map[i][j - 1] = 0;
				}
			}
		}
		return map;
	};

	let resultMap1 = arrayToMatrix(n, arr1);
	let resultMap2 = arrayToMatrix(n, arr2);

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (resultMap1[i][j] + resultMap2[i][j] > 0) {
				answer[i] += '#';
			} else {
				answer[i] += ' ';
			}
		}
	}

	return answer;
};

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));

const addZero = (n, s) => {
	return '0'.repeat(n - s.length) + s;
};

var solution2 = (n, a, b) =>
	a.map((a, i) =>
		(a | b[i]).toString(2).padStart(n, 0).replace(/0/g, ' ').replace(/1/g, '#')
	);
