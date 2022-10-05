//? 문제 : 옹알이

//? 조카가 'aya', 'ye', 'woo', 'ma' 4가지 발음을 조합해서 발음할수 있을 때,
//? 문자열 babbling 에서 조카가 발음할수 있는 단어의 개수를 return

const solution = (babbling) => {
  let answer = 0;
  let words = ['aya', 'ye', 'woo', 'ma'];
  let str = [...babbling];

  for (let e in str) {
    for (let i in words) {
      const regexp = new RegExp(words[i], 'g');
      str[e] = str[e].replace(regexp, i);
    }

    let arr = str[e].split('');
    let len = arr.length;
    answer++;
    for (let i = 0; i < len; i++) {
      if (arr[i].match(/\D/)) {
        answer--;
        break;
      } else {
        if (i + 1 < len && arr[i] === arr[i + 1]) {
          answer--;
          break;
        }
      }
    }
  }

  return answer;
};

console.log(solution(['aya', 'yee', 'u', 'maa'])); // 1
// console.log(solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa'])); // 2

const solution2 = (babbling) => {
  let answer = 0;
  let words = ['aya', 'ye', 'woo', 'ma'];

  for (let e of babbling) {
    if (words.some((i) => e.includes(i + i))) continue;

    let rest = words.reduce((acc, cur) => {
      let reg = new RegExp(cur, 'g');
      return acc.replace(reg, '');
    }, e);

    if (rest.length > 0) continue;

    answer++;
  }

  return answer;
};

console.log(solution2(['aya', 'yee', 'u', 'maa'])); // 1
console.log(solution2(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa'])); // 2
