//? 문제 : 신고 결과 받기

//? 각 유저는 한 번에 한명의 유저를 신고할 수 있습니다
//? 신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속 신고 할수 있습니다
//? 한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다

//? k번 이상 신고된 유저는 게시판이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다
//? 유저가 신고한 모든 내욜을 취합하여 마지막에 한꺼번에 게시판 이용정지를 시키면서 정지 메일을 발송합니다

const solution = (id_list, report, k) => {
  let answer = Array(id_list.length).fill(0);
  let out = [];
  let newReport = new Set(report);
  let id_set = {};

  id_list.forEach((e) => (id_set[e] = new Set()));

  for (let i of newReport) {
    let tmp = i.split(' ');
    id_set[tmp[1]].add(tmp[0]);
    if (id_set[tmp[1]].size === k) out.push(tmp[1]);
  }

  for (let i of out) {
    id_set[i].forEach((e) => {
      let index = id_list.indexOf(e);
      answer[index]++;
    });
  }

  return answer;
};

// console.log(
//   solution(
//     ['muzi', 'frodo', 'apeach', 'neo'],
//     ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
//     2
//   )
// ); // [2,1,1,0]

// console.log(
//   solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3)
// ); // [0, 0]

function solution2(id_list, report, k) {
  // 중복제거
  let reports = [...new Set(report)].map((a) => {
    return a.split(' ');
  });
  console.log(reports);

  let counts = new Map();

  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }
  console.log(counts);

  let good = new Map();

  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }
  console.log(good);

  let answer = id_list.map((a) => good.get(a) || 0);
  return answer;
}

console.log(
  solution2(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2
  )
); // [2,1,1,0]
