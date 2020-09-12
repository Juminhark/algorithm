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

//* Map() : 객체를 key-value 쌍으로 저장하며 각 쌍의 삽입순서도 기억하는 콜렉션
//* key, value 는 객체와 원시값 모두 가능.

//* Object 와 Map 비교
//* Map 내장전에 Object를 사용. Map에 유용한 기능들이 추가.

//* 1. 의도치 않은 키
//* 2. key 자료형
//* 3. key 순서
//* 4. 크기
//* 5. 순회
//* 6. 성능

//! object로 풀었던 문제를 map으로 해보기
//? 문제 : 베스트 앨범

// 가장 많이 플레이된 노래 2개씩 모아 베스트 앨범 출시
// 가장 많이 플레이된 장르 먼저 출력

const bestObject = (genres, plays) => {
	let resultMap = {};
	for (let unit in genres) {
		if (resultMap[genres[unit]] == undefined) {
			// 선언
			resultMap[genres[unit]] = [];
			resultMap[genres[unit]].push([plays[unit], unit]);
		} else {
			resultMap[genres[unit]].push([plays[unit], unit]);
			resultMap[genres[unit]].sort((a, b) => {
				return b[0] - a[0];
			});
		}
	}

	console.log(resultMap);
	// 장르별 재생 횟수 비교.
	let genresMap = Object.keys(resultMap);
	console.log(genresMap);

	let result = [];
	for (let unit of genresMap) {
		let count = resultMap[unit].reduce((total, item) => {
			return item[0] + total;
		}, 0);
		result.push([count, unit]);
	}

	result.sort((a, b) => {
		return b[0] - a[0];
	});
	console.log(result);

	let answer = [];

	for (let i = 0; i < result.length; i++) {
		for (let j = 0; j < 2; j++) {
			console.log(j);
			if (resultMap[result[i][1]][j] !== undefined) {
				answer.push(Number(resultMap[result[i][1]][j][1]));
			}
		}
	}

	return answer;
};

console.log(
	bestObject(['classic', 'pop', 'classic', 'classic'], [500, 600, 150, 800])
);

// console.log(
// 	bestObject(
// 		['classic', 'pop', 'classic', 'classic', 'pop', 'jazz', 'jazz'],
// 		[500, 600, 150, 800, 2500, 700, 400]
// 	)
// );

const bestMap = (genres, plays) => {
	let resultMap = new Map();
	for (let unit in genres) {
		if (resultMap.get(genres[unit]) == undefined) {
			// 선언
			resultMap.set(genres[unit], []);

			resultMap.get(genres[unit]).push([plays[unit], unit]);
		} else {
			resultMap.get(genres[unit]).push([plays[unit], unit]);
			resultMap.get(genres[unit]).sort((a, b) => {
				return b[0] - a[0];
			});
		}
	}

	console.log(resultMap);
	// 장르별 재생 횟수 비교.
	let genresMap = resultMap.keys();
	console.log(genresMap);

	let result = [];
	resultMap.forEach((value, key, map) => {
		let count = value.reduce((total, item) => {
			return item[0] + total;
		}, 0);
		result.push([count, key]);
	});

	result.sort((a, b) => {
		return b[0] - a[0];
	});
	console.log(result);

	let answer = [];

	for (let i = 0; i < result.length; i++) {
		for (let j = 0; j < 2; j++) {
			if (resultMap.get(result[i][1])[j] !== undefined) {
				answer.push(Number(resultMap.get(result[i][1])[j][1]));
			}
		}
	}

	return answer;
};

console.log(
	bestMap(['classic', 'pop', 'classic', 'classic'], [500, 600, 150, 800])
);

// console.log(
// 	bestMap(
// 		['classic', 'pop', 'classic', 'classic', 'pop', 'jazz', 'jazz'],
// 		[500, 600, 150, 800, 2500, 700, 400]
// 	)
// );

/////////////////////////////////////////////////////////////

//* Heap : 특정한 규칙을 가지는 트리로, 힙을 이용해 우선순위 큐를 구현

// 최댓값 및 최솟값을 찾아내는 연산을 빠르게 하기 위해 고안된 완전이진트리(complete binary tree)를 기본으로 한 자료구조(tree-based structure)
// A가 B의 부모노드(parent node) 이면, A의 키(key)값과 B의 키값 사이에는 대소관계가 성립한다
// 부모노드의 키값이 자식노드의 키값보다 항상 큰 힙을 '최대 힙', 부모노드의 키값이 자식노드의 키값보다 항상 작은 힙을 '최소 힙'
// 우선순위를 가진 노드 즉 부모노드가 항상 뿌리에 오게 하는 특징.

// 대부분의 경우는 자식노드의 개수가 최대 2개인 이진 힙(binary heap)

// javscript

// 1번 작업중       [4 5 8 2 3]  => 우선순위를 결정하는것이 heap

// 우선순위 작업

// 중요도가 높은것이 상단으로
// 8
// 5       4
// 3  2
// [8, 5, 4, 3, 2]

//? 문제 : 디스크 컨트롤러

// [[0, 3], [1, 9], [2, 6]] : 해야될 작업들
// [시작시점, 작업시간]
// 작업별 평균소요 시간이 가장 작은것을 return

//  [0, 3] 이후 [1, 9] 먼저하면
// 0초부터 3초 흐른 시점에 작업 종료
// (0초 요청부터 3초 종료까지 3ms)
// 1번째 작업이 종료되는 3초부터 9초가 흐린 12초 시점에 2번째 작업종료
// (1초에 요청부터 12초 종료까지 11ms)
// 2번째 작업이 종료되는 12초부터 6초가 흐른 18초 시점에 3번째 작업 종료
// (2초 요청부터 18초 종료까지 16ms)
// 평균 : (3+11+16)/ 3 = 10ms

//  [0, 3] 이후 [2, 6] 먼저하면
// 0초부터 3초 흐른 시점에 작업 종료
// (0초 요청부터 3초 종료까지 3ms)
// 1번째 작업이 종료되는 3초부터 6초가 흐린 9초 시점에 2번째 작업종료
// (2초에 요청부터 9초 종료까지 7ms)
// 2번째 작업이 종료되는 9초부터 9초가 흐른 18초 시점에 3번째 작업 종료
// (1초 요청부터 18초 종료까지 17ms)
// 평균 : (3+7+17)/ 3 = 9ms

// 9

const diskController = (arr) => {
	arr.sort((a, b) => {
		return a[0] - b[0];
	});

	console.log(arr);

	let sec = 0;
	// sec ++ 시간 흐르게 하면서 하나씩 처리
	// 1번째 작업 동안 시작되는것을 대기 목록에 넣는다.
	// 1번째 작업이 끝나면 요청 시점부터 종료시점의 차이를 기록.
};

// console.log(
// 	diskController([
// 		[0, 3],
// 		[1, 9],
// 		[2, 6],
// 	])
// ); // 9

// console.log(
// 	diskController([
// 		[0, 3],
// 		[2, 6],
// 		[1, 9],
// 	])
// ); // 9

// console.log(
// 	diskController([
// 		[0, 5],
// 		[2, 6],
// 		[1, 4],
// 		[3, 7],
// 	])
// ); // 9
