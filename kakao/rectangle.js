// 직사각형의 3점이 주어질때 다른 1점을 유추하기

const solution = (V) => {
	let answer = [];

	let x = [];

	let y = [];

	V.map((v) => {
		x.push(v[0]);
		y.push(v[1]);
	});

	console.log(x);
	console.log(y);

	const remove = (arr) => {
		let r = arr.pop();
		console.log('r : ' + r);
		console.log(arr);
		if (arr.includes(r)) {
			arr.splice(arr.indexOf(r), 1);
			answer.push(arr[0]);
		} else {
			answer.push(r);
		}
		console.log(arr);
	};

	remove(x);
	remove(y);

	return answer;
};

// console.log(
// 	solution([
// 		[1, 4],
// 		[3, 4],
// 		[3, 10],
// 	])
// );

console.log(
	solution([
		[1, 1],
		[2, 2],
		[1, 2],
	])
);
