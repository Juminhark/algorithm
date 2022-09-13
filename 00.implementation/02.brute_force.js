//? 문제 : 시각

//? 00시 00분 00초 ~ n시 59분 59초까지 모든 시각 중에서
//? 3이 하나라 도 포함되는 모든 경우의 수

// 00시 00분 03초
// 00시 13분 30초

//* 24 * 60 * 60 = 86400 => 경우의 수가 크지않기 때문에 완전탐색
//* 3중 for문 같은 경우 n의 범위가 작게 주어진다.

const solution = (n) => {
  let count = 0;

  for (let h = 0; h <= n; h++) {
    for (let min = 0; min < 60; min++) {
      for (let sec = 0; sec < 60; sec++) {
        let d = '' + h + min + sec;
        d.split('');
        if (d.indexOf('3') !== -1) {
          count += 1;
        }
      }
    }
  }

  return count;
};

console.log(solution(5));
