const solution = (board, moves) => {
	let answer = 0;
	let result = [];

	moves.map((r) => {
		for (let i = 0; i < board.length; i++) {
			if (board[i][r - 1] !== 0) {
				result.push(board[i][r - 1]);
				board[i][r - 1] = 0;
				break;
			}
		}
		// result 안에 같은거 2개 있으면 없앤다
		if (result.length > 1) {
			if (result[result.length - 2] == result[result.length - 1]) {
				result.pop();
				result.pop();
				answer += 2;
			}
		}
	});

	return answer;
};

console.log(
	solution(
		[
			[0, 0, 0, 0, 0],
			[0, 0, 1, 0, 3],
			[0, 2, 5, 0, 1],
			[4, 2, 4, 4, 2],
			[3, 5, 1, 3, 1],
		],
		[1, 5, 3, 5, 1, 2, 1, 4]
	)
);
