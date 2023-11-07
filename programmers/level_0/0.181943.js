// https://school.programmers.co.kr/learn/courses/30/lessons/181943

//? 문제 : 문자열 겹쳐쓰기

// const solution = (my_string, overwrite_string, s) => {
//   return my_string
//     .split(my_string.slice(s, s + overwrite_string.lengt))
//     .join(overwrite_string);
// };

// const solution = (my_string, overwrite_string, s) => {
//   let len = overwrite_string.length;
//   return my_string.replace(my_string.substring(s, s + len), overwrite_string);
// };

// const solution = (my_string, overwrite_string, s) => {
//   let len = overwrite_string.length;
//   return my_string.replace(my_string.slice(s, s + len), overwrite_string);
// };

//! 위에 오류 반례
//! console.log(solution('aaaaaa', 'bbb', 3)); // 기대값 "aaabbb" 실제값 "bbbaaa"

const solution = (my_string, overwrite_string, s) => {
  return (
    my_string.substring(0, s) +
    overwrite_string +
    my_string.substring(s + overwrite_string.length)
  );
};

console.log(solution('He11oWor1d', 'lloWorl', 2));
console.log(solution('aaaaaa', 'bbb', 3));
