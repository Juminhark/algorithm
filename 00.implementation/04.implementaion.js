//? 대표적 문제 : 문자열 재정열

//? 주어진 문자열을 알파벳 오름차순 이후 모든숫자의 합을 이어서 출력

const solution = (str) => {
  let answer = '';
  let arr = str.split('');
  let Rep = /^[A-Z]$/; // 문자 1개를 A-Z 안에 있는지 확인

  let tmp = [];
  let count = 0;

  // 각 문자 확인
  for (let i = 0; i < arr.length; i++) {
    if (Rep.test(arr[i])) {
      // 문자인 경우
      tmp.push(arr[i]);
    } else {
      // 문자가 아닌 경우 => 숫자
      count += Number(arr[i]);
    }
  }

  // 대문자 배열 오름차순
  tmp.sort();

  for (let i of tmp) {
    answer += i;
  }

  // 숫자가 1개 이상 존재할 겨우 가장 뒤에 삽입
  if (count !== 0) {
    answer += count;
  }

  return answer;
};

console.log(solution('K1KA5CB7'));
console.log(solution('AJKDLSI412K4JSJ9D'));

//* 정규식표현
//* rep.test()
