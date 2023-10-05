//* tree
//* undirected graph의 한종류, Minimum Spanning Tree(MST)라고도 불린다.
//* N개의 node, N-1개의 edge

//* node : tree 구조에서 데이터의 상하위 계층을 나타내는 위치의 항목. 분기.
//* root node: 부모가 없는 최상단의 node. tree는 하나의 root를 갖는다.
//* parent node: 부모 node. root를 제외한 모든 node는 부모를 갖는다.
//* child node: 자식 node. 부모로 부터 분기된 node
//* leaf node: 자식이 없는 node, 말단, 잎, 외부
//* internal node: leaf가 아닌 node
//* siblings : 형제, 같은 부모를 가지는 node의 관계.
//* depth : root에서 어떤 node에 도달하기 위해 거쳐야 하는 edge의 수
//* level : tree의 특정 깊이를 가지는 node의 집합
//* height : root로 부터 가능 큰 depth.
//* subtree : 자신을 포함하는 tree안에서의 또 다른 tree. subtree의 root는 자신을 포한하는 tree의 모든 node가 될수있다.

//* size : 자신을 포함한 모든 자식 node의 개수
//* degree :  개수 / 간선 수 (degree) = 각 노드가 지닌 가지의 수
//* degree of tree : 트리의 최대 차수

//* tree 대표적 유형.
//* Binary Trees(BT)
//* Binary Search Trees(BST) : 이진탐색(binary search)과 연결리스트(linked list)를 결합한 자료구조의 일종. 왼쪽에 작은거, 오른쪽에 큰거.
//* AVL Trees
//* Red - Black Trees : self-balancing binary search tree
//* 2 - 3 Trees
//* 2-3-4 Trees

//* Binary Tree : 자식 노드의 수가 최대 2개
//* rooted binary tree(루트 이진 트리)
//* full binary tree, plane binary tree(정 이진 트리) : 노드가 0 또는 2
//* perfect binary tree(포화 이진 트리) : 모든 내부 노드가 두 개의 자식 노드를 가지며 모든 잎 노드가 동일한 깊이 또는 레벨을 갖는다
//* complete binary tree(완전 이진 트리) : 마지막 레벨을 제외하고 모든 레벨이 완전히 채워져 있으며, 마지막 레벨의 모든 노드는 가능한 한 가장 왼쪽에 있다.
//* balanced binary tree(균형 이진 트리) : 잎 노드에 대해 가능한 한 최대의 최소 높이, 모든 노드의 왼쪽과 오른쪽의 하위 트리와의 높이가 1 이상 차이가 나지 않는 이진 트리 구조
//* degenerate tree : 각 부모 노드는 오직 한 개의 연관 자식 노드를 갖는다. 이는 성능 면에서 트리가 linked list 데이터 구조처럼 동작한다는 것을 의미

class Node {
	constructor(data) {
		this.data = data;
		this.children = [];
	}
}

class Tree {
	constructor() {
		this.root = null;
	}

	add(data, toNodeData) {
		const node = new Node(data);

		const parent = toNodeData ? this.findBFS(toNodeData) : null;

		if (parent) parent.children.push(node);
		else if (!this.root) this.root = node;
		else return 'Tried to store node at root when root already exists.';
	}

	findBFS(data) {
		const queue = [this.root];
		let _node = null;

		this.traverseBFS((node) => {
			if (node.data == data) _node = node;
		});

		return _node;
	}

	traverseBFS(cb) {
		const queue = [this.root];

		if (cb)
			while (queue.length) {
				const node = queue.shift();

				cb(node);

				for (const child of node.children) queue.push(child);
			}
	}
}

(function test() {
	let tree = new Tree();

	tree.add('Node1');
	tree.add('Node2', 'Node1');
	tree.add('Node3', 'Node1');

	tree.add('Node4', 'Node2');
	tree.add('Node5', 'Node3');

	tree.traverseBFS((node) => {
		console.log(node);
	});
})();

