const hash_function =
	'해시 함수는 임의의 길이의 데이터를 고정된 길이의 데이터로 매핑하는 함수.';

const hash =
	'해시 함수를 통해서 얻어지는 값을 해시 값, 해시 코드, 간단하게 해시라고 한다.';

const hash_table = 'key : value mapping';

//? javascript : objects, map을 통해 해결

//! collusion(충돌) : 같은 key값을 같는 value를 저장할때

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

//* 구현
const hash_ = (key, size) => {
	let hashedKey = 0;

	for (let i = 0; i < key.length; i++) {
		hashedKey = key.charCodeAt(i);
	}

	return hashedKey % size;
};

class HashTable {
	constructor() {
		this.size = 20;
		this.buckets = Array(this.size);

		for (let i = 0; i < this.buckets.length; i++) {
			this.buckets[i] = new Map();
		}
	}

	insert(key, value) {
		let idx = hash_(key, this.size);
		this.buckets[idx].set(key, value);
	}

	remove(key) {
		let idx = hash_(key, this.size);
		let deleted = this.buckets[idx].get(key);
		this.buckets[idx].delete(key);
		return deleted;
	}

	search(key) {
		let idx = hash_(key, this.size);
		return this.buckets[idx].get(key);
	}
}

const hashTable = new HashTable();

hashTable.insert('serena', 'moon');
hashTable.insert('amy', 'mercury');
hashTable.insert('rei', 'mars');
hashTable.insert('lita', 'jupiter');
hashTable.insert('mina', 'venus');
hashTable.insert('darien', 'tuxedo mask');

console.log(hashTable);

console.log(hashTable.search('rei'));
console.log(hashTable.search('lita'));
console.log(hashTable.search('serena'));

// console.log(hashTable.remove('lita'));
// console.log(hashTable);

// console.log(hashTable.remove('mina'));
// console.log(hashTable);
