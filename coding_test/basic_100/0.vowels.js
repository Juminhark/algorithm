// 문제 : 모음 제거

const solution = (my_string) => {
    let answer = '';
    const vowels = ['a','e','i','o','u']
    
    for(let i of my_string){
        if(!vowels.includes(i)) answer += i
    }
    
    return answer;
}

function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}


function solution(my_string) {
    return Array.from(my_string).filter(t => !['a', 'e', 'i', 'o', 'u'].includes(t)).join('');
}