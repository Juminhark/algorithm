//? 문제 : 문자열 밀기

const solution = (A, B) => {
    let answer = -1;
    let count = 0;
    let str = [...A]
    let len = A.length
    
    do {
      if(str.join('') === B) {
        return count;
      }

      count++;
      let unit = str.pop();
      str.unshift(unit)
    } while(len--)
    
    return answer;
}

console.log(solution("hello", "ohell"))


const solution2 = (A,B) => {
    
    console.log(A)
    console.log(B + B)
    
    return (B + B).indexOf(A)
}

console.log(solution2("hello", "ohell"))
