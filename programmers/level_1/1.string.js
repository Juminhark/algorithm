//? 문자열 내 p와 y의 개수

//? 대문자와 소문자가 섞여있는 문자열 s가 주어질 때,
//? s에 'p'의 개수와 'y'의 개수를 비교해 같으면 true, 다르면 false return
//? 'p', 'y' 모두 하나도 없는 경우 항상 true 리턴
//? s : 'pPoooyY => true
//? s : 'Pyy' => false

const solution = (s) => {
  let cntp = 0;
  let cnty = 0;

  for (let e of s.toLowerCase()) {
    if (e === 'p') cntp++;
    if (e === 'y') cnty++;
  }
  if ((cntp === 0 && cnty === 0) || cntp === cnty) return true;
  if (cntp !== cnty) return false;
};

console.log(solution('pPoooyY')); // true
console.log(solution('Pyy')); // false

//* String.toLowerCase()

//? 정규식 method
const solution2 = (s) => {
  return s.match(/p/gi).length === s.match(/y/gi).length;
};

console.log(solution('pPoooyY')); // true
console.log(solution('Pyy')); // false
