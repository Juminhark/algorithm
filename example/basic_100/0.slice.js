//? 문제 : 잘라서 배열로 저장하기

//? 문자열 my_str 을 n 씩 잘라서 저장한 배열을 return

const solution = (my_str, n) => {
    let answer = [];
    let len = my_str.length;
    let count = 0;

    while(count < len) {
        answer.push(my_str.slice(count, count +=n ))
    }

    return answer;
}

console.log(solution("abc1Addfggg4556b",6))
console.log(solution("abcdef123",3))

//? 정규식 풀이

const solution2 = (my_str, n) => {
  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}