//* Binary Search Trees / [beiatrix](https://www.youtube.com/watch?v=6JeuJRqKJrI)

class BinaryNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor(value) {
		this.root = new BinaryNode(value);
		this.count = 1;
	}

	size() {
		return this.count;
	}

	insert(value) {
		this.count++;

		let newNode = new BinaryNode(value);

		const searchTree = (node) => {
			// if value < node.value, go left
			if (value < node.value) {
				// if no left child, append new node
				if (!node.left) {
					node.left = newNode;
				}
				// if left child, look left again
				else {
					searchTree(node.left);
				}
			}
			// if value > node.value, go right
			else if (value > node.value) {
				// if no right child, append new node
				if (!node.right) {
					node.right = newNode;
				}
				// if right child, look right again
				else {
					searchTree(node.right);
				}
			}
		};

		searchTree(this.root);
	}

	min() {
		let currentNode = this.root;

		// continue traversing left until no more children
		while (currentNode.left) {
			currentNode = currentNode.left;
		}

		return currentNode.value;
	}

	max() {
		let currentNode = this.root;

		// continue traversing left until no more children
		while (currentNode.right) {
			currentNode = currentNode.right;
		}

		return currentNode.value;
	}

	contains(value) {
		let currentNode = this.root;

		while (currentNode) {
			if (value === currentNode.value) {
				return true;
			}
			if (value < currentNode.value) {
				currentNode = currentNode.left;
			} else {
				currentNode = currentNode.right;
			}
		}

		return false;
	}

	//* depth first search - branch by branch

	// in-order
	// left, root, right
	// 2, 3, 12, 15, 28, 36, 39
	dfsInOrder() {
		let result = [];

		const traverse = (node) => {
			// if left child exists, go left again
			if (node.left) traverse(node.left);
			// capture root node value
			result.push(node.value);
			// if right child exists, go right again
			if (node.right) traverse(node.right);
		};

		traverse(this.root);

		return result;
	}

	// pre-order
	// root, left, right
	// 15, 3, 2, 12, 36, 28, 39
	dfsPreOrder() {
		let result = [];

		const traverse = (node) => {
			// capture root node value
			result.push(node.value);
			// if left child exists, go left again
			if (node.left) traverse(node.left);
			// if right child exists, go right again
			if (node.right) traverse(node.right);
		};

		traverse(this.root);

		return result;
	}

	// post-order
	// left, right, root
	// 2, 12, 3, 28, 39, 36, 15
	dfsPostOrder() {
		let result = [];

		const traverse = (node) => {
			// if left child exists, go left again
			if (node.left) traverse(node.left);
			// if right child exists, go right again
			if (node.right) traverse(node.right);
			// capture root node value
			result.push(node.value);
		};

		traverse(this.root);

		return result;
	}

	//* breadth first search - level by level

	//use a queue!
	// 15, 3, 36, 2, 12, 28, 39
	bfs() {
		let result = [];
		let queue = [];

		queue.push(this.root);

		while (queue.length) {
			let currentNode = queue.shift();

			result.push(currentNode.value);

			if (currentNode.left) {
				queue.push(currentNode.left);
			}
			if (currentNode.right) {
				queue.push(currentNode.right);
			}
		}

		return result;
	}
}

//       15
//   3        36
// 2   12  28   39

const bst = new BST(15);
bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

console.log(bst);

console.log(bst.size()); // 7

console.log(bst.min()); // 2
console.log(bst.max()); // 39

console.log(bst.contains(12)); // true
console.log(bst.contains(11)); // false

//* DFS!!!
//* in-order
console.log(bst.dfsInOrder()); // 2, 3, 12, 15, 28, 36, 39

//* pre-order
console.log(bst.dfsPreOrder()); // 15, 3, 2, 12, 36, 28, 39

//* post-order
console.log(bst.dfsPostOrder()); // 2, 12, 3, 28, 39, 36, 15

//* BFS!!!
console.log(bst.bfs()); // 15, 3, 36, 2, 12, 28, 39
