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

console.log(shell_sort([1, 3, 5, 6, 2, 0, 8, 9, 7, 4]));
// console.log(shell_sort([2, 5, 3, 4, 3, 9, 3, 2, 5, 4, 1, 3]));

// [1, 3, 5, 6, 2, 0, 8, 9, 7, 4]
