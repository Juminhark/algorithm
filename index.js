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
