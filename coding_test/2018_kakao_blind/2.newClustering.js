//? 문제 : 뉴스 클러스터링

// 자카드 유사도 J(A, B) = (A ∩ B) / (A U B)

// A = {1, 2, 3},B = {2, 3, 4}
// A ∩ B = {2, 3} = 2
// A U B = {1,2,3,4} = 4
// J(A, B) = {2, 3} / {1,2,3,4} = 2/4 = 0.5

// A ∩ B = {} => J(A, B) = 1

// A = {1,1,1}, B = {1,1,1,1,1} => A ∩ B = min(3,5) = 3
// A = {1,1,1}, B = {1,1,1,1,1} => A U B = max(3,5) = 5

const newsClustering = (str1, str2) => {
	let answer = 1;
	let eng = /^[A-Z]*$/;

	// 대소문자 통일
	let STR1 = str1.toUpperCase().split('');
	let STR2 = str2.toUpperCase().split('');

	let strMap1 = new Map();
	let strMap2 = new Map();

	for (let i = 0; i < STR1.length - 1; i++) {
		if (eng.test(STR1[i]) && eng.test(STR1[i + 1])) {
			if (strMap1.get(STR1[i] + STR1[i + 1]) == undefined) {
				strMap1.set(STR1[i] + STR1[i + 1], 1);
			} else {
				strMap1.set(
					STR1[i] + STR1[i + 1],
					strMap1.get(STR1[i] + STR1[i + 1]) + 1
				);
			}
		}
	}

	for (let i = 0; i < STR2.length - 1; i++) {
		if (eng.test(STR2[i]) && eng.test(STR2[i + 1])) {
			if (strMap2.get(STR2[i] + STR2[i + 1]) == undefined) {
				strMap2.set(STR2[i] + STR2[i + 1], 1);
			} else {
				strMap2.set(
					STR2[i] + STR2[i + 1],
					strMap2.get(STR2[i] + STR2[i + 1]) + 1
				);
			}
		}
	}

	// 교집합
	let Intersection = 0;
	// 합집합
	let union = 0;
	2;

	for (let [key, value] of strMap1) {
		// 두 배열의 같은 문자 확인
		if (strMap2.has(key)) {
			// A = {1,1,1}, B = {1,1,1,1,1} => A ∩ B = min(3,5) = 3
			// A = {1,1,1}, B = {1,1,1,1,1} => A U B = max(3,5) = 5
			union += Math.max(value, strMap2.get(key));
			Intersection += Math.min(value, strMap2.get(key));
		} else {
			union += value;
		}
	}

	// 순수한 B 원소
	for (let [key, value] of strMap2) {
		if (!strMap1.has(key)) {
			union += value;
		}
	}

	if (Intersection !== 0 || union !== 0) {
		answer = Intersection / union;
	}

	// 유사도는 0~1 사이의 실수 이므로 65536 곱하고 정수부만 출력
	return parseInt(answer * 65536);
};

console.log(newsClustering('FRANCE', 'french')); // 16384;
console.log(newsClustering('handshake', 'shake hands')); //65536
console.log(newsClustering('aa1+aa2', 'AAAA12')); //43690
console.log(newsClustering('E=M*C^2', 'e=m*c^2')); // 65536

// 각 문자열의 길이는 2 이상, 1,000 이하이다.
