//? 문제 : 숨어있는 숫자의 덧셈(1)

//? 문자열 안의 숫자 더하기

const solution = (my_string) => {

    return my_string.match(/[0-9]/g).reduce((acc,cur) => {
        return acc + Number(cur)
    },0);
}

console.log(solution(	"1a2b3c4d123"))