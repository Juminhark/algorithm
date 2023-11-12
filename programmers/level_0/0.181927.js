// https://school.programmers.co.kr/learn/courses/30/lessons/181927

//? 문제 : 마지막 두 원소
// 정수 리스트 num_list의 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺸 값을
// 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두배 한 값을 추가하여 return

const solution = (num_list) => {
  let b = num_list[num_list.length - 1]; // 마지막 원소
  let a = num_list[num_list.length - 2]; // 그 전 원소

  if (b > a) {
    num_list.push(b - a);
  } else {
    num_list.push(b * 2);
  }

  return num_list;
};

console.log(solution([5, 2, 1, 7, 5]));

//* 다른 사람 풀이
const solution2 = (num_list) => {
  const [a, b] = [...num_list].reverse();

  return [...num_list, a > b ? a - b : a * 2];
};

console.log(solution2([5, 2, 1, 7, 5]));
