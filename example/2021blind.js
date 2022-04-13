//? 문제 : 아이디 생성

// 아이디 생성
// 입력된 아이디가 규칙에 맞지 않을때 입력된 아이디와 비슷하면서 규칙에 맞는것을 추천

// 아이디의 길이는 3자 이상 15자 이하여야 합니다.
// 아이디는 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자만 사용할 수 있습니다.
// 단, 마침표(.)는 처음과 끝에 사용할 없으며 또한 연속으로 사용할 수 없습니다.

const id = (new_id) => {
	// 배열화
	let arr = new_id.split('');
	// console.log(arr);

	// 1. 대소문자 바꾸기 - 정규식
	let re = /^[A-Z]$/;
	for (let i = 0; i < arr.length; i++) {
		if (re.test(arr[i])) {
			arr[i] = arr[i].toLowerCase();
		}
	}
	// console.log(arr);

	// 2. 특수 문자 제거
	re = /^[a-z0-9-_.]$/;
	let remove = []; // 제거할 번호 목록
	for (let i = 0; i < arr.length; i++) {
		if (!re.test(arr[i])) {
			remove.push(i);
		}
	}
	while (remove.length !== 0) {
		let r = remove.pop();
		arr.splice(r, 1);
	}
	console.log(arr);

	// 3. 반복되는 . 제거
	for (let i = 0; i < arr.length; i++) {
		if (i > 0 && arr[i] == '.' && arr[i - 1] == '.') {
			remove.push(i);
		}
	}
	while (remove.length !== 0) {
		let r = remove.pop();
		arr.splice(r, 1);
	}
	console.log(arr);

	// 4. 지울거 지우고 나서도 시작이 .로 시작하면
	while (arr[0] == '.') {
		arr.shift();
	}

	// 4. 지울거 지우고 나서도 마지막이 .로 끝나면
	while (arr[arr.length - 1] == '.') {
		arr.pop();
	}
	// console.log(arr);

	// 5. 빈 문자열이면 a대입
	if (arr.length == 0) {
		arr.push('a');
	}

	// 6. 길이가 16이상이면
	if (arr.length > 15) {
		arr = arr.slice(0, 15);
	}
	// console.log(arr);
	//지울거 지우고 나서도 마지막이 .로 끝나면
	while (arr[arr.length - 1] == '.') {
		arr.pop();
	}

	// 길이가 3 이하면 마지막 반복
	while (arr.length < 3) {
		arr.push(arr[arr.length - 1]);
	}

	// console.log(arr);

	return arr.join('');
};

// console.log(id('...!@BaT#*..y.abcdefghijklm.'));
// console.log(id('z-+.^.'));
// console.log(id('=.='));
// console.log(id('123_.def'));
// console.log(id('abcdefghijklmn.p'));
// console.log(id('ads..$.>.#$SD342'));

//? 문제 : 레스토랑

// 메뉴를 새로 구성
// 단품을 조합해서 코스 요리
// 코스는 가장 많이 주문한 단품메뉴
// 코스요리에는 최소 2개
// 2명 이상 손님에게 주문된 단품메뉴의 조합으로 후보

const restaurant = (orders, course) => {
	// 조합
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

	// 각 손님의 조합
	let resultMap = new Map();
	let resultMax = new Map();

	for (let unit of orders) {
		// 각 손님 주문
		let com = unit.split('');
		if (com.length > 1) {
			for (let c of course) {
				let result = combinations(com, c);
				let max = 0;
				while (result.length !== 0) {
					let save = result.shift();
					save.sort();
					let saveJoin = save.join('');
					if (resultMap.get(saveJoin) == undefined) {
						// 선언
						resultMap.set(saveJoin, [c, 1]);
					} else {
						max = resultMap.get(saveJoin)[1] + 1;
						resultMap.set(saveJoin, [c, max]);
					}
					if (max !== 0) {
						if (resultMax.get(c) == undefined) {
							resultMax.set(c, max);
						} else {
							if (resultMax.get(c) < max) {
								resultMax.set(c, max);
							}
						}
					}
				}
			}
		}
	}
	console.log(resultMap);
	console.log(resultMax);

	// 1번 주문 된것은 지운다.
	let deleteKey = [];
	resultMap.forEach((value, key) => {
		if (value[1] == 1) {
			deleteKey.push(key);
		}
	});

	while (deleteKey.length !== 0) {
		resultMap.delete(deleteKey.pop());
	}
	console.log(resultMap);

	let answer = [];
	for (let [key, value] of resultMap.entries()) {
		if (resultMax.get(value[0]) == value[1]) {
			answer.push(key);
		}
	}

	return answer.sort();
};

