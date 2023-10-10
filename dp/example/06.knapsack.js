//? 문제 : 최대점수 구하기(냅색 알고리즘)

//? N개의 문제의 점수와 푸는데 걸리는 시간이 주어졌을 때,
//? M 시간안에 N개의 문제 중 얻을 수 있는 최대 점수를 출력

//* dy[j] : j시간에 얻을수 있는 최대 점수

const solution = (m, arr) => {
    let answer= 0;
    let dy = Array.from({length: m+1}, () => 0)

    for(let i = 0;i < arr.length; i++) {
        let ps = arr[i][0];
        let pt = arr[i][1];

        for(let j = m; j>=pt; j--) {
            dy[j] = Math.max(dy[j], dy[j-pt]+ps)
        }
    }

    answer = dy[m]
    return answer;
}

let arr = [[10, 5], [25,12], [15,8], [6,3], [7,4]]

console.log(solution(20, arr));