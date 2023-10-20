//? 문제 : 성격 유형 검사하기

//? 성격 유형 검사는 4개 지표로 성격유형을 구분한다
//? 성격은 각 지표에서 두 유형 중 하나로 결정된다

//? 1번 지표 : 라이언형(R), 튜브형(T)
//? 2번 지표 : 콘형(C), 프로도형(F)
//? 3번 지표 : 제이지형(J), 무지형(M)
//? 4번 지표 : 어피치형(A), 네오형(N)

//? 검사지에는 총 N개의 질문이있고, 각 질문에는 7개의 선택지가 있다
//? 매우 비동의, 비동의, 약간 비동의, 모르겠음, 약간 동의, 동의, 매우 동의

//? 매우 동의, 매우 비동의 3점
//? 동의, 비동의 2점
//? 약간 동의, 약간 비동의 1점
//? 모르겠음 점수없음

//? 각 지표에서 더 높은 점수를 받은 성격 유형이 검사자의 성격 유형
//? 각 지표에서 성격 유형 점수가 같으면 두 성격 유형중 사전 순으로 빠른 유형

//? 질문 판단 지표 survey
//? 각 질문마다 선택한 선택지 choices
//? 검사자의 성격 유형 검사 결과를 지표 번호 순서대로 return

const solution = (survey, choices) => {
  let answer = '';

  let count = Array(4).fill(0);
  const a = ['R', 'C', 'J', 'A'];

  let result = [3, 2, 1, 0, -1, -2, -3];
  let resultReverse = [-3, -2, -1, 0, 1, 2, 3];

  // R, T
  // C, F
  // J, M
  // A, N

  for (let i in choices) {
    let tmp = survey[i].split('');

    for (let e of a) {
      if (tmp.includes(e)) {
        if (tmp[0] === e) {
          count[a.indexOf(e)] += result[choices[i] - 1];
        } else {
          count[a.indexOf(e)] += resultReverse[choices[i] - 1];
        }
      }
    }
  }

  if (count[0] >= 0) answer += 'R';
  else answer += 'T';

  if (count[1] >= 0) answer += 'C';
  else answer += 'F';

  if (count[2] >= 0) answer += 'J';
  else answer += 'M';

  if (count[3] >= 0) answer += 'A';
  else answer += 'N';

  return answer;
};

// console.log(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5])); // "TCMA"
// console.log(solution(['TR', 'RT', 'TR'], [7, 1, 3])); // "RCJA"

function solution2(survey, choices) {
  const MBTI = {};
  const types = ['RT', 'CF', 'JM', 'AN'];

  types.forEach((type) => type.split('').forEach((char) => (MBTI[char] = 0)));

  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];
    MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join('');
}

// console.log(solution2(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5])); // "TCMA"
// console.log(solution2(['TR', 'RT', 'TR'], [7, 1, 3])); // "RCJA"
