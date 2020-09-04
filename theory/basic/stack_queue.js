//* Stack 자료구조 : 나중에 들어온 data가 먼저 나가는 구조

let stack = [];
stack.push(5);
stack.push(2);
stack.push(3);
stack.push(7);
stack.pop();
stack.push(1);
stack.push(4);
stack.pop();
// console.log(stack);
// console.log(stack.reverse());

// arr.push() : 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환
// arr.pop() : 배열의 마지막 요소를 제거하고 그 요소를 반환
// arr.reverse() : 배열의 요소 순서를 반전

//* Queue 자료구조 : 먼저 들어온 data가 먼저 나가는 구조

let queue = [];
queue.push(5);
queue.push(2);
queue.push(3);
queue.push(7);
queue.shift();
queue.push(1);
queue.push(4);
queue.shift();
// console.log(queue);
// console.log(queue.reverse());

// arr.shift() : 배열에서 첫 번째 요소를 삭제하고 그 요소를 반환.

//? 문제: 기능개발
// 각 기능은 진도가 100%일 때 서비스에 반영
// 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses
// 각 작업의 개발 속도가 적힌 정수 배열 speeds

const developmentFunction = (progresses, speeds) => {
	let result = [];
	let answer = [];

	// 각 progresses 에 speed를 반복적으로 더해 완료 일자를 구한다
	for (let f in progresses) {
		let count = 0;
		while (progresses[f] < 100) {
			progresses[f] += speeds[f];
			count++;
		}
		result.push(count);
	}
	console.log('기능 별 완료 일자');
	console.log(result);

	let max = result.shift();
	let next = 1;

	//! stack 자료 구조를 사용.
	//! 이 작업을 위의 for문 안에서 해결 가능.
	while (result.length !== 0) {
		let a = result.shift();
		if (max < a) {
			max = a;
			answer.push(next);
			next = 1;
		} else {
			next++;
		}
		if (result.length == 0) {
			answer.push(next);
		}
	}

	return answer;
};

// console.log(developmentFunction([93, 30, 55], [1, 30, 5]));
console.log(developmentFunction([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));

//? 문제 : 다리를 지나는 트럭
