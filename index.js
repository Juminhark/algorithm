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

//* Divide And Conquer (분할 정복) : 커다란 문제를 작은 문제로 분할하여 문제를 해결하는 방법.
// 시간복잡도 O(n*logn), 공간복잡도 O(n)

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

// javascript 내장함수 sort() => 어떤 알고리즘이냐.
let numbers = [4, 1, 7, 6, 3, 8, 2, 5];
numbers.sort((a, b) => {
	console.log(numbers);
	return a - b;
});
