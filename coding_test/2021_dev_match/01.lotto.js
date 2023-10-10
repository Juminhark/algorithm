//? 문제 :  로또의 최고 순위와 최저 순위

//? 1부터 45까지의 숫자 중 6개를찍어 맞히는 복권
//? 1위(6개 일치) ~ 5위(2개 일치), 6위(그 외)
//? 구매한 로또 번호의 일부가 알아볼수 없게 되었을 때,
//? 알아볼수 없는 번호를 0으로 표기 했을 때,
//? 당첨이 가능했던 최고 순위와 최저 순위를 return

//? lottos : [44, 1, 0, 0, 31, 25]
//? win_nums : [31, 10, 45, 1, 6, 19]
//? result : [3, 5]
//? [31, 1] 2개가 맞아있는 상태이므로 최저 5위
//? [0, 0]이 나머지 당첨번호라면 4개가 맞아 3위

//? 0은 알아볼 수 없는 숫자를 의미
//? 0을 제외한 다른 숫자들은 2개 이상 담겨있지 않다
//? lottos의 원소들은 정렬되어 있지 않을수 있다

const solution = (lottos, win_nums) => {
  let answer = [];
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let has = []; // 맞는 번호
  let count = 0; // 0 개수 확인

  // 맞는 번호각 count해서 최저 상태 확인하고
  // 0개수 를 확인해서 최고 상태 확인

  for (let i of lottos) {
    if (i === 0) {
      count++;
      continue;
    }

    if (win_nums.includes(i)) has.push(i);
  }

  let len = has.length;

  answer.push(rank[len + count], rank[len]);

  return answer;
};

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