// console.log(
// 	restaurant(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4])
// );
// console.log(
// 	restaurant(['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'], [2, 3, 5])
// );
// console.log(restaurant(['XYZ', 'XWY', 'WXA'], [2, 3, 4]));

//? 문제 : 채용

// 코딩테스트 참여 개발언어 항목에 cpp, java, python 중 하나를 선택
// 지원 직군 항목에 backend와 frontend 중 하나를 선택
// 지원 경력구분 항목에 junior와 senior 중 하나를 선택
// 선호하는 소울푸드로 chicken과 pizza 중 하나를 선택

// info : 정보 , query : 선택할 정보, return : 각query를 만족하는 인원의 배열

//! 효율성 => 시간초과
const hire = (info, query) => {
	const isNumeric = (data) => {
		return !isNaN(Number(data));
	};

	let answer = [];
	let target = new Map();
	let queryArr = [];

	// 지원자 정보 재단 == 비교군
	for (let unit in info) {
		target.set(Number(unit) + 1, info[unit].split(' '));
	}
	console.log(target);

	// 각 부서의 조건들
	for (let unit of query) {
		queryArr.push(unit.split(' and '));
	}
	for (let unit in queryArr) {
		let add = queryArr[unit].pop().split(' ');
		for (let a of add) {
			queryArr[unit].push(a);
		}
	}
	console.log(queryArr);
	let check = [];
	for (let i = 1; i <= target.size; i++) {
		check.push(i);
	}
	console.log(check);

	// 조건들
	for (let unit of queryArr) {
		console.log(unit); // unit : [ 'java', 'backend', 'junior', 'pizza', '100' ]
		let checkArr = check.slice(0); // 복사본
		// 비교군에서 조건을 만족하지않은면 복사본에서 제거
		for (let u in unit) {
			// u : 0, 1 ,2, 3, 4 : 각 조건
			let remove = [];
			console.log(checkArr);
			for (let uni of checkArr) {
				if (isNumeric(unit[u])) {
					// 숫자일때
					if (Number(target.get(uni)[u]) < Number(unit[u])) {
						remove.push(uni);
					}
				} else {
					// 문자일때
					if (target.get(uni)[u] !== unit[u] && unit[u] !== '-') {
						remove.push(uni);
					}
				}
			}

			console.log('remove : ' + remove);

			while (remove.length !== 0) {
				let r = remove.shift();
				checkArr.splice(checkArr.indexOf(r), 1);
			}
		}
		answer.push(checkArr.length);
	}

	return answer;
};

// console.log(
// 	hire(
// 		[
// 			'java backend junior pizza 150',
// 			'python frontend senior chicken 210',
// 			'python frontend senior chicken 150',
// 			'cpp backend senior pizza 260',
// 			'java backend junior chicken 80',
// 			'python backend senior chicken 50',
// 		],
// 		[
// 			'java and backend and junior and pizza 100',
// 			'python and frontend and senior and chicken 200',
// 			'cpp and - and senior and pizza 250',
// 			'- and backend and senior and - 150',
// 			'- and - and - and chicken 100',
// 			'- and - and - and - 150',
// 		]
// 	)
// );
