//? 문제 : 졸업선물

// M : 한정 된 예산
// N : 학생수
// 상품하나를 50% 할인할수 있는 쿠폰
// 가격과 배송비를 합쳐서 예산안에
// 최대 몇명의 학생에게 선물을 사줄수 있는지 구하여라

// 첫번째 줄 N , M
// 두번쨰 줄부터 가격 / 배송비

// 5 28
// 6 6
// 2 2
// 4 3
// 4 5
// 10 3

// 4 [2 ,2]
// 7 [4, 3] // 11
// 9 [4 ,5] // 20
// 12 [6, 6] // 29
// 13 [10 3] // 28

//! 내풀이
const solution = (n, m, arr) => {
	let answer = 0;
	let count = 0;

	// 낮은 가격부터 더해가다가 예산을 벗어나면 쿠폰으로 할인하여 살수있는지 판단
	let len = arr.length;
	let ob = {};

	//
	for (let i = 0; i < len; i++) {
		let value = arr[i][0];
		let key = value + arr[i][1];
		ob[key] = value;
	}

	// console.log(ob);
	console.log(Object.keys(ob));

	let arr2 = [...Object.keys(ob)];

	while (answer < m) {
		count++;
		let el = Number(arr2.shift());
		// console.log(answer, el);
		answer += el;

		if (answer > m) {
			let j = answer - ob[el];
			if (j > m) {
				count--;
				answer -= el;
			}
		}
	}

	return count;
};

let arr = [
	[6, 6],
	[2, 2],
	[4, 3],
	[4, 5],
	[10, 3],
];

// console.log(solution(5, 28, arr));

//? 영상 풀이
const solution2 = () => {
	let answer;

	return answer;
};

console.log(solution2(arr));
