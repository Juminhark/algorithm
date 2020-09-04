//* 알고리즘 성능 평가

//* Complexity : 복잡도
// 1. 시간 복잡도 : 수행 시간 분석
// 2. 공간 복잡도 : 메모리 사용량 분석
// 복잡도가 낮을수록 좋은 알고리즘

//* Big-O Notation : 빅오 표기법
// 차수가 큰것을 고려
// ex) 3N^3 + 5N^2 + 10000000  => O(N^3)

// O(1) : 상수 시간
// O(logN) : 로그 시간
// O(N) : 선형 시간
// O(NlogN) : 로그 선형 시간
// O(N^2) : 이차 시간
// O(N^3) : 삼차 시간
// O(2^N) : 지수 시간

// N의 범위
// 500 => O(N^3)
// 2,000 => O(N^2)
// 100,000 => O(NlogN)
// 10,000,000 => O(N)

//* 알고리즘 문제 해결 과정
// 1. 지문 읽기 및 컴퓨터적 사고
// 2. 요구사항(복잡도) 분석
// 3. 문제 해결을 위한 아이디어 찾기
// 4. 소스코드 설계 및 코딩

//! 출제자는 핵심 아이디어를 캐치한다면 간결하게 소스코드를 작성할수있는 형태로 출제

//* DFS / BFS : 그래프 탐색 알고리즘

// Stack 자료구조 : 나중에 들어온 data가 먼저 나가는 구조

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

// Queue 자료구조 : 먼저 들어온 data가 먼저 나가는 구조

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

//* Recursive Function : 재귀 함수
// 자기 자신을 다시 호출하는 함수를 의미한다.

const recursive = (i) => {
	// 종료 조건 암시
	if (i == 5) {
		return;
	}

	console.log(i, '재귀 함수에서 ', i + 1, '번째 재귀함수를 호출');
	recursive(i + 1);
	console.log(i, '번째 재귀함수 종료');
};

// recursive(1);

//? 문제 : 팩토리얼 구현
// n! = 1 x 2 x 3 x ... x (n-1) x n
// 0! = 1! = 1

// 반복문으로 구현
const factorial_iterative = (num) => {
	let result = 1;

	for (let i = 1; i < num + 1; i++) {
		result *= i;
	}

	return result;
};
// console.log(factorial_iterative(4));

// 점화식을 이용해 재귀적으로 구현
const factorial_recursive = (num) => {
	if (num > 1) {
		return num * factorial_recursive(num - 1);
	} else {
		return 1;
	}
};

// console.log(factorial_recursive(4));

//* DFS(Depth-First Search) : 깊이 우선 탐색
// DFS는 Stack 자료구조를 이용.
// 1. 탐색 시작 노드를 stack에 삽입하고 방문처리
// 2. stack의 최상단 노드에 방문하지 않은 인접한 노드가 하나라도 있으면
// 그 노드를 스택에 넣고 방문 처리. 없다면 스택에서 최상단 노드를 꺼낸다
// 3. 더 이상 2. 과정을 수행할수 없을 때 까지 반복.

//! 수학적으로 반복문으로 작성했을때와 종료조건이 명시된 재귀함수로 작성했을때 시간복잡도는 동일
//! 그러나 기계연산구조상  stack 구조를 사용하지 않는, 반복문이 재귀함수보다 빠르게 동작한다.
//! DFS(stack-재귀), BFS(반복문) 모두 풀수있다면 BFS로 푸는것이 빠르게 동작한다.

//? 문제 : target number

// 사용할 수 있는 숫자가 담긴 배열 numbers,
// 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 빼서
// 타깃 넘버를 만드는 방법의 수를 return

function solution(numbers, target) {
	var answer = 0;
	let sum = 0;

	const dfs = (numbers, target, node) => {
		if (node === numbers.length) {
			console.log(numbers);
			sum = 0;
			for (let num of numbers) {
				sum += num;
			}
			if (sum === target) {
				return answer++;
			}
		} else {
			numbers[node] *= 1;
			dfs(numbers, target, node + 1);

			numbers[node] *= -1;
			dfs(numbers, target, node + 1);
		}
	};
	dfs(numbers, target, 0);
	return answer;
}

// console.log(solution([1, 1, 1, 1, 1], 3));
