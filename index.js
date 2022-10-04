//? 문제 : 다트 게임

//? 다트 게임은 다트판에 다트를 세 차례 던져 그 점수릐 합계를 기록
//? 1. 각 기회에서 얻을 수 있는 점수는 0 ~ 10점
//? 2. Single(S) : 1제곱, Double(D) : 2제곱, Triple(T) : 3제곱 으로 계산
//? 3. 스타상(*) : 해당 점수와 바로 전에 얻은 점수를 각 2배, 아차상(#) : 해당 점수는 마이너스
//? 4. 스타상(*)이 첫번 째 기회에 나올시 첫 점수만 2배
//? 5. 스타상은 다른 스타상과 중첩 가능 : 4배
//? 6. 스타상은 아차상과 중첩될수 있다 : -2배
//? 7. SDT는 점수마다 하나씩 존재
//? 8. * # 은 점수마다 둘중 하나만 존재하거나 존재 하지 않을수 있다

const solution = (dartResult) => {
  let nums = [];
  let count = 0;
  let list = dartResult.split('');

  for (let i of list) {
    if (/[0-9]/.test(i)) {
      nums.push(i * 1);
      count++;

      if (i === '0' && nums[count - 2] === 1) {
        nums[count - 2] = 10;
        nums.pop();
        count--;
      }
    } else if (i === 'D') {
      nums[count - 1] = nums[count - 1] ** 2;
    } else if (i === 'T') {
      nums[count - 1] = nums[count - 1] ** 3;
    } else if (i === '*') {
      nums[count - 1] = nums[count - 1] * 2;
      if (count > 1) {
        nums[count - 2] = nums[count - 2] * 2;
      }
    } else if (i === '#') {
      nums[count - 1] = nums[count - 1] * -1;
    }
  }

  return nums.reduce((acc, cur) => acc + cur, 0);
};

// console.log(solution('1S2D*3T')); // 37
console.log(solution('1D2S#10S')); // 9

const solution2 = (dartResult) => {
  const bonus = { S: 1, D: 2, T: 3 };
  const options = { '*': 2, '#': -1, undefined: 1 };

  let darts = dartResult.match(/\d.?\D/g);

  console.log(darts);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
      score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

    if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
};

console.log(solution2('1S2D*3T')); // 37
// console.log(solution2('1D2S#10S')); // 9
