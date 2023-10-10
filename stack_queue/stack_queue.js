//* Stack 자료구조 : 나중에 들어온 data가 먼저 나가는 구조

let stack = [];
stack.push(5);
stack.push(2);
stack.push(3);
stack.push(7);
stack.pop();
stack.push(1);
stack.push(4);
stack.pop();
// console.log(stack);
// console.log(stack.reverse());

// arr.push() : 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환
// arr.pop() : 배열의 마지막 요소를 제거하고 그 요소를 반환
// arr.reverse() : 배열의 요소 순서를 반전

//* Queue 자료구조 : 먼저 들어온 data가 먼저 나가는 구조

let queue = [];
queue.push(5);
queue.push(2);
queue.push(3);
queue.push(7);
queue.shift();
queue.push(1);
queue.push(4);
queue.shift();
// console.log(queue);
// console.log(queue.reverse());

// arr.shift() : 배열에서 첫 번째 요소를 삭제하고 그 요소를 반환.
// arr.unshift() : 배열에서 첫 번째 요소를 삭제하고 그 요소를 반환.

//? 문제: 기능개발
// 각 기능은 진도가 100%일 때 서비스에 반영
// 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses
// 각 작업의 개발 속도가 적힌 정수 배열 speeds

const developmentFunction = (progresses, speeds) => {
  let result = [];
  let answer = [];

  // 각 progresses 에 speed를 반복적으로 더해 완료 일자를 구한다
  for (let f in progresses) {
    let count = 0;
    while (progresses[f] < 100) {
      progresses[f] += speeds[f];
      count++;
    }
    result.push(count);
  }
  console.log('기능 별 완료 일자');
  console.log(result);

  let max = result.shift();
  let next = 1;

  //! stack 자료 구조를 사용.
  //! 이 작업을 위의 for문 안에서 해결 가능.
  while (result.length !== 0) {
    let a = result.shift();
    if (max < a) {
      max = a;
      answer.push(next);
      next = 1;
    } else {
      next++;
    }
    if (result.length == 0) {
      answer.push(next);
    }
  }

  return answer;
};

