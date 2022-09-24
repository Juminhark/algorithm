//? 문제 : 거스름돈

//? 거스름돈으로 사용가능한 500, 100, 50, 10 동전이 무한히 존재
//? N원들 거슬러주어야 할 동전의 최소 개수를 출력

//* greedy 정당성 분석
//* 큰 단위부터 거슬러 주는것으로 최적의 해를 보장할 수 있는 이유
//* 큰 단위가 작은 단위의 배수이므로 작은 단위 동전들을 종합해 다른 해가 나올수 없기 떄문
//* 만약 [500, 400, 100]화폐로 800을 거슬러주면
//* 500: 1, 100: 3 으로 4개로 주는것보다 400:2 로 2개가 최적의 해
//* 이 경우 greedy로 보기 어렵다 => 이경우 DP

const solution = (n) => {
  let answer = 0;
  let coins = [500, 100, 50, 10];

  for (let i of coins) {
    answer += Math.floor(n / i);
    n %= i;
  }

  return answer;
};

// console.log(solution(1260)); // 6
// console.log(solution(3260)); // 10
// console.log(solution(1000)); // 2

//* 시간 복잡도 분석
//* 화폐의 종류가 K 일 때, O(K)
