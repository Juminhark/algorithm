// Greedy : 탐욕 알고리즘
// 큰 경우부터 찾는 경우와 같이 간단하게 탐욕적으로 문제를 해결하는 기법

// 거스름돈 문제
// const solution = (value) => {
// 	let answer = '';
// 	let changes = [50000, 10000, 5000, 1000, 500, 100, 50, 10]; // 화폐 종류
// 	let remainder = value;

// 	for (let i = 0; i < changes.length; i++) {
// 		if (remainder >= changes[i]) {
// 			let count = parseInt(remainder / changes[i]);
// 			remainder = remainder % changes[i];

// 			answer += `${changes[i]} : ${count}개 \n`;
// 		} else {
// 			answer += `${changes[i]} : 0개 \n`;
// 		}
// 	}
// 	return answer;
// };

// console.log(solution(126560));
// console.log(solution(32660));
// console.log(solution(1000));

// 설탕 배달
// const solution = (value) => {
// 	let answer = 0;
// 	let answerMap = []; // 봉지 종류
// 	let remainder = 0;
// 	let max = parseInt(value / 3);

// 	for (let i = 0; i < max + 1; i++) {
// 		remainder = value - 3 * i;
// 		if (remainder % 5 == 0) {
// 			let count = i + parseInt(remainder / 5);
// 			answerMap.push(count);
// 		} else if (remainder == 0) {
// 			answerMap.push(i);
// 		} else {
// 			answerMap.push(-1);
// 		}
// 	}

// 	// 오름차순 : 작은것이 앞에
// 	answerMap.sort(function (a, b) {
// 		return a - b;
// 	});
// 	// 배열 안에서 -1이 아닌것이 있다면 그중에서 가장 작은것. -1만 있으면 그것.
// 	for (let i = 0; i < answerMap.length; i++) {
// 		if (answerMap[i] !== -1) {
// 			return answerMap[i];
// 		} else {
// 			answer = -1;
// 		}
// 	}

// 	return answer;
// };

// console.log(solution(18)); // 4
// console.log(solution(4)); //-1
// console.log(solution(6)); // 2
// console.log(solution(9)); //3
// console.log(solution(11)); //3

// 체육복

// n : 전체학생 수
// lost : 체육복을 잃어버린 학생 번호의 배열
// reserve : 여분 체육복을 가진 학생 번호의 배열
// 여분체육복은 자신을 포함해 자기번호의 앞뒤 번호의 학생에게 대여가능.

// const solution = (n, lost, reserve) => {
// 	let resultMap = [];
// 	lost.sort(function (a, b) {
// 		return a - b;
// 	});

// 	reserve.sort(function (a, b) {
// 		return a - b;
// 	});

// 	for (let i = 0; i < lost.length; i++) {
// 		let j = 0;
// 		while (j < reserve.length) {
// 			if (reserve[j] == lost[i]) {
// 				resultMap.push(lost[i]);
// 				reserve.splice(j, 1);
// 				break;
// 			}
// 			j++;
// 		}
// 	}

// 	for (let i = 0; i < lost.length; i++) {
// 		let j = 0;
// 		while (j < reserve.length) {
// 			if (reserve[j] == lost[i] - 1 || reserve[j] == lost[i] + 1) {
// 				resultMap.push(lost[i]);
// 				reserve.splice(j, 1);
// 				break;
// 			}
// 			j++;
// 		}
// 	}

// 	// console.log(resultMap);

// 	resultMap.map((remove) => {
// 		for (let i = 0; i < lost.length; i++) {
// 			if (lost[i] == remove) {
// 				lost.splice(lost.indexOf(lost[i]), 1);
// 			}
// 		}
// 	});

// 	return n - lost.length;
// };

// const solution = (n, lost, reserve) => {
// 	return (
// 		n -
// 		lost.filter((a) => {
// 			// lost의 요소인 a
// 			// a가 reserve의 요소인 r과  r-1, r, r+1  관계면 b 에 할당
// 			const b = reserve.find((r) => Math.abs(r - a) <= 1);

// 			// 할당 된 b 가 존재하면 true
// 			// return true를 통해 filter를 통과한 a 요소는 새로운 배열에 담긴다.
// 			if (!b) return true;

// 			// r !== b 만족하는 r 만 새로운 배열에 담는다.
// 			reserve = reserve.filter((r) => r !== b);
// 		}).length
// 	);
// };

// filter(callback): function : callback 처리후 새로운 배열을 반환
// find(): function : callback을 만족하는 첫번째 요소를 반환

// console.log(solution(5, [2, 4], [1, 3, 5])); // 5
// console.log(solution(5, [2, 4], [3])); // 4
// console.log(solution(3, [3], [1])); // 2
// console.log(solution(5, [1, 2], [2, 3])); // 4
// console.log(solution(3, [1, 2], [2, 3])); // 2
// console.log(solution(3, [1, 2, 3], [1, 2, 3])); // 3
// console.log(solution(7, [2, 3, 4], [1, 2, 3, 6])); // 6
// console.log(solution(5, [2, 3, 4], [3, 4, 5])); // 4

// filter(callback): function : callback 처리후 새로운 배열을 반환
// find(): function : callback을 만족하는 첫번째 요소를 반환

// 큰 수 만들기

// n 에서 k개를 제거했을때 가장 큰 숫자 구하기

// const solution = (number, k) => {

//   let stack = []; // b : 최종 글자들이 저장될 스택 (숫자가 큰!)
// 	for (var i = 0; i < number.length; i++) {
// 		// 모든 숫자 비교
// 		var now = number[i]; // 현재 인덱스 숫자. 처음에는 그냥 push
// 		console.log('now : ' + now);
// 		// 무조건 push 하고 다음 for 문에서 이전인덱스 숫자와 나랑 비교해서 현재인덱스가 이전인덱스보다 크면 pop하고 넣어줌. 제거하는 숫자인 (k)를 1 감소
// 		// 제거할 숫자를 다 채웠으면 그냥 넣음
// 		while (k > 0 && stack[stack.length - 1] < now) {
// 			stack.pop();
// 			console.log(stack);
// 			k--;
// 		}
// 		stack.push(now);
// 	}
// 	// k가 0일 경우 스택은 그대로,
// 	// but k가 남아있으면 뒤에서부터 제거해준다. (ex. 1010,2 -> 11)
// 	stack.splice(stack.length - k, k);
// 	var answer = stack.join('');

// 	return answer;
// };

// console.log(solution('1924', 2));
// console.log(solution('1231234', 3));
// console.log(solution('4177252841', 4));
