// 완주하지 못한 선수

// 1 명 제외 모두 완주
// 참여선수 배열 participant
// 완주선수 배열 completion
// 완주 못한 선수 이름을 return
// 참가자 중에는 동명이인이 있을 수 있습니다.

// 두배열에서 같은 요소를 찾아 각 배열에서 제거하는 알고리즘

// const solution = (participant, completion) => {
// 	// acc:누산기, cur:현재값
// 	let newList = participant.reduce((acc, cur) => {
// 		acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
// 		console.log('acc');
// 		console.log(acc);
// 		return acc;
// 	}, {});
// 	console.log(newList);
// 	console.log(newList['leo']);
// 	completion.forEach((c) => {
// 		if (newList[c]) {
// 			newList[c] -= 1;
// 		}
// 		if (newList[c] === 0) {
// 			delete newList[c];
// 		}
// 	});

// 	console.log(newList);
// 	console.log(Array.isArray(newList));
// 	return Object.keys(newList)[0];
// };

// console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])); //leo
// console.log(
// 	solution(
// 		['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
// 		['josipa', 'filipa', 'marina', 'nikola']
// 	)
// ); // "vinko"
// console.log(
// solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']);
// ); //"mislav"

// 두배열에서 같은 요소를 찾아 각 배열에서 제거하는 알고리즘
// 배열에 동일요소가 없을때

// const solution = (participant, completion) => {
// 	// ** participant는 completion의 모든 요소를 포함하고있다. **

// 	// participant의 요소를 completion의 각 요소를 찾아내 제거하는 새로운 배열.
// 	let answer = participant.filter((r) => {
// 		// participant의 요소 r
// 		const b = completion.find((a) => a == r);
// 		// 두배열에 존재하는 b가 있으면 false로 filter를 통한 새 배열에 담기지않는다
// 		if (!b) return true;

// 		// completion에서도 제거
// 		completion.filter((n) => n !== b);
// 	});

// 	return answer[0];
// };

// const solution = (participant, completion) => {
// 	// ** participant는 completion의 모든 요소를 포함하고있다. **

// 	// participant의 요소를 completion의 각 요소를 찾아내 제거하는 새로운 배열.
// 	completion.map((r) => {
// 		const b = participant.indexOf(r);
// 		participant.splice(b, 1);
// 	});
// 	return participant[0];
// };
