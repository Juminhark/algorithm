//? 추가 : forEach, map, filter, reduce method 작동원리

let a = [10, 11, 12, 13, 14, 15];

//* Array.forEach()
// arr.forEach(callback(cur[,index [, array]]))[, thisArg]
// 주어진 함수를 배열 요소 각각에 실행

//! forEach()를 중간에 멈출수 없다
a.forEach((cur, index) => console.log([cur, index, this]), [1, 2]);
a.forEach(
	function (cur, index) {
		console.log([cur, index, this]);
	},
	[1, 2]
);

//* arrow function expression
// this, super에 대한 바인딩이 없고, methods를 사용할수없다

//* Array.map()
// arr.map(callback(currentValue[, index[, array]])[, thisArg])
// 모든 요소에 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환

const map1 = a.map((x) => x * x);
const map2 = a.map((v, i) => {
	if (v % 2 === 0) return v;
});
console.log(map1);
console.log(map2);

//* Array.filter()
// arr.filter(callback(element[, index[, array]])[, thisArg])
// 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열을 반환

const filter1 = a.filter((a) => {
	return a % 2 === 0;
});
console.log(filter1);

//! map과 filter은 새로운 배열을 return
//! map은 모든 요소의 결과, filter은 통과하는 요소만 모아 return

//* Array.reduce()
// 배열의 각 요소에 대해 주어진 reduce함수를 실행하고,
// 하나의 결과값을 반환
// ex) 배열 전체 sum
const init = 0;
const sum = a.reduce((acc, cur, index) => {
	console.log(index);
	return acc + cur;
}, init);
console.log(sum);
