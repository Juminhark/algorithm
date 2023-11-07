// https://school.programmers.co.kr/learn/courses/30/lessons/120852

//? 문제 : 소인수분해

const solution = (n) => {
  let answer = [];
  let prime = 2;

  while (n > 1) {
    if (n % prime === 0) {
      // 소수로 나눠지면 answer에 소수를 넣고
      // 소수로 나눈값을 다음값으로 지정
      if (answer[answer.length - 1] !== prime) answer.push(prime);
      n /= prime;
    } else {
      // 다음 소수로 나눈다
      do {
        prime++;
      } while (!isPrime(prime));
    }
  }

  return answer;
};

const isPrime = (n) => {
  // Prime number : 1과 자기 자신만으로만 나눌수 있는 수
  // 2 ~ n-1까지중에 나눠지는게 있으면 소수
  let num = 2;
  while (num < n) {
    if (n % num === 0) return false;
    num++;
  }

  return true;
};

console.log(solution(12)); // [2, 3]
console.log(solution(420)); // [ 2, 3, 5, 7 ]
