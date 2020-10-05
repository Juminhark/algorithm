//* Linked-list

//* basic concept
const n1 = {
	data: 100,
};

const n2 = {
	data: 200,
};

n1.next = n2;
// console.log(n1);

//* sample
const list = {
	head: {
		value: 6,
		next: {
			value: 10,
			next: {
				value: 12,
				next: {
					value: 3,
					next: null,
				},
			},
		},
	},
};
// console.log(list);

//* structured
class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

// const node1 = new Node(100);
// const node2 = new Node(200);
// console.log(node1);

class LinkedList {
	//* default
	constructor() {
		this.head = null;
		this.size = 0;
	}

	//* Reconstruction from Array to LinkedList
	// constructor(arr) {
	// 	this.head = null;
	// 	this.size = 0;

	// 	if (Array.isArray(arr)) {
	// 		while (arr.length) {
	// 			this.head = new Node(arr.pop(), this.head);
	// 			this.size++;
	// 		}
	// 	}
	// }

	//* Insert first node
	insertFist = (data) => {
		this.head = new Node(data, this.head);
		this.size++;
	};

	//* Insert last node
	insertLast = (data) => {
		let node = new Node(data);
		let current;

		// If empty, make head
		if (!this.head) {
			this.head = node;
		} else {
			current = this.head;

			while (current.next) {
				current = current.next;
			}

			current.next = node;
		}

		this.size++;
	};

	//* Insert at index
	insertAt = (data, index) => {
		// If index is out of range
		if (index > 0 && index > this.size) {
			return;
		}

		// If first index
		if (index === 0) {
			this.insertFirst(data);
			return;
		}

		const node = new Node(data);
		let current, previous;

		// Set current to first
		current = this.head;
		let count = 0;

		while (count < index) {
			previous = current; // Node before index
			count++;
			current = current.next; // Node after index
		}

		node.next = current;
		previous.next = node;

		this.size++;
	};

	//* Get at index
	getAt = (index) => {
		let current = this.head;
		let count = 0;

		while (current) {
			if (count == index) {
				console.log(current.data);
			}

			count++;
			current = current.next;
		}
		return null;
	};

	//* Remove at index
	removeAt = (index) => {
		if (index > 0 && index > this.size) {
			return;
		}

		let current = this.head;
		let previous;
		let count = 0;

		// Remove first
		if (index === 0) {
			this.head = current.next;
		} else {
			while (count < index) {
				count++;
				previous = current;
				current = current.next;
			}

			previous.next = current.next;
		}

		this.size--;
	};

	//* Clear list
	clearList() {
		this.head = null;
		this.size = 0;
	}

	//* Print list data
	printListData = () => {
		let current = this.head;

		while (current) {
			console.log(current.data);
			current = current.next;
		}
	};

	//* data Array 출력용도
	dataArray = () => {
		let current = this.head;
		let arr = [];
		while (current) {
			arr.push(current.data);
			current = current.next;
		}
		return arr;
	};
}

const ll = new LinkedList();

ll.insertFist(100);
ll.insertFist(200);
ll.insertFist(300);
// console.log(ll);
// ll.printListData(); // 300 200 100
// console.log(ll.dataArray()); // [ 300, 200, 100 ]

ll.insertLast(400);
// ll.printListData(); // 300 200 100 400

ll.insertAt(500, 2);
// ll.printListData(); // 300 200 500 100 400

// ll.getAt(2); // 500

ll.removeAt(3);
// ll.printListData(); // 300 200 500 400

ll.clearList();
// ll.printListData();
// console.log(ll);

// const l2 = new LinkedList([100, 200, 300]);
// console.log(l2);

//? 문제 : addTwoNumbers : letCode
// https://leetcode.com/problems/add-two-numbers/

// Input: (l1 = [2, 4, 3]), (l2 = [5, 6, 4]);
// Output: [7, 0, 8];
// Explanation: 342 + 465 = 807;

// Input: (l1 = [0]), (l2 = [0]);
// Output: [0];

// Input: (l1 = [9, 9, 9, 9, 9, 9, 9]), (l2 = [9, 9, 9, 9]);
// Output: [8, 9, 9, 9, 0, 0, 0, 1];

const addTwoNumbers = (list1, list2) => {
	let l1 = new LinkedList(list1);
	let l2 = new LinkedList(list2);

	// console.log(l1);
	// console.log(l1.head);
	// console.log(l1.head.data);

	// let l3 = new LinkedList();
	// console.log(l3.head == null);

	let result = new LinkedList();

	let carryOver = 0;
	while (l1.head != null || l2.head != null) {
		let v1 = 0;
		let v2 = 0;
		if (l1.head != null) v1 = l1.head.data;
		if (l2.head != null) v2 = l2.head.data;

		let sum = v1 + v2 + carryOver;
		carryOver = Math.floor(sum / 10); // 두자리수이면 앞자리 넘김
		sum = sum % 10;
		result.insertLast(sum);
		// console.log(result.dataArray());
		// console.log(carryOver);
		// console.log(l1.head);
		// console.log(l2.head);

		if (l1.head != null) l1.head = l1.head.next;
		if (l2.head != null) l2.head = l2.head.next;
	}

	if (carryOver != 0) {
		result.insertLast(carryOver);
	}
	return result.dataArray();
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
console.log(addTwoNumbers([0], [0]));
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
