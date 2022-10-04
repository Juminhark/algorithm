//? 문제 : 완주하지 못한 선수

//? 참여자(participant)중 완주자(completion) 목록에 없는 1인을 찾아라

//! 시간 초과!
const solution_1 = (participant, completion) => {
  let answer = [];

  for (let i of completion) {
    let index = participant.indexOf(i);

    if (index !== -1) {
      participant.splice(index, 1);
    }
  }

  answer = participant.join('');

  return answer;
};

console.log(
  solution_1(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
);

/////////////////////////////////////////////////////////////////////////////////////////

//! 시간 초과!
const solution_2 = (participant, completion) => {
  completion.forEach((unit) => {
    participant.splice(participant.indexOf(unit), 1);
  });

  return participant[0];
};

console.log(
  solution_2(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
);

/////////////////////////////////////////////////////////////////////////////////////////

//! 위에 1, 2번 풀이는 participant.indexOf(unit) 과정에서 전체 요소를 비교해야하여 시간 초과
//! 중요한것은 hash 문제이기 때문에 hash를 사용하면 쉽게 풀수있다.

//! [객체 내의 값 인스턴스 개수 세기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#%EA%B0%9D%EC%B2%B4_%EB%82%B4%EC%9D%98_%EA%B0%92_%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4_%EA%B0%9C%EC%88%98_%EC%84%B8%EA%B8%B0)
const solution_3 = (participant, completion) => {
  let countedNames = participant.reduce((allNames, name) => {
    if (name in allNames) {
      allNames[name]++;
    } else {
      allNames[name] = 1;
    }
    return allNames;
  }, {});

  completion.forEach((unit) => {
    if (countedNames[unit]) {
      countedNames[unit]--;
    }
    if (countedNames[unit] === 0) {
      delete countedNames[unit];
    }
  });

  return Object.keys(countedNames)[0];
};

console.log(
  solution_3(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
);

/////////////////////////////////////////////////////////////////////////////////////////

const solution_4 = (participant, completion) => {
  // 참가자 명단을 hash(key:value)화 => js에선 object 구조
  // 참가자 명단의 각 이름이 몇개인지 정량화
  let hash_list = participant.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? ++acc[cur] : 1;
    return acc;
  }, {});

  // 정량화된 참가자명단에서 완주자를 지워나간다
  completion.forEach((unit) => {
    if (hash_list[unit]) {
      hash_list[unit]--;
    }
    if (hash_list[unit] === 0) {
      delete hash_list[unit];
    }
  });

  return Object.keys(hash_list)[0];
};

console.log(
  solution_4(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
);

/////////////////////////////////////////////////////////////////////////////////////////

//! 어렵네 이건
const solution_5 = (participant, completion) =>
  participant.find(
    (participant) => !completion[participant]--,
    completion.map(
      (participant) =>
        (completion[participant] = (completion[participant] | 0) + 1)
    )
  );

console.log(
  solution_5(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
);
