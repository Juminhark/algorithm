// ? 문제 : [1차]다트 게임

// dartResult 의 각 숫자, 문자로 점수 계산
// 숫자는 0 ~ 10 사이의 점수
// S : 1제곱, D : 2제곱, T : 3제곱
// # : 해당 점수가 마이너스, * : 바로 앞에 점수랑 자기 점수 2배

const dart = (dartResult) => {
	let answer = 0;
	let num = 0;
	let numList = [];
	let wait = 0;
	let cal = 0;

	let stringArray = dartResult.split('');

	for (let i = 0; i < stringArray.length; i++) {
		// 숫자일때
		if (!isNaN(stringArray[i])) {
			num = Number(stringArray[i]);
			// 예외처리 : 10점일때
			if (wait == 1 && Number(stringArray[i - 1]) == 1) {
				num += 10;
				wait = 0;
			} else if (num == 1) {
				wait = 1;
			}
		} else {
			// 문자일때
			switch (stringArray[i]) {
				case 'S':
					cal = num;
					numList.push(cal);
					num = 0;
					break;
				case 'D':
					cal = Math.pow(num, 2);
					numList.push(cal);
					num = 0;
					break;
				case 'T':
					cal = Math.pow(num, 3);
					numList.push(cal);
					num = 0;
					break;
				case '*':
					// 전 계산이랑 현 계산에 2배
					numList[numList.length - 2] *= 2;
					numList[numList.length - 1] *= 2;
					break;
				case '#':
					numList[numList.length - 1] *= -1;
					break;
			}
		}
	}

	for (let i = 0; i < numList.length; i++) {
		answer += numList[i];
	}

	return answer;
};

console.log(dart('1S2D*3T')); // 37
console.log(dart('1D2S#10S')); // 9
console.log(dart('1D2S0T')); // 3

//* isNaN() : 주어진 값이 NaN 인지 판별

//* NaN : Not a Number
// 1. 숫자로서 읽을 수 없음 (parseInt("어쩌구"), Number(undefined))
// 2. 결과가 허수인 수학 계산식 (Math.sqrt(-1))
// 3. 피연산자가 NaN (7 ** NaN)
// 4. 정의할 수 없는 계산식 (0 * Infinity)
// 5. 문자열을 포함하면서 덧셈이 아닌 계산식 ("가" / 3)
