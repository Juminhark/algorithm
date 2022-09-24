//? 문제 : 곱하기 혹은 더하기

//? 각자리가 숫자로 이루어진 문자열 S가 주어졌을 때,
//? 왼쪽부터 오른쪽으로 하나씩 모든 숫자를 확인하여
//? 'x' 혹은 '+' 연산자를 넣어 만들수 있는 가장 큰 수를 출력

//* 정당성 분석
//* 두 수가 0, 1이 아닌경우 곱하기가 더 값이 크다

const solution = (s) => {
  let data = s.split('');
  let answer = data[0];

  for (let i = 1; i < data.length; i++) {
    let num = data[i];
    if (num <= 1 || answer <= 1) {
      answer += num;
    } else {
      answer *= num;
    }
  }

  return answer;
};

console.log(solution('02984')); // 576
