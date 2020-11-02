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
console.log(factorial_iterative(4));

// 점화식을 이용해 재귀적으로 구현
const factorial_recursive = (num) => {
	if (num > 1) {
		return num * factorial_recursive(num - 1);
	} else {
		return 1;
	}
};

console.log(factorial_recursive(4));

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

const targetNumber = (numbers, target) => {
	let answer = 0;
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
};

console.log(targetNumber([-1, 1, -1, 1, 1], 3));

//? 문제 : 음료수 얼려 먹기

// N X M 크기의 얼음 틀이 있을때 담을수 있는 부분 0, 칸막이 1로 채워진 행렬.
// 얼음이 담긴 틀의 상하좌우가 붙어있는경우 같은 덩이에 속할때
// 총 얼음 덩이의 개수

//  11111
//  11111
// 	11111
// 	00000
// 이경우 3덩이

//! DFS, BFS 둘다 사용 가능.

// DFS
// 1. 특정한 지점의 주변 상하좌우를 살펴본 뒤에 주변 지점 중에서 값이 0이면서
// 아직 방문하지 않은 지점이 있다면 해당 지점을 방문
// 2. 방문한 지점에서 다시 상하좌우를 살펴보면서 방문을 진행하는 과정을 반복하면,
// 연결된 모든 지점을 방문할수있다.
// 3. 모든 노드에 대하여 1~2번의 과정을 반복하며, 방문하지 않은 지점의 수를 카운트한다.

const ice = (n, m, arr) => {
	let result = 0;

	// dfs로 특정 노드를 방문하고 연결된 모든 노드들도 방문
	const dfs = (x, y) => {
		// 주어진 범위를 벗어나는 경우 종료
		if (x <= -1 || x >= n || y <= -1 || y >= m) return false;

		// 현재 노드를 아직 방문하지 않앗다면
		if (arr[x][y] == 0) {
			// 해당 노드 방문 처리
			arr[x][y] = 1;
			// 상하좌우 위치들도 재귀로 호출
			dfs(x - 1, y);
			dfs(x, y - 1);
			dfs(x + 1, y);
			dfs(x, y + 1);
			return true;
		}
		return false;
	};

	// 모든 노드(위치)에 대하여 검사
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			// 현재 위치에서 dfs 수행
			if (dfs(i, j) == true) {
				result += 1;
			}
		}
	}

	return result;
};

console.log(
	ice(4, 5, [
		[0, 0, 1, 1, 0],
		[0, 0, 0, 1, 1],
		[1, 1, 1, 1, 1],
		[0, 0, 0, 0, 0],
	])
);

//? 문제 : 미로탈출

// n x m 직사각형 미로. (1, 1)에서 시작 (n,m)에서 종료
// 종료 지점에서의 최단거리를 return
// bfs는 가장 가까운 노드부터 방문.

const maze = (n, m, arr) => {
	//  동, 서, 남, 북
	dx = [0, 0, 1, -1];
	dy = [1, -1, 0, 0];

	const bfs = (x, y) => {
		let q = [];
		q.push([x, y]);

		// 큐가 빌 때까지
		while (q.length !== 0) {
			console.log(q);
			let unit = q.shift();
			let x = unit[0];
			let y = unit[1];
			// 현재위치에서 4가지 방향으로의 위치 확인
			for (let i = 0; i < 4; i++) {
				nx = x + dx[i];
				ny = y + dy[i];
				// 미로 찾기 공간을 벗어난 경우 무시
				if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
					continue;
				}
				// 벽인 경우 무시
				if (arr[nx][ny] == 0) {
					continue;
				}
				// 해당 노드를 처음 방문하는 경우에만 최단 거리 기록
				if (arr[nx][ny] == 1) {
					arr[nx][ny] = arr[x][y] + 1;
					q.push([nx, ny]);
				}
			}
		}
		console.log(arr);
		return arr[n - 1][m - 1];
	};
	// bfs를 수행한 결과 출력
	return bfs(0, 0);
};

