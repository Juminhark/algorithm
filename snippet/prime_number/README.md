# prime number

```js
const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
```

## 문제

- [0 level 120852 : 소인수분해](../../programmers/level_0/0.120852.js)
