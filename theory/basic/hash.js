//* Hash(해시) Table : key-value쌍으로 데이터를 저장하는 자료구조

// key - hash function - hash code - index
// index에 접근할때 hash code로 바로 접근 하기 때문에 검색이 빠르다.
//! 전체 index에서 찾는것이 아니기 때문에

// 예를 들면,
// index : k, l, p
// 김씨인 사람은 k, 이씨인 사람은 l, 박씨인 사람은 p
// 문제점 : 이구조안에 김씨가 많아지면 김씨안에서 또 찾아야하기 때문에
// O(1) -> O(N) 으로 복잡도가 상승.
// 김,이,박 성씨로 나누는것이 =>  hash algorithm
// 같은 방에 data가 많아져서 충돌이 생기는것을 => collision
// collision이 적을수록 hash algorithm의 효율성이 높다는 뜻.

// collision
// different keys => same hash code
// 문자열 => 정수 처리하면서 동일 정수에 배정
// different code => same index
// data가 같은 방에 넣어질때

// 예제
const hashFunction = (key) => {
	return key % 10;
};

// 단방향 함수 => 해쉬 함수

console.log(hashFunction(102948)); // 8
console.log(hashFunction(191919191)); // 1
console.log(hashFunction(13)); // 3
console.log(hashFunction(997)); // 7

const getHashCode = (arr) => {
	let result = 0;
	let split = arr.split('');

	for (let unit of split) {
		result += unit.charCodeAt();
	}

	return result;
};

console.log(getHashCode('KEY')); //233
console.log(getHashCode('sung')); //445
console.log(getHashCode('jin')); //321
console.log(getHashCode('hee')); //306
console.log(getHashCode('min')); //324

// ConvertToIndex => hash code를 이용해 index를 구하여 방에 넣는다.

const ConvertToIndex = (hashcode, arr) => {
	return hashcode % arr.length;
};

let resultIndex = [0, 1, 2];

console.log(ConvertToIndex(445, resultIndex)); // 1
console.log(ConvertToIndex(321, resultIndex)); // 0
console.log(ConvertToIndex(306, resultIndex)); // 0
console.log(ConvertToIndex(324, resultIndex)); // 0

let resultMap = { 0: [], 1: [], 2: [] };

const addDataToHashTable = (key) => {
	let num = getHashCode(key);
	resultMap[ConvertToIndex(num, resultIndex)].push(key);
};

addDataToHashTable('sung');
addDataToHashTable('jin');
addDataToHashTable('hee');
addDataToHashTable('min');

console.log(resultMap);

//? 문제 :  완주하지 못한 선수

// 1 명 제외 모두 완주
// 참여선수 배열 participant
// 완주선수 배열 completion
// 완주 못한 선수 이름을 return
// 참가자 중에는 동명이인이 있을 수 있습니다.

// 두배열에서 같은 요소를 찾아 각 배열에서 제거하는 알고리즘

const maraton = (participant, completion) => {
	// acc:누산기, cur:현재값
	let newList = participant.reduce((acc, cur) => {
		acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
		console.log('acc');
		console.log(acc);
		return acc;
	}, {});
	console.log(newList);
	console.log(newList['leo']);
	completion.forEach((c) => {
		if (newList[c]) {
			newList[c] -= 1;
		}
		if (newList[c] === 0) {
			delete newList[c];
		}
	});

	console.log(newList);
	console.log(Array.isArray(newList));
	return Object.keys(newList)[0];
};

// console.log(maraton(['leo', 'kiki', 'eden'], ['eden', 'kiki'])); //leo
// console.log(
// 	maraton(
// 		['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
// 		['josipa', 'filipa', 'marina', 'nikola']
// 	)
// ); // "vinko"
// console.log(
// 	maraton(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
// ); //"mislav"

// 두배열에서 같은 요소를 찾아 각 배열에서 제거하는 알고리즘
// 배열에 동일요소가 없을때

