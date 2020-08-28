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

// 다음 숫자들을 오른차순으로 정렬하는 프로그램
// const solution = (str) => {
// 	let result = str.split(' ').sort((a, b) => {
// 		return a - b;
// 	});

// 	console.log(result);
// 	let answer = '';
// 	for (let i = 0; i < result.length; i++) {
// 		if (answer == '') {
// 			answer += result[i];
// 		} else {
// 			answer += ' ' + result[i];
// 		}
// 	}
// 	return answer;
// };

// console.log(solution('1 10 5 8 7 6 4 3 2 9'));
