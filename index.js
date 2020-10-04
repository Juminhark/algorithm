// Linked-list

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

console.log(list);

// tree

// graph
// directed, unweighted graph
const graph1 = {
	data1: {
		value: 'data1',
		from: [],
		to: ['data2', 'data3'],
	},
	date2: {
		value: 'data2',
		from: ['data1'],
		to: ['data3'],
	},
	date3: {
		value: 'data3',
		from: ['data2', 'data1'],
		to: ['data1'],
	},
};

//
