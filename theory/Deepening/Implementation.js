//* 구현 : 시뮬레이션 과 완전탐색
// 머릿속에 있는 알고리즘을 소스코드로 바꾸는 과정
// problem - thinking - solution

// 구현 유형 : 풀이를 떠올리는것은 쉽지만 소스코드로 옮기기 어려운 문제
// 1. 알고리즘 은 간단한데 코드가 지나칠만큼 길어지는 문제
// 2. 실수 연산을 다루고 특정 소수점까지 출력해야하는 문제
// 3. 문자열을 특정한 기준에 따라서 끊어 처리하는 문제
// 4. 적절한 라이브러리를 찾아 사용해야하는 문제

//! 완전 탐색 문제에서는 2차원 공간에서의 방향벡터가 자주 사용

//  동, 서, 남, 북
dx = [0, 0, 1, -1];
dy = [1, -1, 0, 0];

// 현재 위치 = (2,2)
let x = 1;
let y = 1;

// 동:0 , 서:1, 남:2, 북:3  => (2,3)
let move = [0, 1, 2, 3, 0];

for (let moving of move) {
	x = x + dx[moving];
	y = y + dy[moving];
}
// console.log('(', x, ',', y, ')');

//? 문제 : 시각

// 00시 00분 00초 ~ n시 59분 59초까지
// 3이 하나라 도 포함되는 모든 경우의 수

// 24 * 60 * 60 = 86400 => 경우의 수가 크지않기 때문에 완전탐색

const time = (n) => {
	let count = 0;

	for (let h = 0; h <= n; h++) {
		for (let min = 0; min < 60; min++) {
			for (let sec = 0; sec < 60; sec++) {
				let d = '' + h + min + sec;
				d.split('');
				if (d.indexOf('3') !== -1) {
					count += 1;
				}
			}
		}
	}

	return count;
};

// console.log(time(5));

//! 3중 for문 같은 경우 n의 범위가 작게 주어진다.

//? 문제 : 상하좌우

// n x n 정사각형 공간의 가장 왼쪽 위 (1, 1)에서 시작
// 정사각형의 가장 오른쪽아래가 (n, n)
// L: 왼쪽, R: 오른쪽, U: 위쪽, D: 아래쪽
//! 공각 밖으로의 이동은 무시.

// 일련의 명령에따라 개체를 이동 시킨다는점에서 simulation 유형
// simulation, 완전탐색은 구현의 한 유형

const moving = (str, n) => {
	let result = str.split(' ');
	console.log(result);

	// 시작 지점
	let x = 1;
	let y = 1;
	//        동 서 남 북
	let type = ['R', 'L', 'D', 'U'];
	let dx = [0, 0, 1, -1];
	let dy = [1, -1, 0, 0];

	for (let rdlr of result) {
		let tempx = x + dx[type.indexOf(rdlr)];
		if (1 < tempx && tempx < n) {
			x = tempx;
		}
		let tempy = y + dy[type.indexOf(rdlr)];
		if (1 < tempy && tempy < n) {
			y = tempy;
		}
	}

	return x + ' ' + y;
};

console.log(moving('R R R U D D', 5));

//? 대표적 문제 : 문자열 재정열

// 주어진 문자열을 알파벳오름차순 이후 모든숫자의 합을 이어서 출력

const strRe = (str) => {
	let re = str.split('');
	let ENG = /^[A-Z]$/; // 문자 1개를 A-Z 안에 있는지 확인

	let resultMap = [];
	let count = 0;
	let result = '';

	// 각 문자 확인
	for (let i = 0; i < re.length; i++) {
		if (ENG.test(re[i])) {
			// 문자인 경우
			resultMap.push(re[i]);
		} else {
			// 문자가 아닌 경우 => 숫자
			count += Number(re[i]);
		}
	}

	// 대문자 배열 오름차순
	resultMap.sort();

	for (let A of resultMap) {
		result += A;
	}

	// 숫자가 1개 이상 존재할 겨우 가장 뒤에 삽입
	if (count !== 0) {
		result += count;
	}

	return result;
};

console.log(strRe('K1KA5CB7'));
console.log(strRe('AJKDLSI412K4JSJ9D'));