// console.log(developmentFunction([93, 30, 55], [1, 30, 5]));
console.log(developmentFunction([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));

//* queue stack

//? 문제 : 다리를 지나는 트럭

// bridge_length : 다리 길이, weight: 다리가 견디는 무게, truck_weights: 대기 트럭
// 1초에 1씩 트럭 이동.

const bridge = (bridge_length, weight, truck_weights) => {
  let br = Array(bridge_length).fill(0);
  let countWeight = 0;
  let sec = 0;
  let last = truck_weights[truck_weights.length - 1];

  // console.log(br);
  // console.log(last);
  let start = true;
  while (start) {
    let check = truck_weights[0]; // 다리로 진입할 트럭의 무게
    countWeight -= br[0]; // 다리위를 통과할 트럭을 전체 무게에서 빼준다
    // console.log('check : ' + check);
    // console.log('countWeight : ' + countWeight);

    // 다리 진행중 상황
    if (countWeight + check <= weight) {
      let unit = truck_weights.shift();
      br.push(unit);
      countWeight += unit;
    } else {
      br.push(0);
    }

    sec += 1;
    br.shift();
    // console.log(br);
    // console.log(sec);

    let endCheck = br.every((item) => {
      return item == 0;
    });

    // 종료시점
    if (truck_weights.length == 0 && endCheck) {
      start = false;
    }
  }
  return sec;
};

// console.log(bridge(2, 10, [7, 4, 5, 6])); //8
// console.log(bridge(100, 100, [10])); // 101
// console.log(bridge(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); //110

//? 문제 : 프린터

// 프린터는 배열의 앞에서 부터 인쇄
// 프린터 될 순서의 문서가 대기 문서의 중요도 보다 낮으면 대기열 맨 뒤로 이동

//! 문제 잘못이해

const print = (priorities, location) => {
  let result = String(Number(location) + 1);

  console.log(result);
  // 배열 재정의
  let importantMap = {};
  for (let unit in priorities) {
    importantMap[Number(unit) + 1] = priorities[unit];
  }
  console.log(importantMap);

  for (let unit in priorities) {
    priorities[unit] = String(Number(unit) + 1);
  }
  console.log(priorities);

  console.log(importantMap[priorities[2]]);

  let start = true;
  while (start) {
    let check = importantMap[priorities[0]];
    let arr = priorities.slice(1);

    let end = arr.every((i) => {
      return check >= importantMap[i];
    });

    if (end) {
      start = false;
    } else {
      let unit = priorities.shift();
      priorities.push(unit);
    }
  }

  console.log(importantMap);
  console.log(priorities);

  return priorities.indexOf(result) + 1;
};

// console.log(print([2, 1, 3, 2], 2));
// console.log(print([1, 1, 9, 1, 1, 1], 0));
// console.log(print([2, 2, 2, 1, 3, 4], 3));

//? 문제 : 프린터

// 프린터는 배열의 앞에서 부터 인쇄
// 프린터 될 순서의 문서가 대기 문서의 중요도 보다 낮으면 대기열 맨 뒤로 이동

//! 문제 잘못이해

const print2 = (priorities, location) => {
  let resultMap = [];

  for (let unit in priorities) {
    resultMap.push(unit);
  }
  // console.log(resultMap);

  let start = true;
  while (start) {
    let check = priorities[0];
    let arr = priorities.slice(1);

    let end = arr.every((i) => {
      return check >= i;
    });

    if (end) {
      start = false;
    } else {
      let unit = priorities.shift();
      priorities.push(unit);
      let p = resultMap.shift();
      resultMap.push(p);
    }
  }

  // console.log(priorities);
  // console.log(resultMap);

  return resultMap.indexOf(String(location)) + 1;
};

// console.log(print2([2, 1, 3, 2], 2));
// console.log(print2([1, 1, 9, 1, 1, 1], 0));
// console.log(print2([2, 2, 2, 1, 3, 4], 3));

//? 문제 : 프린터

// 프린터는 배열의 앞에서 부터 인쇄
// 프린터 될 순서의 문서가 대기 문서의 중요도 보다 낮으면 대기열 맨 뒤로 이동

const print3 = (priorities, location) => {
  let result = String(Number(location) + 1);
  // 배열 재정의
  let importantMap = {};
  for (let unit in priorities) {
    importantMap[Number(unit) + 1] = priorities[unit];
  }
  // console.log(importantMap);

  for (let unit in priorities) {
    priorities[unit] = String(Number(unit) + 1);
  }
  // console.log(priorities);

  let start = true;
  let resultMap = [];
  while (start) {
    let check = importantMap[priorities[0]];
    let arr = priorities.slice(1);

    // 종료시점
    let end = arr.every((i) => {
      return check >= importantMap[i];
    });

    if (end) {
      if (priorities.length == 0) {
        start = false;
      } else {
        let unit = priorities.shift();
        resultMap.push(unit);
      }
    } else {
      let unit = priorities.shift();
      priorities.push(unit);
    }
  }

  // console.log(importantMap);
  // console.log(priorities);
  // console.log(result);

  return resultMap.indexOf(result) + 1;
};

// console.log(print3([2, 1, 3, 2], 2));
// console.log(print3([1, 1, 9, 1, 1, 1], 0));
// console.log(print3([2, 2, 2, 1, 3, 4], 3));

//? 문제 : 주식 가격

// 시간별 주식 가격 prices [1, 2, 3, 2, 3] 가 주어 질때
// 가격이 원래 가격보다 떨어지는 시점이 기록된 return
// 1초 시점의 ₩1은 끝까지 가격이 떨어지지 않았습니다.
// 2초 시점의 ₩2은 끝까지 가격이 떨어지지 않았습니다.
// 3초 시점의 ₩3은 1초뒤에 가격이 떨어집니다. 따라서 1초간 가격이 떨어지지 않은 것으로 봅니다.
// 4초 시점의 ₩2은 1초간 가격이 떨어지지 않았습니다.
// 5초 시점의 ₩3은 0초간 가격이 떨어지지 않았습니다.
// [4,3,1,1,0]

const price = (arr) => {
  let result = [];
  for (let unit in arr) {
    let compareList = arr.slice(Number(unit) + 1);
    let i = 0;
    // 마지막날
    if (Number(unit) === arr.length - 1) {
      result.push(0);
    } else {
      while (arr[unit] <= compareList[i]) {
        i++;
        console.log(i);
      }
      if (i == 0) {
        result.push(1);
      } else {
        result.push(i);
      }
    }
  }
  return result;
};

console.log(price([1, 2, 3, 2, 3])); // [4,3,1,1,0]

//! for()문 안에서 break를 만나면 for문을 종료, label에 관한내용.
// loof1 : for( )
// loof 2 : for (let i = 0; i < arr.length; i++) {
// 	if (i == 2) {
// 		break : loof1;
// 	}
// 	console.log(i);
// }
//}