const maraton2 = (participant, completion) => {
	// ** participant는 completion의 모든 요소를 포함하고있다. **

	// participant의 요소를 completion의 각 요소를 찾아내 제거하는 새로운 배열.
	let answer = participant.filter((r) => {
		// participant의 요소 r
		const b = completion.find((a) => a == r);
		// 두배열에 존재하는 b가 있으면 false로 filter를 통한 새 배열에 담기지않는다
		if (!b) return true;

		// completion에서도 제거
		completion.filter((n) => n !== b);
	});

	return answer[0];
};

const maraton3 = (participant, completion) => {
	// ** participant는 completion의 모든 요소를 포함하고있다. **

	// participant의 요소를 completion의 각 요소를 찾아내 제거하는 새로운 배열.
	completion.map((r) => {
		const b = participant.indexOf(r);
		// b를 제거.
		participant.splice(b, 1);
	});
	return participant[0];
};

//? 문제 : 위장

// 스파이가 각 종류의 위장품으로 신분을 숨질때
// 위장할수 있는 경우의 수
// 최소 1개의 위장품을 착용하고,

//! 시간 초과

const camouflage = (clothes) => {
	let re = {};

	// 재배열
	clothes.forEach((item) => {
		console.log(item);
		if (re[item[1]] == undefined) {
			// 정의된적없으면 초기화 하고 추가
			re[item[1]] = [];
			re[item[1]].push(item[0]);
		} else {
			// 정의된적있으면 추가
			re[item[1]].push(item[0]);
		}
	});
	console.log(re);
	console.log(Object.keys(re));

	let type = Object.keys(re);
	let count = 0;

	// 1가지 종류 선택
	// 각각의 종류를 모두 더한다.
	for (let unit of type) {
		count += re[unit].length;
	}
	console.log(count);

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

	// 2가지 이상 종류 를 선택할때는
	// 각각의 종류의 수를 곱한다.
	if (type.length >= 2) {
		// type에서 i개를 고른다.
		// re에서 고른 i의 원소가 가진 개수를 곱한 값.
		for (let i = 2; i <= type.length; i++) {
			let check = combinations(type, i);
			console.log('check');
			console.log(check);

			while (check.length !== 0) {
				let multi = 0;
				let compare = check.shift();

				for (let unit of compare) {
					if (multi == 0) {
						multi += re[unit].length;
					} else {
						multi *= re[unit].length;
					}
				}
				count += multi;
			}
		}
	}

	return count;
};

// console.log(
// 	camouflage([
// 		['yellow_hat', 'headgear'],
// 		['blue_sunglasses', 'eyewear'],
// 		['green_turban', 'headgear'],
// 		['red_turban', 'headgear'],
// 		['red_sunglasses', 'eyewear'],
// 		['crow_mask', 'face'],
// 		['blue_sunglasses', 'face'],
// 		['smoky_makeup', 'face'],
// 	])
// );

// console.log(
// 	camouflage([
// 		['yellow_hat', 'headgear'],
// 		['blue_sunglasses', 'eyewear'],
// 		['green_turban', 'headgear'],
// 	])
// );

// console.log(
// 	camouflage([
// 		['crow_mask', 'face'],
// 		['blue_sunglasses', 'face'],
// 		['smoky_makeup', 'face'],
// 	])
// );

//! 각각의 종류 + 1 : 입지 않은 경우
//! 모든 경우의 수 -1 : 발가 벗은 경우

const camouflage2 = (clothes) => {
	let re = {};

	// 재배열
	clothes.forEach((item) => {
		console.log(item);
		if (re[item[1]] == undefined) {
			// 정의된적없으면 초기화 하고 추가
			re[item[1]] = [];
			re[item[1]].push(item[0]);
		} else {
			// 정의된적있으면 추가
			re[item[1]].push(item[0]);
		}
	});
	console.log(re);
	console.log(Object.keys(re));

	let type = Object.keys(re);

	let count = 0;
	for (let unit of type) {
		if (count == 0) {
			count += re[unit].length + 1;
		} else {
			count *= re[unit].length + 1;
		}
	}

	return count - 1;
};