// console.log(
// 	maze(5, 6, [
// 		[1, 0, 1, 0, 1, 0],
// 		[1, 1, 1, 1, 1, 1],
// 		[0, 0, 0, 0, 0, 1],
// 		[1, 1, 1, 1, 1, 1],
// 		[1, 1, 1, 1, 1, 1],
// 	])
// );

//? 문제 : 특정 거리의 도시찾기

// 1번 부터 n번까지의 도시와 m개의 단방향 도로가 존재한다. 모든 도리의 거리는 1이다.
// 특정도시 x 로 부터 출발하여 도달할수 있는 도시중에서, 최단거리가 k인 모든 도시들의 번호를 출력.

const city1 = (n, m, k, x, arr) => {
	let graph = Array.from(Array(n), () => []);
	let visited = Array(n).fill(0); // 방문여부
	let distance = Array(n).fill(0); // 도시별 거리

	arr.map((a) => {
		graph[a[0] - 1].push(a[1]);
	});

	// 시작 도시 x
	const bfs = (graph, start) => {
		let q = [];
		q.push(start - 1);
		// start = 1
		// q = 0;
		visited[start - 1] = 1;
		// visited = [1, 0, 0, 0]
		distance[start - 1] = 0;
		// distance = [0, 0, 0, 0] => [0, 1 , 1, 2]

		while (q.length !== 0) {
			let unit = q.shift();
			for (let nv of graph[unit]) {
				// nv = [2, 3]
				if (visited[nv - 1] == 0) {
					// 2번
					q.push(nv - 1); // [2] - 3 4
					visited[nv - 1] = 1;
					distance[nv - 1] = distance[unit] + 1;
				}
			}
		}
	};

	bfs(graph, x);

	let result = [];
	for (let i in distance) {
		if (distance[i] == k) {
			result.push(Number(i) + 1);
		}
	}

	return result;
};

// console.log(
// 	city1(4, 4, 1, 1, [
// 		[1, 2],
// 		[1, 3],
// 		[2, 3],
// 		[2, 4],
// 	])
// );

const city2 = (n, m, k, x, arr) => {
	// 도시개수 n, 단방향도로 개수 m, 최단거리 k, 시작 도시, x, 단방향 표기 arr
	let graph = {};
	for (let i = 1; i < n + 1; i++) {
		graph[i] = [];
	}
	// console.log(graph);

	// 단방향 도로 확인
	for (let i = 0; i < arr.length; i++) {
		graph[arr[i][0]].push(arr[i][1]);
	}
	// 도시 : 이도시가 갈수있는 도시
	console.log(graph);

	// 모든 도시에 대한 최단 거리 초기화 : 인덱스 맞춰주기 위해 n+1
	let distance = Array(n + 1).fill(-1);
	distance[x] = 0;
	console.log(distance);

	// bfs 수행
	let q = [x];
	while (q.length !== 0) {
		let now = q.shift();
		console.log('now ' + now);
		// 현재 도시에서 이동할 수 있는 모든 도시를 확인
		graph[now].forEach((next_node) => {
			console.log('next_node ' + next_node);
			// 아직 방문하지 않은 도시 라면
			if (distance[next_node] == -1) {
				distance[next_node] = distance[now] + 1;
				q.push(next_node);
			}
		});
	}

	console.log(distance);

	// 최단 거리가 k인 모든 도시의 번호를 출력
	let result = [];
	for (let i = 0; i < n + 1; i++) {
		if (distance[i] == k) {
			result.push(Number(i));
		}
	}
	// 없으면 -1 출력
	if (result.length == 0) {
		result = -1;
	}

	return result;
};

// console.log(
// 	city2(4, 4, 2, 1, [
// 		[1, 2],
// 		[1, 3],
// 		[2, 3],
// 		[2, 4],
// 	])
// );

//? 문제 : 경쟁적 전염

