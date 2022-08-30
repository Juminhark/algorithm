//? 문제 : 기타 레슨

//? N개의 레슨을 블루레이로 만들어 팔려고 한다.
//? 총 M개의 블루레이를 이용할 때, 가능한 블루레이의 크기 중 최소값은?
//? 단, 레슨의 순서가 바뀌면 안된다
//? n = 9, m = 3, [1,2,3,4,5,6,7,8,9]

const solution = (n, m, songs) => {
  let answer;

  let left = Math.max(...songs);
  let right = songs.reduce((a, b) => a + b, 0);

  const count = (songs, k) => {
    let count = 1;
    let sum = 0;

    for (let x of songs) {
      if (sum + x > k) {
        count++;
        sum = x;
      } else sum += x;
    }

    return count;
  };

  while (right >= left) {
    let mid = Math.floor((left + right) / 2);

    // count가 적으면 범위를 낮춰야한다
    if (count(songs, mid) <= m) {
      answer = mid;
      right = mid - 1;
    } else left = mid + 1;
  }

  return answer;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(9, 3, arr));

//* 구해야하는 값 : 블루레이의 크기
//* left : Math.max(...songs) : 블루레이의 최소값
//* right : Array.reduce((a,b) => a + b, 0) : 블루레이의 최대값
