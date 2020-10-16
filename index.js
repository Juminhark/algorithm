//* 선택 정렬 : 가장 작은 원소를 선택하여 순차적으로 배치

//? swap 함수 구현
const swap = (array, firstIndex, secondIndex) => {
	let temp = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = temp;
};

let testArray = [7, 9, 4];

swap(testArray, 0, 1);
// console.log(testArray); //[9, 7, 4]
swap(testArray, 1, 2);
// console.log(testArray); //[9, 4, 7]
swap(testArray, 0, 2);
// console.log(testArray); //[7, 4, 9]

//? 하위 배열에서 최솟값 찾기
const indexOfMinimum = (array, startIndex) => {
	let minValue = array[startIndex];
	let minIndex = startIndex;

	for (let unitIndex = minIndex + 1; unitIndex < array.length; unitIndex++) {
		if (array[unitIndex] < array[minIndex]) {
			minIndex = unitIndex;
			minValue = array[unitIndex];
		}
	}

	return minIndex;
};

let array = [18, 6, 66, 44, 9, 22, 14];
console.log(indexOfMinimum(array, 2)); // 4
console.log(indexOfMinimum(array, 0)); // 1
console.log(indexOfMinimum(array, 5)); // 6

//? 선택 정렬 구현
const selectionSort = (array) => {
	let minIndex;
	for (let i = 0; i < array.length; i++) {
		minIndex = indexOfMinimum(array, i);
		swap(array, i, minIndex);
	}
};

array = [2, 12, 9, 8, 4, 1, 5];
selectionSort(array);
console.log(array);

//? 선택정렬 분석하기
//* 선택 정렬은 배열의 인덱스(n)만큼 indexOfMinimum, swap function을 호출 한다.
//* swap : n => Θ(n)
//* indexOfMinimum : Σ(1~n) x 만큼 => 1 + 2 + ...+ n-1 + n => (n+1)(n/2) => 1/2n^2 + 1/2n => Θ(n^2)
//* selectionSort => Θ(n^2)

//* 삽입 정렬 : 앞의 원소부터 차레대로 진행하여 원소 앞의 이미 정렬된 배열에 자신의 위치를 삽입

//? 삽입 구현
const insert = (array, rightIndex, value) => {
	let i;
	for (i = rightIndex; i >= 0 && array[i] > value; i--) {
		array[i + 1] = array[i];
	}
	array[i + 1] = value;
};

array = [3, 5, 7, 11, 13, 2, 9, 6];

insert(array, 4, 2);
console.log(array); // [2, 3, 5, 7, 11, 13, 9, 6];

insert(array, 5, 9);
console.log(array); // [2, 3, 5, 7, 9, 11, 13, 6];

insert(array, 6, 6);
console.log(array); // [2, 3, 5, 6, 7, 9, 11, 13];

//? 삽입 정렬 구현
const insertionSort = (array) => {
	for (let i = 1; i < array.length; i++) {
		insert(array, i - 1, array[i]);
	}
};

array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
console.log(array); // [7, 9, 11, 22, 42, 88, 99]

array = [-1, 6, 1, 0, 15, 10, -2];
insertionSort(array);
console.log(array); // [-2, -1, 0, 1, 6, 10, 15]

//? 삽입 정렬 분석하기

//* 최악의 경우
//* insertionSort는 주어진 array에 원소의 개수 n에 대하여 index 1부터 n - 1 까지 insert 호출
//* insert 안에서 하위 배열에 삽입되는 값이 하위 배열의 모든 요소보다 작은 경우
//* 하위 배열안의 모든 요소가 오른쪽으로 한칸씩 움직여야한다.
//* 그러므로 k개의 요소가 있는 하위배열에 삽입할때
//* 최악의 경우라는 가정 속에서 1칸을 움직이는 코드가 c 라고 하면 c * k 가 된다.
//* 따라서 1 ~ n-1 까지 (c * 1) + (c * 2) + ... + (c * (n - 1)) 이면
//* c * (n) * ((n-1)/2) => (c/2)n^2 - (c/2)n
//* insertionSort => Θ(n^2) => O(n^2)

//* 최상의 경우
//* insert는 오른쪽으로 이동시킬 필요가 없으므로 c 만큼의 시간 소요.
//* 따라서 insertionSort는 c + c + ... + c  => c (n-1) 만큼의 시간 소요
//* insertionSort => Θ(n) => Ω(n)

//* 재귀 란?

// for문
const factorialFor = (n) => {
	let result = 1;

	for (let i = 1; i <= n; i++) {
		result *= i;
	}
	return result;
};

// 재귀
const factorialRecursion = (n) => {
	return n === 1 || n === 0 ? 1 : n * factorialRecursion(n - 1);
};

console.log(factorialFor(4)); // 1 x 2 x 3 x 4 = 24
console.log(factorialRecursion(4)); // 1 x 2 x 3 x 4 = 24
