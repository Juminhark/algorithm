//* Sorting : 정렬

//* Bubble Sort(거품정렬) : 서로 인접한 두원소를 검사하여 순서에 맞지않은 경우 위치를 바꾼다 : O(n**2)

const bubble_sort = (arr) => {
	let temp;
	for (let i = arr.length - 1; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			if (arr[j] > arr[j + 1]) {
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				console.log(arr);
			}
		}
	}

	return arr;
};

// console.log(bubble_sort([5, 4, 6, 1, 3, 2]));

//* Selection Sort(선택 정렬) : 가장 작은(큰) 원소를 선택하여 순차적으로 배치 : O(N**2)

const selection_sort = (arr) => {
	let minIndex, tmp;
	for (let i = 0; i < arr.length - 1; i++) {
		minIndex = i;
		for (j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		tmp = arr[minIndex];
		arr[minIndex] = arr[i];
		arr[i] = tmp;
		console.log(arr);
	}

	return arr;
};

// console.log(selection_sort([5, 4, 6, 1, 3, 2]));

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

//* Insertion Sort(삽입 정렬) : 앞의 원소부터 차레대로 진행하여 원소 앞의 이미 정렬된 배열에 자신의 위치를 삽입 : O(N**2)

const insertion_sort = (arr) => {
	let remember;
	for (let i = 1; i < arr.length; i++) {
		console.log(i);
		let j = i;
		remember = arr[j];
		while (j-- >= 0 && remember < arr[j]) {
			arr[j + 1] = arr[j];
			arr[j] = remember;
			console.log(arr);
		}
	}
	return arr;
};

// console.log(insertion_sort([5, 4, 6, 1, 3, 2]));

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

//* Divide And Conquer (분할 정복) : 커다란 문제를 작은 문제로 분할하여 문제를 해결하는 방법.
//* 시간복잡도 O(n*logn), 공간복잡도 O(n)

//* Merge Sort (병합 정렬) : 배열을 더이상 나눠질수없는 배열로 나누어 배열 단위로 정렬
const merge = (left, right) => {
	let result = [];
	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			// 두 배열의 첫 원소를 비교하여
			result.push(left.shift()); // 더 작은 수를 결과에 넣어줍니다.
		} else {
			result.push(right.shift()); // 오른쪽도 마찬가지
		}
	}
	while (left.length) result.push(left.shift()); // 어느 한 배열이 더 많이 남았다면 나머지를 다 넣어줍니다.
	while (right.length) result.push(right.shift()); // 오른쪽도 마찬가지
	console.log(result);
	return result;
};
const merge_sort = (arr) => {
	if (arr.length < 2) return arr; // 원소가 1개일때
	let pivot = Math.floor(arr.length / 2); // 가운데 기준점
	let left = arr.slice(0, pivot); // 기준점 왼쪽
	let right = arr.slice(pivot, arr.length); // 기준점 오른쪽
	console.log(pivot, left, right);
	return merge(merge_sort(left), merge_sort(right));
};

// console.log(merge_sort([7, 8, 5, 4, 6, 1, 3, 2]));

//! while(condition), if(condition) condition에서 0 == false
// let count = 4;
// while (count) {
// 	console.log(count);
// 	count--;
// }
// console.log(count == 0);
// if (!count) {
// 	console.log('0');
// } else {
// 	console.log('!0');
// }

//* Quick Sort(퀵 정렬) : 기준값을 두어 작으면 왼쪽, 크면 오른쪽으로 배치를 반복하여 정렬
// 배열이 순열(이미 정렬됨)이거나 역순으로 정렬되었을 경우의 시간복잡도 : O(n**2)

const partition = (array, left, right, pivotIndex) => {
	// 정렬하는 부분
	let temp;
	let pivot = array[pivotIndex];
	while (left <= right) {
		// 왼쪽, 오른쪽 수를 규칙과 비교해 다음 수로 넘어갑니다.
		while (array[left] < pivot) left++;
		while (array[right] > pivot) right--;
		if (left <= right) {
			// 왼쪽이 기준보다 크고, 오른쪽이 기준보다 작으면
			temp = array[left];
			array[left] = array[right];
			array[right] = temp; // 서로 바꿔줍니다.
			left++;
			right--;
		}
	}
	temp = array[left];
	array[left] = array[pivotIndex];
	array[pivotIndex] = temp; // 마지막으로 기준과 만난 수를 바꿔줍니다. 기준의 위치는 이제 i입니다.
	return left;
};

const quick_sort = (array, left, right) => {
	// 재귀하는 부분
	if (!left) left = 0;
	if (!right) right = array.length - 1;
	var pivotIndex = right; // 배열 가장 오른쪽의 수를 기준으로 뽑습니다.

	pivotIndex = partition(array, left, right - 1, pivotIndex); // right - 1을 하는 이유는 기준(현재 right)을 제외하고 정렬하기 위함입니다.

	if (left < pivotIndex - 1) quick_sort(array, left, pivotIndex - 1); // 기준 왼쪽 부분 재귀
	if (pivotIndex + 1 < right) quick_sort(array, pivotIndex + 1, right); // 기준 오른쪽 부분 재귀
	return array;
};

// console.log(quick_sort([4, 1, 7, 6, 3, 8, 2, 5]));

//! javascript 내장함수 sort() => 삽입정렬의 구조
let numbers = [4, 1, 7, 6, 3, 8, 2, 5];

numbers.sort((a, b) => {
	// console.log(a);
	// console.log(b);
	return a - b;
});

