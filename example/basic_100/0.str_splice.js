//? 문제 : 컨트롤 제트


const solution = (s)  =>{
    let arr = s.split(' ')
    while(arr.includes('Z')) arr.splice(arr.indexOf('Z') -1 , 2)
    return arr.reduce((acc,cur) => acc += Number(cur), 0);
}

console.log(solution("1 2 Z 3"))