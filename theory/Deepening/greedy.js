//*  Greedy : 탐욕법
// 큰 경우부터 찾는 경우와 같이 간단하게 탐욕적으로 문제를 해결하는 기법
//! 정당성 : 단순히 가장 좋아 보이는것을 반복적으로 선택해도 최적의 해를 구할수있는지 검토

//     [5]
// 5:  [7, 10, 8]
// 7: [7,5,9], 10: [4,3], 8:[1,4,5]

// 각줄에서 1개씩 선택된 배열중 요소들의 합이 가장 큰경우
// greedy면 [5,10,4] 를 선택. => 19
// 올바른 답은 [5, 7, 9] 가 가장 크다. 이런경우 greedy를 쓰면안된다.

//? 대표적 문제 : 거스름돈
const change = (value) => {
	let count = 0;
	let moneys = [500, 100, 50, 10]; // 화폐 종류

	for (money of moneys) {
		count += parseInt(value / money);
		value %= money;
	}
	return count;
};

// console.log(change(1260));
// console.log(change(3260));
// console.log(change(1000));

// 정당성 : 큰 단위가 작은 단위의 배수이기 때문에
// 만약 [500, 400, 100]화폐로 800을 거슬러주면
// 500: 1, 100: 3 으로 4개로 주는것보다 400:2 로 2개가 최적의 해
// 이 경우 greedy로 보기 어렵다 => 이경우 DP

//? 문제 : 설탕 배달
const sugar = (value) => {
	let answer = 0;
	let answerMap = []; // 봉지 종류
	let remainder = 0;
	let max = parseInt(value / 3);

	for (let i = 0; i < max + 1; i++) {
		remainder = value - 3 * i;
		if (remainder % 5 == 0) {
			let count = i + parseInt(remainder / 5);
			answerMap.push(count);
		} else if (remainder == 0) {
			answerMap.push(i);
		} else {
			answerMap.push(-1);
		}
	}

	// 오름차순 : 작은것이 앞에
	answerMap.sort(function (a, b) {
		return a - b;
	});
	// 배열 안에서 -1이 아닌것이 있다면 그중에서 가장 작은것. -1만 있으면 그것.
	for (let i = 0; i < answerMap.length; i++) {
		if (answerMap[i] !== -1) {
			return answerMap[i];
		} else {
			answer = -1;
		}
	}

	return answer;
};

// console.log(sugar(18)); // 4
// console.log(sugar(4)); //-1
// console.log(sugar(6)); // 2
// console.log(sugar(9)); //3
// console.log(sugar(11)); //3

//? 문제 : 체육복

// n : 전체학생 수
// lost : 체육복을 잃어버린 학생 번호의 배열
// reserve : 여분 체육복을 가진 학생 번호의 배열
// 여분체육복은 자신을 포함해 자기번호의 앞뒤 번호의 학생에게 대여가능.

// const spare = (n, lost, reserve) => {
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
// 	resultMap.map((remove) => {
// 		for (let i = 0; i < lost.length; i++) {
// 			if (lost[i] == remove) {
// 				lost.splice(lost.indexOf(lost[i]), 1);
// 			}
// 		}
// 	});
// 	return n - lost.length;
// };

const spare = (n, lost, reserve) => {
	return (
		n -
		lost.filter((a) => {
			// lost의 요소인 a
			// a가 reserve의 요소인 r과  r-1, r, r+1  관계면 b 에 할당
			const b = reserve.find((r) => Math.abs(r - a) <= 1);

			// 할당 된 b 가 존재하면 true
			// return true를 통해 filter를 통과한 a 요소는 새로운 배열에 담긴다.
			if (!b) return true;

			// r !== b 만족하는 r 만 새로운 배열에 담는다.
			reserve = reserve.filter((r) => r !== b);
		}).length
	);
};

// filter(callback): function : callback 처리후 새로운 배열을 반환
// find(): function : callback을 만족하는 첫번째 요소를 반환

// console.log(spare(5, [2, 4], [1, 3, 5])); // 5
// console.log(spare(5, [2, 4], [3])); // 4
// console.log(spare(3, [3], [1])); // 2
// console.log(spare(5, [1, 2], [2, 3])); // 4
// console.log(spare(3, [1, 2], [2, 3])); // 2
// console.log(spare(3, [1, 2, 3], [1, 2, 3])); // 3
// console.log(spare(7, [2, 3, 4], [1, 2, 3, 6])); // 6
// console.log(spare(5, [2, 3, 4], [3, 4, 5])); // 4

// filter(callback): function : callback 처리후 새로운 배열을 반환
// find(): function : callback을 만족하는 첫번째 요소를 반환

//? 문제 : 큰 수 만들기

// n 에서 k개를 제거했을때 가장 큰 숫자 구하기

const bigNumber = (number, k) => {
	let stack = []; // b : 최종 글자들이 저장될 스택 (숫자가 큰!)
	for (var i = 0; i < number.length; i++) {
		// 모든 숫자 비교
		var now = number[i]; // 현재 인덱스 숫자. 처음에는 그냥 push

		// 무조건 push 하고 다음 for 문에서 이전인덱스 숫자와 나랑 비교해서 현재인덱스가 이전인덱스보다 크면 pop하고 넣어줌. 제거하는 숫자인 (k)를 1 감소
		// 제거할 숫자를 다 채웠으면 그냥 넣음
		while (k > 0 && stack[stack.length - 1] < now) {
			stack.pop();
			k--;
		}
		stack.push(now);
	}
	// k가 0일 경우 스택은 그대로,
	// but k가 남아있으면 뒤에서부터 제거해준다. (ex. 1010,2 -> 11)
	stack.splice(stack.length - k, k);
	var answer = stack.join('');

	return answer;
};

console.log(bigNumber('1924', 2));
console.log(bigNumber('1231234', 3));
console.log(bigNumber('4177252841', 4));

//? 문제 : 1이 될때 까지

// n 이 1이 될 때까지 다음 두가지 중 선택하여 수행하는 최소 횟수.
// 1. n에서 1을 뺀다
// 2. n을 k로 나눈다 (n이 k로 나누어 떨어질때)

// n = 17, k = 4
// 1. 16 , 2. 4, 2. 1 => 3번 수행

// n에서 -1 하는것 보다 k로 나누는것이 n을 더욱 많이 줄이기 때문에
// 2. 연산을 많이 할수록 횟수가 줄어든다.

const one = (n, k) => {
	let result = 0;

	while (true) {
		if (n < k) {
			break;
		}
		if (n % k == 0) {
			n /= k;
			result += 1;
		} else {
			n -= 1;
			result += 1;
		}
	}

	result += n - 1;
	return result;
};

// console.log(one(42, 5));

//? 대표적 문제 : 곱하기 혹은 더하기

// 숫자로 이루어진 문자열 s 가 주어졌을 때, 숫자 사이에 x , + 연산자를 넣어
// 왼쪽부터 차례대로 계산되는 값중 가장 큰수.

// '02984' => ((((0 + 2) x 9) x 8) x 4) = 576

// 0,1 이 아닌경우 곱하기가 더 값이 크므로

const xorp = (s) => {
	let data = s.split('');
	let result = data[0];

	for (let i = 1; i < data.length; i++) {
		let num = data[i];
		if (num <= 1 || result <= 1) {
			result += num;
		} else {
			result *= num;
		}
	}
	return result;
};

// console.log(xorp('02984'));
// console.log(xorp('567'));
