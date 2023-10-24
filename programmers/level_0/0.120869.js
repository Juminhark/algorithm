// https://school.programmers.co.kr/learn/courses/30/lessons/120869

//? 문제 : 외계어 사전

// 알파벳 배열 spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 문자열 배열 dic에 존재하면 1, 존재하지 않으면 2 return

const solution = (spell, dic) => {
  let len = spell.length;

  for (let i of dic) {
    let arr = i.split('');

    if (arr.length !== len) continue;

    for (let j of spell) {
      if (arr.includes(j)) arr.splice(arr.indexOf(j), 1);
    }

    if (arr.length === 0) return 1;
  }

  return 2;
};

console.log(solution(['p', 'o', 's'], ['sod', 'eocd', 'qixm', 'adio', 'soo'])); // 2
console.log(solution(['z', 'd', 'x'], ['def', 'dww', 'dzx', 'loveaw'])); // 1
console.log(
  solution(['s', 'o', 'm', 'd'], ['moos', 'dzx', 'smm', 'sunmmo', 'som'])
); // 1

const solution2 = (spell, dic) => {
  return dic.some((e) => spell.sort().toString() == [...e].sort().toString())
    ? 1
    : 2;
};
