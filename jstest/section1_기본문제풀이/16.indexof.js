//? 문제 : 중복문자제거

// 소문자로 된 문자열 중 중복된 문자를 제거하고 출력
// 나머지 문자는 순서 유지

//* String.indexOf()
// str.indexOf(searchValue[, fromIndex])
// String 객체에서 값과 일치하는 첫 번째 인덱스 반환
// 없으면 -1

const solution = (str) => {
  let answer = [];
  let strArr = str.split('');

  while (strArr.length) {
    let el = strArr.shift();
    // console.log(el);
    strArr = strArr.filter((e) => {
      return e !== el;
    });
    // console.log(strArr);
    answer.push(el);
  }
  return answer.join('');
};

// console.log(solution('ksekkset')); // kset

//* str.split() : str을 나눈 새로운 arr 반환
//* filter() : 새로운 배열 반환

//? 영상 풀이
const solution2 = (s) => {
  let answer = '';
  // console.log(s.indexOf('k', 1)); //* index 1 부터 탐색

  for (let i = 0; i < s.length; i++) {
    // console.log(s[i], i, s.indexOf(s[i]));
    if (s.indexOf(s[i]) === i) answer += s[i];
  }

  return answer;
};

console.log(solution2('ksekkset'));

//? 문자열에서 특정 문자 갯수 찾기
const solution3 = (s) => {
  let answer = 0;
  let pos = s.indexOf('k');

  while (pos !== -1) {
    answer++;
    pos = s.indexOf('k', pos + 1);
  }

  return answer;
};

console.log(solution3('ksekkset'));
