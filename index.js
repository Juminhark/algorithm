//* Heap : 특정한 규칙을 가지는 트리로, 힙을 이용해 우선순위 큐를 구현

// 최댓값 및 최솟값을 찾아내는 연산을 빠르게 하기 위해 고안된 완전이진트리(complete binary tree)를 기본으로 한 자료구조(tree-based structure)
// A가 B의 부모노드(parent node) 이면, A의 키(key)값과 B의 키값 사이에는 대소관계가 성립한다
// 부모노드의 키값이 자식노드의 키값보다 항상 큰 힙을 '최대 힙', 부모노드의 키값이 자식노드의 키값보다 항상 작은 힙을 '최소 힙'
// 우선순위를 가진 노드 즉 부모노드가 항상 뿌리에 오게 하는 특징.

// 대부분의 경우는 자식노드의 개수가 최대 2개인 이진 힙(binary heap)

// 1번 작업중       [4 5 8 2 3]  => 우선순위를 결정하는것이 heap

// 우선순위 작업

// 중요도가 높은것이 상단으로
// 				8
// 		5       4
// 3    2
// [8, 5, 4, 3, 2]

//? 문제 : 더 맵게

// scoville 배열 안에 모든 값을 K 이상으로 만든다.
// 배열안에 가장 낮은 두개의 음식을 아래와 같이 섞는다
// 가장 맵지않은 음식 + (두번째로 맵지않은 음식 * 2)
// 모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우에는 -1을 return 합니다.

const spicy = (scoville, k) => {
	let count = 0;

	// 오름차순으로 정렬
	scoville.sort((a, b) => {
		return a - b;
	});
	// console.log(scoville);

	// 가장 맵지않은 음식의 스코빌 지수가 k 이상일때까지 반복
	while (scoville[0] < k && !isNaN(scoville[0])) {
		// 가장 맵지않은 음식
		let food1 = scoville.shift();
		let food2 = scoville.shift();

		let newFood = food1 + food2 * 2;
		scoville.unshift(newFood);

		//! 큐. 맵지않은 음식을 배열에서 다룰수있도록 오름차순으로 정렬.
		scoville.sort((a, b) => {
			return a - b;
		});
		count++;
		console.log(scoville);
	}

	// 모두 k 이상으로 만들수 없는 경우
	// 2개를 꺼내 작업할때 2번째로 꺼내진것이 undefined 가 됨으로
	// 연산 결과값이 NaN이 된다. 이 경우 -1 return
	if (isNaN(scoville[0])) {
		return -1;
	}

	return count;
};

// console.log(spicy([1, 2, 3, 9, 10, 12], 7));
// console.log(spicy([1, 2], 3));
// console.log(spicy([1, 1, 1, 1, 1], 7));
// console.log(spicy([1, 2, 3, 9, 10, 12], 110)); // 예외상황

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

const diskController = (arr) => {
	let answer = 0;
	let all = 0;
	let process = 0;
	let sec = 0;

	// 오름차순 정렬
	arr.sort((a, b) => {
		return a[0] - b[0];
	});

	let wait = []; // 우선순위 큐
	// 모든 작업이 완료되면 종료 =>
	while (process < arr.length || wait.length !== 0) {
		// 작업한 갯수 process.
		// sec는 현재 작업중은 process의 종료 시점.
		if (arr.length > process && sec >= arr[process][0]) {
			wait.push(arr[process++]);

			//! 우선순위 큐.
			//! 중요한것은 대기시간을 줄이는것.
			//! 각 요청 시점으로부터 작업량이 작은것.
			//! 위 조건을 만족하려면 대기중인것중에 작업량이 작은것 우선으로 진행.
			wait.sort((a, b) => {
				return a[1] - b[1];
			});
			continue;
		}
		console.log(wait);
		if (wait.length !== 0) {
			sec += wait[0][1];
			all += sec - wait[0][0];
			wait.shift();
		} else {
			sec = arr[process][0];
		}
	}

	answer = parseInt(all / arr.length);
	return answer;
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

//? 문제 : 이중우선순위 큐

// I 숫자 : 큐에 주어진 숫자를 삽입
// D 1 : 큐에서 최댓값을삭제
// D -1 : 큐에서 최솟값을 삭제

const dualPriorityQueue = (operations) => {
	let operationArr = [];
	let answer = [];
	while (operations.length !== 0) {
		let unit = operations.shift();
		operationArr.push(unit.split(' '));
	}

	console.log(operationArr);

	while (operationArr.length !== 0) {
		let unit = operationArr.shift();
		switch (unit[0]) {
			case 'I':
				answer.push(unit[1]);
				// 오름차순 정렬
				answer.sort((a, b) => {
					return a - b;
				});
				console.log(answer);
				break;
			case 'D':
				switch (Number(unit[1])) {
					case 1:
						answer.pop();
						break;
					case -1:
						answer.shift();
						break;
				}
				break;
		}
	}

	if (answer.length == 0) {
		return [0, 0];
	} else {
		let min = answer[0];
		let max = answer[answer.length - 1];
		return [Number(max), Number(min)];
	}
};

// const dualPriorityQueue2 = (operations) => {
// 	let list = [];
// 	operations.forEach((t) => {
// 		if (t[0] === 'I') {
// 			list.push(+t.split(' ')[1]);
// 		} else {
// 			if (!list.length) return;

// 			var val = (t[2] === '-' ? Math.min : Math.max)(...list);
// 			var delIndex = list.findIndex((t) => t === val);

// 			list.splice(delIndex, 1);
// 		}
// 	});

// 	return list.length ? [Math.max(...list), Math.min(...list)] : [0, 0];
// };

// console.log(dualPriorityQueue(['I 16', 'D 1']));
// console.log(dualPriorityQueue(['I 7', 'I 5', 'I -5', 'D -1']));
// console.log(dualPriorityQueue(['I 7', 'I 5', 'I -5', 'D -1', 'D 1']));
// console.log(dualPriorityQueue([]));

/////////////////////////////////////////////////////////////////////////

//* Sorting : 정렬

//? 문제 : 오름차순
// 다음 숫자들을 오른차순으로 정렬

const ascendingOrder = (str) => {
	let result = str.split(' ').sort((a, b) => {
		return a - b;
	});

	console.log(result);
	let answer = '';
	for (let i = 0; i < result.length; i++) {
		if (answer == '') {
			answer += result[i];
		} else {
			answer += ' ' + result[i];
		}
	}
	return answer;
};

// console.log(ascendingOrder('1 10 5 8 7 6 4 3 2 9'));

//? 문제 : K번째 수

// command : [a, b, c], arr에서 a번째부터 b번째까지 자른 것을 정렬했을때 c번째 원소
// command들의 결과값을 모은 배열을 return

const k = (arr, commands) => {
	let answer = [];
	while (commands.length !== 0) {
		let u = commands.shift();

		let unit = arr.slice(u[0] - 1, u[1]);
		// 오름차순
		unit.sort((a, b) => {
			return a - b;
		});
		console.log(unit);

		answer.push(unit[u[2] - 1]);
	}
	return answer;
};

console.log(
	k(
		[1, 5, 2, 6, 3, 7, 4],
		[
			[2, 5, 3],
			[4, 4, 1],
			[1, 7, 3],
		]
	)
);

//? 문제 : 가장 큰수

//

const largestNumber = (numbers) => {};

// console.log(largestNumber([6, 10, 2]));
// console.log(largestNumber([3, 30, 34, 5, 9]));
