//* 알고리즘 성능 평가

//* Complexity : 복잡도
// 1. 시간 복잡도 : 수행 시간 분석
// 2. 공간 복잡도 : 메모리 사용량 분석
// 복잡도가 낮을수록 좋은 알고리즘

//* Big-O Notation : 빅오 표기법
// 차수가 큰것을 고려
// ex) 3N^3 + 5N^2 + 10000000  => O(N^3)

// O(1) : 상수 시간
// O(logN) : 로그 시간
// O(N) : 선형 시간
// O(NlogN) : 로그 선형 시간
// O(N^2) : 이차 시간
// O(N^3) : 삼차 시간
// O(2^N) : 지수 시간

// N의 범위
// 500 => O(N^3)
// 2,000 => O(N^2)
// 100,000 => O(NlogN)
// 10,000,000 => O(N)

//* 알고리즘 문제 해결 과정
// 1. 지문 읽기 및 컴퓨터적 사고
// 2. 요구사항(복잡도) 분석
// 3. 문제 해결을 위한 아이디어 찾기
// 4. 소스코드 설계 및 코딩

//! 출제자는 핵심 아이디어를 캐치한다면 간결하게 소스코드를 작성할수있는 형태로 출제

//! 모든 프로그래밍은 결국 데이터를 다루는 행위
// 자료형에 대한 이해가 필수다.

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
