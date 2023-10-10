//? 문제 : 체육복

// n : 전체학생 수
// lost : 체육복을 잃어버린 학생 번호의 배열
// reserve : 여분 체육복을 가진 학생 번호의 배열
// 여분체육복은 자신을 포함해 자기번호의 앞뒤 번호의 학생에게 대여가능.

// const spare = (n, lost, reserve) => {
// 	let resultMap = [];
// 	lost.sort(function (a, b) {
// 		return a - b;
// 	});
// 	reserve.sort(function (a, b) {
// 		return a - b;
// 	});
// 	for (let i = 0; i < lost.length; i++) {
// 		let j = 0;
// 		while (j < reserve.length) {
// 			if (reserve[j] == lost[i]) {
// 				resultMap.push(lost[i]);
// 				reserve.splice(j, 1);
// 				break;
// 			}
// 			j++;
// 		}
// 	}
// 	for (let i = 0; i < lost.length; i++) {
// 		let j = 0;
// 		while (j < reserve.length) {
// 			if (reserve[j] == lost[i] - 1 || reserve[j] == lost[i] + 1) {
// 				resultMap.push(lost[i]);
// 				reserve.splice(j, 1);
// 				break;
// 			}
// 			j++;
// 		}
// 	}
// 	resultMap.map((remove) => {
// 		for (let i = 0; i < lost.length; i++) {
// 			if (lost[i] == remove) {
// 				lost.splice(lost.indexOf(lost[i]), 1);
// 			}
// 		}
// 	});
// 	return n - lost.length;
// };

const spare = (n, lost, reserve) => {
  return (
    n -
    lost.filter((a) => {
      // lost의 요소인 a
      // a가 reserve의 요소인 r과  r-1, r, r+1  관계면 b 에 할당
      const b = reserve.find((r) => Math.abs(r - a) <= 1);

      // 할당 된 b 가 존재하면 true
      // return true를 통해 filter를 통과한 a 요소는 새로운 배열에 담긴다.
      if (!b) return true;

      // r !== b 만족하는 r 만 새로운 배열에 담는다.
      reserve = reserve.filter((r) => r !== b);
    }).length
  );
};

// filter(callback): function : callback 처리후 새로운 배열을 반환
// find(): function : callback을 만족하는 첫번째 요소를 반환

// console.log(spare(5, [2, 4], [1, 3, 5])); // 5
// console.log(spare(5, [2, 4], [3])); // 4
// console.log(spare(3, [3], [1])); // 2
// console.log(spare(5, [1, 2], [2, 3])); // 4
// console.log(spare(3, [1, 2], [2, 3])); // 2
// console.log(spare(3, [1, 2, 3], [1, 2, 3])); // 3
// console.log(spare(7, [2, 3, 4], [1, 2, 3, 6])); // 6
// console.log(spare(5, [2, 3, 4], [3, 4, 5])); // 4

// filter(callback): function : callback 처리후 새로운 배열을 반환
// find(): function : callback을 만족하는 첫번째 요소를 반환

//? 문제 : 큰 수 만들기

// n 에서 k개를 제거했을때 가장 큰 숫자 구하기

const bigNumber = (number, k) => {
  let stack = []; // b : 최종 글자들이 저장될 스택 (숫자가 큰!)
  for (var i = 0; i < number.length; i++) {
    // 모든 숫자 비교
    var now = number[i]; // 현재 인덱스 숫자. 처음에는 그냥 push

    // 무조건 push 하고 다음 for 문에서 이전인덱스 숫자와 나랑 비교해서 현재인덱스가 이전인덱스보다 크면 pop하고 넣어줌. 제거하는 숫자인 (k)를 1 감소
    // 제거할 숫자를 다 채웠으면 그냥 넣음
    while (k > 0 && stack[stack.length - 1] < now) {
      stack.pop();
      k--;
    }
    stack.push(now);
  }
  // k가 0일 경우 스택은 그대로,
  // but k가 남아있으면 뒤에서부터 제거해준다. (ex. 1010,2 -> 11)
  stack.splice(stack.length - k, k);
  var answer = stack.join('');

  return answer;
};

console.log(bigNumber('1924', 2));
console.log(bigNumber('1231234', 3));
console.log(bigNumber('4177252841', 4));
