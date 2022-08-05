// dopa = "life is limited";
// Q1: 앞에서 3개의 문자열을 뽑아내라.
// Q2: 거꾸로 해서 출력하라
// Q3: 거꾸로 한다음 그 이후에 dopa!!를 추가하라

const dopa = 'life is limited';

const arrayDopa = dopa.split(' ');

//! 원본배열 회손없이 reverse
const reverse = [...arrayDopa].reverse();
const stringReverse = reverse.join(' ');

// const reverseDopa = reverse.push('dopa!!');
//! return 4

reverse.push('dopa!!');
const stringReverseDopa = reverse.join(' ');

console.log(arrayDopa);
console.log(stringReverse);
console.log(stringReverseDopa);

function solution(id_list, report, k) {
	const answer = new Array(id_list.length).fill(0);

	const report_list = {};

	id_list.map((user) => {
		report_list[user] = [];
	});

	report.map((el) => {
		const [user_id, report_id] = el.split(' ');
		if (!report_list[report_id].includes(user_id)) {
			report_list[report_id].push(user_id);
		}
	});

	for (const key in report_list) {
		if (report_list[key].length >= k) {
			report_list[key].map((user) => {
				answer[id_list.indexOf(user)] += 1;
			});
		}
	}

	return answer;
}

console.log(
	solution(
		['muzi', 'frodo', 'apeach', 'neo'],
		['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
		2
	)
);