// n x n 시험관의 각 시험관에는 바이러스가 존재할수 있다.
// 바이러스의 종류는 1 ~ k 까지 있으며 각 바이러스는 상, 하, 좌, 우의 방향으로 증식.
// 매초 번호가 낮은 종류의 바이러스 먼저 증식. 시험관에 바이러스가 있다면 교차 감염되지않는다.
// s초 후의 (x, y) 위치에 존재하는 바이러스를 출력

const infection = (n, k, arr, s, x, y) => {
	// n: 시험관 사이즈, k는 바이러스 종류,  arr 시험관의 상태
	// s초 후의 (x, y)의 상태

	// 바이러스에 대한 정보
	let data = [];

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (arr[i][j] !== 0) {
				// 바이러스 종류, 시간, 위치 x, y
				data.push([arr[i][j], 0, i, j]);
			}
		}
	}

	// 바이러스 증식 순서로 정렬
	data.sort();
	console.log(data);
	// 바이러스 증식 경로
	let move = ['동', '서', '남', '북'];
	let dx = [0, 0, 1, -1];
	let dy = [1, -1, 0, 0];

	while (data.length !== 0) {
		let unit = data.shift();
		let now_virus = unit[0];
		let now_s = unit[1];
		let now_x = unit[2];
		let now_y = unit[3];

		// s초가 지나면 종료
		if (now_s == s) break;

		for (let way in move) {
			let nx = now_x + dx[way];
			let ny = now_y + dy[way];
			if (0 <= nx && nx < n && 0 <= ny && ny < n) {
				if (arr[nx][ny] == 0) {
					arr[nx][ny] = now_virus;
					data.push([now_virus, now_s + 1, nx, ny]);
				}
			}
		}
	}

	console.log(arr);

	return arr[x - 1][y - 1];
};

console.log(
	infection(
		3,
		3,
		[
			[1, 0, 2],
			[0, 0, 0],
			[3, 0, 0],
		],
		2,
		3,
		2
	)
);

//? 문제 : 감시 피하기

// n x n 크기의 복도에 S(학생), T(선생님), O(벽)이 주워졌을때
// T는 각 상하 좌우의 모든 열을 볼수있다.
// 이때 벽 3개를 설치하여 모든 학생이 모든 선생님에게 보이지않게
// 할수 있다면 YES, 아니면 NO 를 출력

// N이 최대 6이기 때문에
// N X N 에서 3개를 선택하는 조합은 36 C 3 이다 이경우 (36 X 35 X 34) / 3! = 7140
// 경우의 수가 10,000 이하이므로 완전탐색을 수행하는것이 무리가 없다.

