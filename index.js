// https://github.com/trekhleb/javascript-algorithms

//? 문제 : 후보키

// const candidateKey = (arr) => {
// 	let count = 0;
// 	let index = [0, 1, 2, 3];

// 	const combinations = (arr, k) => {
// 		let combs = [];
// 		let head = 0;
// 		let tailCombs = 0;

// 		if (k > arr.length || k <= 0) {
// 			return [];
// 		}

// 		if (k == arr.length) {
// 			return [arr];
// 		}

// 		if (k == 1) {
// 			combs = [];
// 			for (i = 0; i < arr.length; i++) {
// 				combs.push([arr[i]]);
// 			}
// 			return combs;
// 		}

// 		for (let i = 0; i < arr.length - k + 1; i++) {
// 			head = arr.slice(i, i + 1); // start , end (end미포함)
// 			tailCombs = combinations(arr.slice(i + 1), k - 1);
// 			for (let j = 0; j < tailCombs.length; j++) {
// 				combs.push(head.concat(tailCombs[j]));
// 			}
// 		}

// 		return combs;
// 	};

// 	console.log(combinations(index, 2));
// 	// unit 인것을 찾으면 index에서 제거.

// 	const arrayCompareOneUnit = (arr) => {
// 		for (let i = 0; i < arr.length; i++) {
// 			let t = arr.slice();
// 			let a = arr[i][0]; // 비교대상
// 			console.log('a : ' + a);
// 			t.splice(i, 1); // 비교대상을 제외한 나머지
// 			console.log(t);

// 			if (
// 				t.every((item) => {
// 					console.log('item[0] : ' + item[0]);
// 					return item[0] !== a;
// 				})
// 			) {
// 				// 배열안에 모든원소가 다를때
// 				console.log('다르다');
// 			} else {
// 				console.log('같은것이 있다.');
// 				break;
// 			}
// 		}
// 	};

// 	let compare = [];

// 	for (let j = 1; j < 4; j++) {
// 		let resultMap = combinations(index, j);

// 		for (let unit of resultMap) {
// 			console.log(unit);
// 			for (let i = 0; i < arr.length; i++) {
// 				let temp = [];
// 				// console.log(i);
// 				for (let u of unit) {
// 					// console.log(u);
// 					temp.push(arr[i][u]);
// 				}
// 				compare.push(temp);
// 			}
// 			console.log(compare);
// 			// 2중 배열안에 배열의 중복 여부
// 			console.log(arrayCompareOneUnit(compare));

// 			compare = [];
// 		}
// 	}

// 	// return count;
// };

// console.log(
// 	candidateKey([
// 		['100', 'ryan', 'music', '2'],
// 		['200', 'apeach', 'math', '2'],
// 		['300', 'tube', 'computer', '3'],
// 		['400', 'con', 'computer', '4'],
// 		['500', 'muzi', 'music', '3'],
// 		['600', 'apeach', 'music', '2'],
// 	])
// );

//======================================================
