//? 문제 : 후보키

const candidateKey = (arr) => {
	const index = [0, 1, 2, 3];

	const combinations = (arr, k) => {
		let combs = [];
		let head = 0;
		let tailCombs = 0;

		if (k > arr.length || k <= 0) {
			return [];
		}

		if (k == arr.length) {
			return [arr];
		}

		if (k == 1) {
			combs = [];
			for (i = 0; i < arr.length; i++) {
				combs.push([arr[i]]);
			}
			return combs;
		}

		for (let i = 0; i < arr.length - k + 1; i++) {
			head = arr.slice(i, i + 1); // start , end (end미포함)
			tailCombs = combinations(arr.slice(i + 1), k - 1);
			for (let j = 0; j < tailCombs.length; j++) {
				combs.push(head.concat(tailCombs[j]));
			}
		}

		return combs;
	};

	console.log(combinations(index, 2));
	// unit 인것을 찾으면 index에서 제거.

	let compare = [];

	// for (let unit of combinations(index, 1)) {
	// 	for (let i = 0; i < arr.length; i++) {
	// 		compare.push(arr[i][unit]);
	// 	}
	// 	console.log(compare);
	// 	compare = [];
	// }
	for (let j = 1; j < 4; j++) {
		let resultMap = combinations(index, j);

		for (let unit of resultMap) {
			console.log(unit);
			for (let i = 0; i < arr.length; i++) {
				let temp = [];
				// console.log(i);
				for (let u of unit) {
					// console.log(u);
					temp.push(arr[i][u]);
				}
				compare.push(temp);
			}
			console.log(compare);
			// compare에 중복값이 있는지 확인
			console.log(compare[0]);
			console.log(compare[1]);
			compare = [];
		}
	}

	// 배열안에 모든 원소가 다른지 확인
	// 	const check = (ar) => {
	// 		ar.length =>
	// a of ar
	// ar: +1
	// ar == ar.length

	// 		return 1
	// 	}
	// };

	// 자신 자신을 포함하고 있는 또다른 배열을 지운다
	// f(3) => f(2) + 1 => 점화식 ㅇ
	// 재귀  => 재귀

	// return arr.length;
};

console.log(
	candidateKey([
		['100', 'ryan', 'music', '2'],
		['200', 'apeach', 'math', '2'],
		['300', 'tube', 'computer', '3'],
		['400', 'con', 'computer', '4'],
		['500', 'muzi', 'music', '3'],
		['600', 'apeach', 'music', '2'],
	])
);
