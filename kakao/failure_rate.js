//? 문제 : 실패율

//! 핵심 : 분수 계산
// N : 스테이지 개수, stages : 유저별 멈춰있는 스테이지
// 실패율 : 도달했으나 클리어 못한 유저수 / 스테이지에 도달한 플레이어 수
// 실패율이 낮은 스테이지부터 내림차순으로 return

const failure = (N, stages) => {
	let answer = [];
	let allUser = stages.length;
	console.log('전체 유저수 : ' + allUser);

	// 각 스테이즈 실패율 : N사이즈 배열 생성
	let map = Array.from(Array(N), () => Array(2).fill(0));

	console.log(map);

	// 실패율 : 미클리어 / 스테이지도달수

	// 도달한 스테이지
	stages.map((stage) => {
		if (stage == N + 1) {
			for (let i = 0; i < stage - 1; i++) {
				map[i][1] += 1;
			}
		} else {
			for (let i = 0; i < stage; i++) {
				map[i][1] += 1;
			}
		}
	});
	console.log('스테이지도달수');
	console.log(map);

	// 도달했으나 클리어하지 못한 플레이어
	stages.map((stage) => {
		if (stage !== N + 1) {
			map[stage - 1][0] += 1;
		}
	});
	console.log('미클리어 / 스테이지도달수');
	console.log(map);

	// ------------------------------------------------

	// 실패율 / 스테이지
	// 예외 스테이지도달수 : 0 일때
	map.map((value, i) => {
		if (value[0] == 0 || value[1] == 0) {
			value[0] = 0;
			value[1] = i + 1;
		} else {
			value[0] = value[0] / value[1];
			value[1] = i + 1;
		}
	});
	console.log('실패율 / 스테이지');
	console.log(map);

	// 실패율 순으로 정렬
	map.sort((a, b) => {
		return b[0] - a[0];
	});

	console.log(map);

	map.map((value, i) => {
		answer[i] = value[1];
	});

	return answer;
};

console.log(failure(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(failure(4, [4, 4, 4, 4, 4]));

const failure = (N, stages) => {
	let answer = [];
	let allUser = stages.length;
	console.log('전체 유저수 : ' + allUser);

	// 각 스테이즈 실패율 : N사이즈 배열 생성
	let map = Array.from(Array(N), () => Array(2).fill(0));

	console.log(map);

	// 실패율 : 미클리어 / 스테이지도달수

	// 도달한 스테이지
	stages.map((stage) => {
		if (stage == N + 1) {
			for (let i = 0; i < stage - 1; i++) {
				map[i][1] += 1;
			}
		} else {
			for (let i = 0; i < stage; i++) {
				map[i][1] += 1;
			}
		}
	});
	console.log('스테이지도달수');
	console.log(map);

	// 도달했으나 클리어하지 못한 플레이어
	stages.map((stage) => {
		if (stage !== N + 1) {
			map[stage - 1][0] += 1;
		}
	});
	console.log('미클리어 / 스테이지도달수');
	console.log(map);

	// ------------------------------------------------

	// 실패율 / 스테이지
	// 예외 스테이지도달수 : 0 일때
	map.map((value, i) => {
		if (value[0] == 0 || value[1] == 0) {
			value[0] = 0;
			value[1] = i + 1;
		} else {
			value[0] = value[0] / value[1];
			value[1] = i + 1;
		}
	});
	console.log('실패율 / 스테이지');
	console.log(map);

	// 실패율 순으로 정렬
	map.sort((a, b) => {
		return a[0] > b[0] ? -1 : a[0] < b[0] ? 1 : a[1] - b[1];
	});

	console.log(map);

	map.map((value, i) => {
		answer[i] = value[1];
	});

	return answer;
};
