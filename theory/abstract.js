//* Computer Science Algorithms
//* 컴퓨터 프로그램이 어떤 문제를 해결하기 위해 필요한 명령어들의 집합

//* 알고리즘 성능 평가 : 정확성, 효율성(복잡도)

//* Complexity : 복잡도
// 1. 시간 복잡도 : 수행 시간 분석
// 2. 공간 복잡도 : 메모리 사용량 분석
// 복잡도가 낮을수록 좋은 알고리즘

//* Algorithm 문제 해결 과정
// 1. 지문 읽기 및 컴퓨터적 사고
// 2. 요구사항(복잡도) 분석
// 3. 문제 해결을 위한 아이디어 찾기
// 4. 소스코드 설계 및 코딩

//! 출제자는 핵심 아이디어를 캐치한다면 간결하게 소스코드를 작성할수있는 형태로 출제

//! 모든 프로그래밍은 결국 데이터를 다루는 행위
// 자료형에 대한 이해가 필수다.

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

//* O(1) : 상수 시간
//* O(log2(n)) : 로그 시간
//* O(n) : 선형 시간
//* O(n * log2(n)) : 로그 선형 시간
//* O(n^2) : 이차 시간
//* O(n^2 * log2(n))
//* O(n^3) : 삼차 시간
//* O(2^n) : 지수 시간
//* O(n!)

//* N의 범위
//* 500 => O(N^3)
//* 2,000 => O(N^2)
//* 100,000 => O(NlogN)
//* 10,000,000 => O(N)

//* 순열과 조합
// Permutation : 순열 : 서로다른 n개에서 서로다른 r개를 선택하여 나열하는것
// {A,B,C} 에서 3개를 선택하여 나열하는경우 'ABC','ACB','BAC','BCA','CAB','CBA'
// nPr = n * (n-1) * (n-2) * ... * (n-r+1)

const permutations = (inputArr) => {
	let result = [];

	const permute = (arr, m = []) => {
		if (arr.length === 0) {
			result.push(m);
		} else {
			for (let i = 0; i < arr.length; i++) {
				let curr = arr.slice(); // 원본을 건드리지않은 복사
				let next = curr.splice(i, 1);
				permute(curr.slice(), m.concat(next));
			}
		}
	};

	permute(inputArr);

	return result;
};

console.log(permutations(['A', 'B', 'C']));
// console.log(permutations(['A', 'B', 'C', 'D']));

// Combination : 조합 : 서로다른 n개에서 순서에 상관없이 서로 다른 r개를 선책하는경우
// {A,B,C} 애서 순서를 고려하지않고 2개를 뽑는경우 'AB','AC','BC'
// nCr = { n * (n-1) * (n-2) * ... * (n-r+1) } / r!

const combinations = (set, k) => {
	var i, j, combs, head, tailCombs;

	if (k > set.length || k <= 0) {
		return [];
	}

	if (k == set.length) {
		return [set];
	}

	if (k == 1) {
		combs = [];
		for (i = 0; i < set.length; i++) {
			combs.push([set[i]]);
		}
		return combs;
	}

	combs = [];
	for (i = 0; i < set.length - k + 1; i++) {
		head = set.slice(i, i + 1);
		tailCombs = combinations(set.slice(i + 1), k - 1);
		for (j = 0; j < tailCombs.length; j++) {
			combs.push(head.concat(tailCombs[j]));
		}
	}
	return combs;
};

// console.log(combinations(['A', 'B', 'C'], 2));

// 중복순열 : permutationWithRepetitions
// 중복조합 : combinationWithRepetitions
