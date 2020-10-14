//* asymptotic notation(점근적 표기법)

//* 알고리즘의 실행시간
//* 1. 입력값의 크기에 따른 알고리즘의 실행 시간
//* 2. 입력값의 크기에 따라 이함수가 얼마마 빨리 커지는지 => 실행 시간의 성장률(rate of growth)

//* 6n^2 + 1000n + 3000 에서 기하급수적으로 늘어나는 n^2에 비해
//* 나머지 항목은 증가률에 기여하는바가 작다.

//* 상수 계수와 중요하지 않은 항목을 제거한것이 점근적 표기법(asymptotic notation)
//* big-Θ(Theta) 표기법, big-O 표기법, big-Ω(Omega) 표기법

//* big-Θ(Theta) 표기법

//* example : 선형검색
const doLinearSearch = (array, targetValue) => {
	for (let guess = 0; guess < array.length; guess++) {
		if (array[guess] === targetValue) {
			return guess; // 찾은 경우
		}
	}
	return -1; // 찾지 못한 경우
};
//* 이 경우 array.length = n 만큼의 수 안에서 찾아내기 때문에 for문은 최대 n번 반복.
//* for문안에서 수행은 다음과 같다.
//* 1. guess와 array.length를 비교합니다
//* 2. array[guess]와 targetValue를 비교합니다
//* 3. 가능하다면 guess의 값을 반환합니다
//* 4. guess를 증가시킵니다
//* 위의 수행을 for문안에서 반복하기 때문에  c1(임의의 상수) * n 만큼의 계산 시간이 필요.
//* 여기에 추가적으로 초기화에 필요한 계산이 있기때문에 c1 * n + c2

//* 실제 계산 시간은 c1의 최솟값 k1, c1의 최대값 k2 안에 존재.
//* 중요 항목에 집중하면
//* k1 * n <= c1 * n <= k2 * n
//* 이러한 경우 Θ(n) 으로 표시 한다.
//* Ω(n), O(n) => Θ(n)

//* 일반식으로 만들면 어떤 함수 f(n)에 대하여 실행 시간이 Θ(f(n))
//! big-Θ표기법을 사용하는 것은 실행 시간에 대해 점근적으로 근접한 한계값. 점진적 상한선, 하한선이 존재

//* big-O 표기법
//! big-O표기법을 사용하는 것은 실행 시간에 대해 위에 점근적으로 근접한 한계값. 점진적 상한선.

//* 이진검색 실행 최악의 경우는 Θ(log2(n)) 이지만 첫번째 추측에 맞추면 Θ(1) 이다.

//* big-Ω(Omega) 표기법
//! big-Ω표기법을 사용하는 것은 실행 시간에 대해 아래에 점근적으로 근접한 한계값. 점진적 하한선.

//* 정렬

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

//* 선택 정렬 : 가장 작은 원소를 선택하여 순차적으로 배치

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
// console.log(indexOfMinimum(array, 2)); // 4
// console.log(indexOfMinimum(array, 0)); // 1
// console.log(indexOfMinimum(array, 5)); // 6

//? 선택 정렬 구현
const selectionSort = (array) => {
	let minIndex;
	for (let i = 0; i < array.length; i++) {
		minIndex = indexOfMinimum(array, i);
		swap(array, i, minIndex);
	}
};

let array1 = [2, 12, 9, 8, 4, 1, 5];
selectionSort(array1);
// console.log(array1);

//* 선택정렬 분석하기

//* 선택 정렬은 배열의 인덱스(n)만큼 indexOfMinimum, swap function을 호출 한다.
//* swap : n => Θ(n)
//* indexOfMinimum : Σ(1~n) x 만큼 => 1 + 2 + ...+ n-1 + n => (n+1)(n/2) => 1/2n^2 + 1/2n => Θ(n^2)

//* selectionSort => Θ(n^2)

//* 삽입 정렬 : 앞의 원소부터 차레대로 진행하여 원소 앞의 이미 정렬된 배열에 자신의 위치를 삽입

const insert = (array, rightIndex, value) => {
	// Compare values between array[rightIndex] and value.
	// if value is smaller than array[rightIndex], that array's value will be copied to array[rightIndex+1].
	// This work keep going until finding value is bigger than array[i]("for" loop)
	// if find smaller array value or i reach 0, loop will be end and value will be copied to array[i+1]
	let i;
	for (i = rightIndex; i >= 0 && array[i] > value; i--) {
		array[i + 1] = array[i];
	}
	array[i + 1] = value;
};

let array2 = [3, 5, 7, 11, 13, 2, 9, 6];

insert(array2, 4, 2);
console.log(array2); // [2, 3, 5, 7, 11, 13, 9, 6];

insert(array2, 5, 9);
console.log(array2); // [2, 3, 5, 7, 9, 11, 13, 6];

insert(array2, 6, 6);
console.log(array2); // [2, 3, 5, 6, 7, 9, 11, 13];
