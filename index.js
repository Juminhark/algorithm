const id = (new_id) => {
	//? 입력된 아이디를 분석하기위한 단위로 변환
	let unit = new_id.split('');

	//? 정규식
	let re = /^[A-Z]$/;
	for (let i = 0; i < unit.length; i++) {
		if (re.test(unit[i])) {
			unit[i] = unit[i].toLowerCase();
		}
	}

	const answer = unit;

	return answer;
};

const a = id('ZILLda');

console.log(a);