// console.log(
// 	camouflage2([
// 		['yellow_hat', 'headgear'],
// 		['blue_sunglasses', 'eyewear'],
// 		['green_turban', 'headgear'],
// 		['red_turban', 'headgear'],
// 		['red_sunglasses', 'eyewear'],
// 		['crow_mask', 'face'],
// 		['blue_sunglasses', 'face'],
// 		['smoky_makeup', 'face'],
// 	])
// );

// console.log(
// 	camouflage2([
// 		['yellow_hat', 'headgear'],
// 		['blue_sunglasses', 'eyewear'],
// 		['green_turban', 'headgear'],
// 	])
// );

// console.log(
// 	camouflage2([
// 		['crow_mask', 'face'],
// 		['blue_sunglasses', 'face'],
// 		['smoky_makeup', 'face'],
// 	])
// );

//? 문제 : 베스트 앨범

// 가장 많이 플레이된 노래 2개씩 모아 베스트 앨범 출시
// 가장 많이 플레이된 장르 먼저 출력

//! 런타임 에러

const best = (genres, plays) => {
	let resultMap = {};
	for (let unit in genres) {
		if (resultMap[genres[unit]] == undefined) {
			// 선언
			resultMap[genres[unit]] = [];
			resultMap[genres[unit]].push([plays[unit], unit]);
		} else {
			resultMap[genres[unit]].push([plays[unit], unit]);
			resultMap[genres[unit]].sort((a, b) => {
				return b[0] - a[0];
			});
		}
	}

	console.log(resultMap);
	// 장르별 재생 횟수 비교.
	let genresMap = Object.keys(resultMap);
	console.log(genresMap);

	let result = [];
	for (let unit of genresMap) {
		let count = resultMap[unit].reduce((total, item) => {
			return item[0] + total;
		}, 0);
		result.push([count, unit]);
	}

	result.sort((a, b) => {
		return b[0] - a[0];
	});
	console.log(result);

	let answer = [];

	for (let i = 0; i < result.length; i++) {
		// 장르별 2개 => 1개
		for (let j = 0; j < 2; j++) {
			answer.push(Number(resultMap[result[i][1]][j][1]));
		}
	}

	return answer;
};

// console.log(
// 	best(
// 		['classic', 'pop', 'classic', 'classic', 'pop'],
// 		[500, 600, 150, 800, 2500]
// 	)
// );

// console.log(
// 	best(
// 		['classic', 'pop', 'classic', 'classic', 'pop', 'jazz', 'jazz'],
// 		[500, 600, 150, 800, 2500, 700, 400]
// 	)
// );

const best1 = (genres, plays) => {
	let resultMap = {};
	for (let unit in genres) {
		if (resultMap[genres[unit]] == undefined) {
			// 선언
			resultMap[genres[unit]] = [];
			resultMap[genres[unit]].push([plays[unit], unit]);
		} else {
			resultMap[genres[unit]].push([plays[unit], unit]);
			resultMap[genres[unit]].sort((a, b) => {
				return b[0] - a[0];
			});
		}
	}

	console.log(resultMap);
	// 장르별 재생 횟수 비교.
	let genresMap = Object.keys(resultMap);
	console.log(genresMap);

	let result = [];
	for (let unit of genresMap) {
		let count = resultMap[unit].reduce((total, item) => {
			return item[0] + total;
		}, 0);
		result.push([count, unit]);
	}

	result.sort((a, b) => {
		return b[0] - a[0];
	});
	console.log(result);

	let answer = [];

	for (let i = 0; i < result.length; i++) {
		//! 장르별 2개 => 1개 일때 예외 처리
		for (let j = 0; j < 2; j++) {
			console.log(j);
			if (resultMap[result[i][1]][j] !== undefined) {
				answer.push(Number(resultMap[result[i][1]][j][1]));
			}
		}
	}

	return answer;
};

// console.log(
// 	best1(['classic', 'pop', 'classic', 'classic'], [500, 600, 150, 800])
// );

// console.log(
// 	best(
// 		['classic', 'pop', 'classic', 'classic', 'pop', 'jazz', 'jazz'],
// 		[500, 600, 150, 800, 2500, 700, 400]
// 	)
// );
