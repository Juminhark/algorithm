// https://school.programmers.co.kr/learn/courses/30/lessons/120876

//? 문제 : 겹치는 선분의 길이

// 빨간색, 초록색, 파란색 선분의 x좌표의 시작과 끝이 주어진 2차원 배열 lines가 주어질 때,
// 두개 이상의 선분이 겹치는 부분의 길이를 return
// [start, end]

const solution = (lines) => {
  let lines_obj = {};
  let answer = 0;

  for (let [start, end] of lines) {
    for (let i = start; i < end; i++) {
      let num = i.toString();
      lines_obj[num] ? lines_obj[num]++ : (lines_obj[num] = 1);
    }
  }

  Object.values(lines_obj).map((e) => {
    if (e > 1) answer++;
  });

  return answer;
};

console.log(
  solution([
    [0, 1],
    [2, 5],
    [3, 9],
  ])
); // 2

const solution2 = (lines) => {
  let answer = 0;
  let dy = Array.from({ length: 200 }, () => 0);

  for (let e of lines) {
    let [start, end] = e.sort();
    start += 100;
    end += 100;

    while (start < end) {
      dy[start]++;
      start++;
    }
  }

  dy.forEach((e) => {
    if (e > 1) answer++;
  });

  // answer = dy.filter(e => e >1 ).length

  return answer;
};

//* 다른 사람 풀이
const solution3 = (lines) => {
  let line = new Array(200).fill(0);

  lines.forEach(([a, b]) => {
    for (; a < b; a++) line[a + 100]++;
  });

  return line.reduce((acc, cur) => (cur > 1 ? acc + 1 : acc), 0);
};
