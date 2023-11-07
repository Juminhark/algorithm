// 1 + (k-1) * 2

const solution = (numbers, k) => {
  let arr = [...numbers];
  let choice = 1 + (k - 1) * 2;

  console.log(choice);

  while (choice > arr.length) {
    arr = [...arr, ...numbers];
  }

  return arr[choice - 1];
};

// console.log(solution([1, 2, 3, 4], 2));
console.log(solution([1, 2, 3, 4, 5, 6], 5));
