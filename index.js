//? 문제 : K번째 큰 수

// 1부터 100 자연수가 적힌 N장의 카드
// 이 중 3장을 뽑아 합한 값을 기록
// 기록한 값 중 K번째 큰수를 출력
// K번째가 존재하지 않으면 -1

const solution = (n, k, arr) => {
	let answer = 0;
	let len = arr.length;
	let el = new Set();

	// arr에서 3장을 뽑아 기록
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len; j++) {
			if (i !== j) {
				for (let a = 0; a < len; a++) {
					if (a !== j && a !== i) {
						el.add(arr[i] + arr[j] + arr[a]);
					}
				}
			}
		}
	}

	let list = [...el];
	list.sort((a, b) => b - a); // 내림차순 정렬

	console.log(list);
	list[k - 1] ? (answer = list[k - 1]) : (answer = -1);
	return answer;
};

let arr = [13, 15, 34, 23, 45, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));

//? 영상 풀이1
const solution2 = (n, k, arr) => {
	let answer;

	return answer;
};

console.log(solution2(10, 3, arr));