const surveillance = (n, arr) => {
	// 모든 벽 설치가능 위치
	let outcomes = [];
	// 모든 선생의 위치
	let teachers = [];

	// 배열 분류
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (arr[i][j] == 'X') {
				outcomes.push([i, j]);
			} else if (arr[i][j] == 'T') {
				teachers.push([i, j]);
			}
		}
	}
	// console.log(arr);
	// console.log(outcomes);
	// console.log(teachers);

	// arr에서 k개 조합
	const combinations = (arr, k) => {
		let combs = [];
		let head = 0;
		let tailCombs = 0;

		if (k > arr.length || k <= 0) {
			return [];
		}

		if (k == arr.length) {
			return [arr];
		}

		if (k == 1) {
			combs = [];
			for (i = 0; i < arr.length; i++) {
				combs.push([arr[i]]);
			}
			return combs;
		}

		for (let i = 0; i < arr.length - k + 1; i++) {
			head = arr.slice(i, i + 1); // start , end (end미포함)
			tailCombs = combinations(arr.slice(i + 1), k - 1);
			for (let j = 0; j < tailCombs.length; j++) {
				combs.push(head.concat(tailCombs[j]));
			}
		}

		return combs;
	};

	// (x,y)위치의 각 방향에 대해서 S, O 찾기
	const watch = (x, y, direction) => {
		// 왼쪽 방향으로 감시
		if (direction == 0) {
			while (y >= 0) {
				if (arr[x][y] == 'S') {
					// 학생이 있는 경우
					return true;
				}
				if (arr[x][y] == 'O') {
					// 장애물이 있는 경우
					return false;
				}
				y -= 1;
			}
		}
		// 오른쪽 방향으로 감시
		if (direction == 1) {
			while (y < n) {
				if (arr[x][y] == 'S') {
					// 학생이 있는 경우
					return true;
				}
				if (arr[x][y] == 'O') {
					// 장애물이 있는 경우
					return false;
				}
				y += 1;
			}
		}
		// 위쪽 방향으로 감시
		if (direction == 2) {
			while (x >= 0) {
				if (arr[x][y] == 'S') {
					// 학생이 있는 경우
					return true;
				}
				if (arr[x][y] == 'O') {
					// 장애물이 있는 경우
					return false;
				}
				x -= 1;
			}
		}
		// 아래쪽 방향으로 감시
		if (direction == 3) {
			while (x < n) {
				if (arr[x][y] == 'S') {
					// 학생이 있는 경우
					return true;
				}
				if (arr[x][y] == 'O') {
					// 장애물이 있는 경우
					return false;
				}
				x += 1;
			}
		}
		return false;
	};

	// 학생감지 여부
	let found = false;

	let combs = combinations(outcomes, 3);
	// console.log(combs);

	const process = () => {
		for (let t of teachers) {
			for (let i = 0; i < 4; i++) {
				// 모든 방향으로 검사했을때 학생을 만나면.
				if (watch(t[0], t[1], i)) {
					return true;
				}
			}
		}
		// 모든 경우가 벽을 만나면.
		return false;
	};

	while (combs.length !== 0) {
		let resultMap = arr.slice(); // 복사본
		// 벽세우기.
		let unit = combs.shift();
		for (let u of unit) {
			resultMap[u[0]][u[1]] = 'O';
		}
		// 이때 T 선상에 S가 감지되지않는 경우
		if (!process()) {
			// 모든 경우가 벽을 만나는 경우.
			found = true;
			break;
		}
		// console.log(arr);
		for (let u of unit) {
			resultMap[u[0]][u[1]] = 'X';
		}
		// console.log(arr);
	}

	if (found) {
		return 'YES';
	} else {
		return 'NO';
	}
};

console.log(
	surveillance(5, [
		['X', 'S', 'X', 'X', 'T'],
		['T', 'X', 'S', 'X', 'X'],
		['X', 'X', 'X', 'X', 'X'],
		['X', 'T', 'X', 'X', 'X'],
		['X', 'X', 'T', 'X', 'X'],
	])
);

//* BFS(Breadth-first search) : 너비 우선 탐색

//* 각 정점 v 에 거리, 선행 정점 값을 할당.
//* QUEUE를 이용. 시작 정점부터 갈수있는 정점을 QUEUE에 넣고
//* 방문한곳은 QUEUE에서 제거.

const doBFS = (graph, source) => {
	let bfsInfo = [];

	for (let i = 0; i < graph.length; i++) {
		bfsInfo[i] = {
			distance: null,
			predecessor: null,
		};
	}

	bfsInfo[source].distance = 0;
	bfsInfo[source].predecessor = true;

	let queue = new Array();
	queue.push(source);

	// Traverse the graph
	while (queue.length) {
		let unit = queue.shift();

		for (let j = 0; j < graph[unit].length; j++) {
			var inner = graph[unit][j];

			if (bfsInfo[inner].predecessor === null) {
				queue.push(inner);
				bfsInfo[inner].predecessor = unit;
				bfsInfo[inner].distance = bfsInfo[unit].distance + 1;
			}
		}
	}

	bfsInfo[source].predecessor = null;

	return bfsInfo;
};

var adjList = [
	[1],
	[0, 4, 5],
	[3, 4, 5],
	[2, 6],
	[1, 2],
	[1, 2, 6],
	[3, 5],
	[],
];

let bfsInfo = doBFS(adjList, 3);

for (var i = 0; i < adjList.length; i++) {
	console.log(
		'vertex ' +
			i +
			': distance = ' +
			bfsInfo[i].distance +
			', predecessor = ' +
			bfsInfo[i].predecessor
	);
}