//* shell sort(셸 정렬)
// 삽입정렬은 입력되는 초기리스트가 거의 정렬 되어있을때 효율적
// 삽입정렬은 한번에 한 요소의 위치만 결정되기 떄문에 비효율적.
// 이러한 삽입정렬의 성질을 이용, 보완한 삽입정렬의 일반화

// const shell_sort = (arr) => {
// 	let gap = Math.floor(arr.length / 2);

// 	while (gap > 0) {
// 		for (let i = 0; i < arr.length - gap; i++) {
// 			let currentIndex = i;
// 			let gapShiftedIndex = i + gap;

// 			while (currentIndex >= 0) {
// 				if (arr[gapShiftedIndex] <= arr[currentIndex]) {
// 					const temp = arr[currentIndex];
// 					arr[currentIndex] = arr[gapShiftedIndex];
// 					arr[gapShiftedIndex] = temp;
// 				}

// 				gapShiftedIndex = currentIndex;
// 				currentIndex -= gap;
// 			}
// 		}
// 		gap = Math.floor(gap / 2);
// 	}
// 	return arr;
// };

const shell_sort = (arr) => {
	let gap = 1;
	while (gap < arr.length) {
		gap = 3 * gap + 1;
	}
	gap = Math.floor(gap / 3);

	while (gap > 0) {
		for (let i = gap; i < arr.length; i++) {
			let k = i - gap;
			let key = arr[i];

			while (k >= 0 && key < arr[k]) {
				arr[k + gap] = arr[k];
				k = k - gap;
			}
			arr[k + gap] = key;
		}
		gap = Math.floor(gap / 3);
	}
	return arr;
};

// console.log(shell_sort([1, 3, 5, 6, 2, 0, 8, 9, 7, 4]));
// console.log(shell_sort([2, 5, 3, 4, 3, 9, 3, 2, 5, 4, 1, 3]));

//? 문제 : 오름차순
// 다음 숫자들을 오른차순으로 정렬

const ascendingOrder = (str) => {
	let result = str.split(' ').sort((a, b) => {
		return a - b;
	});

	console.log(result);
	let answer = '';
	for (let i = 0; i < result.length; i++) {
		if (answer == '') {
			answer += result[i];
		} else {
			answer += ' ' + result[i];
		}
	}
	return answer;
};

// console.log(ascendingOrder('1 10 5 8 7 6 4 3 2 9'));

//? 문제 : K번째 수

// command : [a, b, c], arr에서 a번째부터 b번째까지 자른 것을 정렬했을때 c번째 원소
// command들의 결과값을 모은 배열을 return

const k = (arr, commands) => {
	let answer = [];
	while (commands.length !== 0) {
		let u = commands.shift();

		let unit = arr.slice(u[0] - 1, u[1]);
		// 오름차순
		unit.sort((a, b) => {
			return a - b;
		});
		console.log(unit);

		answer.push(unit[u[2] - 1]);
	}
	return answer;
};

// console.log(
// 	k(
// 		[1, 5, 2, 6, 3, 7, 4],
// 		[
// 			[2, 5, 3],
// 			[4, 4, 1],
// 			[1, 7, 3],
// 		]
// 	)
// );

//? 문제 : 가장 큰수

// 주어진 배열 :  100,000 이하
// 원소 : 1,000
// 주어진 정수를 이어붙여 만들수있는 가장 큰수를 구하여라

const largestNumber = (numbers) => {
	let answer = numbers
		.map((c) => c + '')
		.sort((a, b) => b + a - (a + b))
		.join('');

	return answer[0] === '0' ? '0' : answer;
};

// console.log(largestNumber([3, 30, 31, 34, 33, 5, 9])); // 95343333130
// console.log(largestNumber([3, 30, 34, 5, 191])); // 5 34 3 30 191;
// console.log(largestNumber([3, 30, 34, 5, 191, 432])); // 5 432 3 34 30 191
// console.log(largestNumber([0, 0, 0, 0, 0, 0])); // 0
// console.log(largestNumber([0, 0, 0, 1000])); // 1000
// console.log(largestNumber([0, 0, 0, 0])); // 0

//? 문제 : H-Index

// n 편의 논문중 h번 이상 인용된 논문이 h편 이상이고 나머지가 h번 이하 인용을 만족하는 최댓값
// [3, 0, 6, 1 ,5] => h = 3

const h_index = (citations) => {
	let result = 0;
	for (let i = 1; i <= citations.length; i++) {
		let count = 0;
		citations.forEach((element) => {
			if (element >= i) {
				count++;
			}
		});
		if (count >= i) {
			result = i;
		}
	}

	return result;
};

console.log(h_index([3, 0, 6, 1, 5])); //3
console.log(h_index([6, 6, 6, 6, 6, 1])); //5
console.log(h_index([20, 21, 22, 23])); //4
console.log(h_index([3, 3, 3, 3, 3])); //3

//? 문제 : H-Index

// n 편의 논문중 h번 이상 인용된 논문이 h편 이상이고 나머지가 h번 이하 인용을 만족하는 최댓값
// [3, 0, 6, 1 ,5] => h = 3

const h_index = (citations) => {
	let result = 0;
	for (let i = 1; i <= citations.length; i++) {
		let count = 0;
		citations.forEach((element) => {
			if (element >= i) {
				count++;
			}
		});
		if (count >= i) {
			result = i;
		}
	}

	return result;
};

// console.log(h_index([3, 0, 6, 1, 5])); //3
// console.log(h_index([6, 6, 6, 6, 6, 1])); //5
// console.log(h_index([20, 21, 22, 23])); //4
// console.log(h_index([3, 3, 3, 3, 3])); //3
