//? 문제 : 짝수 홀수 개수

//? 정수가 담긴 리스트 num_list가 주어질 때,
//? num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return

const solution = (num_list) => {
    let answer = [0, 0];
    
    num_list.forEach((e) => (e % 2 === 0) ? answer[0]++ : answer[1]++)
    
    return answer;
}

console.log(solution([1, 2, 3, 4, 5])); // [2, 3]
console.log(solution([1, 3, 5, 7])); // [0, 4]
