//? 문제 : [1차]프렌즈 4블록

const solution = (m, n, board) => {
	let arr = [];
	let remove = [];
	let newArr = [];
	let count = 0;

	for (let i = 0; i < board.length; i++) {
		arr.push(board[i].split(''));
	}

	// 배열 반전
	for (let i = 0; i < n; i++) {
		let a = [];
		for (let j = 0; j < m; j++) {
			a.push(arr[j][i]);
		}
		newArr.push(a);
		a = [];
	}

	while (true) {
		for (let i = 0; i < n - 1; i++) {
			for (let j = 0; j < m - 1; j++) {
				let d = newArr[i][j];
				if (
					d == newArr[i][j + 1] &&
					d == newArr[i + 1][j] &&
					d == newArr[i + 1][j + 1] &&
					d !== 0
				) {
					remove.push([i, j]);
				}
			}
		}

		if (remove.length == 0) {
			break;
		}
		let line = new Set();

		while (remove.length !== 0) {
			let a = remove.pop();
			// 삭제 할것을  0 으로 바꿔준다.
			line.add(a[0]);
			newArr[a[0]].splice(a[1], 2, 0, 0);
			line.add(a[0] + 1);
			newArr[a[0] + 1].splice(a[1], 2, 0, 0);
		}
		let one = 0;
		line.forEach((v) => {
			let reg = /^[A-Z]$/;
			newArr1 = newArr[v].filter((word) => reg.test(word));
			one = newArr[v].length - newArr1.length;
			while (one > 0) {
				newArr1.unshift(0);
				one--;
			}
			newArr[v] = newArr1;
		});
	}

	for (let i = 0; i < newArr.length; i++) {
		for (let j = 0; j < newArr[0].length; j++) {
			if (newArr[i][j] == 0) {
				count++;
			}
		}
	}

	return count;
};

console.log(solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF'])); // 14
console.log(
	solution(6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ'])
); // 15
console.log(solution(2, 2, ['AA', 'AA'])); // 4
console.log(solution(2, 2, ['AA', 'AB'])); // 0
console.log(solution(3, 2, ['AA', 'AA', 'AB'])); // 4
console.log(solution(4, 2, ['CC', 'AA', 'AA', 'CC'])); // 8
console.log(solution(6, 2, ['DD', 'CC', 'AA', 'AA', 'CC', 'DD'])); // 12
console.log(solution(8, 2, ['FF', 'AA', 'CC', 'AA', 'AA', 'CC', 'DD', 'FF'])); // 8
console.log(solution(6, 2, ['AA', 'AA', 'CC', 'AA', 'AA', 'DD'])); //  8
