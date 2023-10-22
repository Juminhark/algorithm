// 첫번쨰
const check = (i) => {
  for (let e = 2; e < i; e++) {
    if (i % e === 0) return false;
  }

  return true;
};

const isPrime = (n) => {
  return n === 1 ? true : check(n);
};

// 두번쨰
const isPrime2 = (n) => {
  // Prime number : 1과 자기 자신만으로만 나눌수 있는 수
  // 2 ~ n-1까지중에 나눠지는게 있으면 소수
  let num = 2;
  while (num < n) {
    if (n % num === 0) return false;
    num++;
  }

  return true;
};

//? 다른사람꺼 : Math.sqrt()
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
