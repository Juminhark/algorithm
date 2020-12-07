//* STACK

// const stack = [];

// // push
// stack.push('dog');
// stack.push('cat');
// stack.push('bear');

// console.log(stack);

// // pop
// stack.pop();

// console.log(stack);

// // peek
// console.log(stack[stack.length - 1]);

//* 구현

class Stack {
	constructor() {
		this.storage = {};
		this.size = 0;
	}

	push(element) {
		this.size++;
		this.storage[this.size] = element;
	}

	pop() {
		let removed = this.storage[this.size];
		delete this.storage[this.size];
		this.size--;
		return removed;
	}

	peek() {
		return this.storage[this.size];
	}
}

const stack = new Stack();

// // push
// stack.push('dog');
// stack.push('cat');
// stack.push('bear');

// console.log(stack);

// // pop
// stack.pop();

// console.log(stack);

// // peek
// console.log(stack.peek());

//* QUEUE

// const queue = [];

// // enqueue
// queue.push('dog');
// queue.push('cat');
// queue.push('bear');

// console.log(queue);

// // dequeue
// queue.shift();

// console.log(queue);

// // peek
// console.log(queue[queue.length - 1]);

//* 구현

class Queue {
	constructor() {
		this.storage = {};
		this.head = 0;
		this.tail = 0;
	}

	enqueue(element) {
		this.storage[this.tail] = element;
		this.tail++;
	}

	dequeue() {
		let removed = this.storage[this.head];
		delete this.storage[this.head];
		this.head++;
		return removed;
	}
}

// const queue = new Queue();

// // enqueue
// queue.enqueue('dog');
// queue.enqueue('cat');
// queue.enqueue('bear');

// console.log(queue);

// // dequeue
// console.log(queue.dequeue());
// console.log(queue.dequeue());

// console.log(queue);
