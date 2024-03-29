// n * m 격자에서 (x ,y) 에서 (r, c)로 이동. 거리는 k
// 사전순으로 가장 빠른 경로를 return


function solution(n, m, x, y, r, c, k) {
    var answer = [];

    let move = ['l', 'r', 'u', 'd']
    let dx = [0, 0, -1, 1]
    let dy = [-1, 1, 0 , 0]


    const DFS = (a,b,arr) => {
        if(arr.length === k) {
            if(a === r && b === c) answer.push(arr.join(''))
            return
        }

        for(let i = 0; i< 4; i++) {
            if( a + dx[i] > 0 && a + dx[i] <= n && b+dy[i] > 0 && b+dy[i] <=m){
                arr.push(move[i])
                DFS(a + dx[i], b+dy[i], arr)
                arr.pop()
            }
        }
    }

    DFS(x, y, [])

    if(answer.length === 0) return 'impossible'

    answer.sort()
    return answer[0];
}

console.log(solution(3,4,2,3,3,1,5))


// 테스트 1 〉 실패 (시간 초과)
// 테스트 2 〉 실패 (시간 초과)
// 테스트 3 〉 실패 (시간 초과)
// 테스트 4 〉 통과 (20.95ms, 38.8MB)
// 테스트 5 〉 통과 (13.45ms, 37.9MB)
// 테스트 6 〉 통과 (20.35ms, 38.6MB)
// 테스트 7 〉 통과 (11.50ms, 37.4MB)
// 테스트 8 〉 통과 (26.46ms, 39.8MB)
// 테스트 9 〉 실패 (시간 초과)
// 테스트 10 〉 실패 (시간 초과)
// 테스트 11 〉 실패 (시간 초과)
// 테스트 12 〉 실패 (시간 초과)
// 테스트 13 〉 실패 (시간 초과)
// 테스트 14 〉 실패 (시간 초과)
// 테스트 15 〉 실패 (시간 초과)
// 테스트 16 〉 실패 (시간 초과)
// 테스트 17 〉 실패 (시간 초과)
// 테스트 18 〉 실패 (시간 초과)
// 테스트 19 〉 실패 (시간 초과)
// 테스트 20 〉 실패 (시간 초과)
// 테스트 21 〉 실패 (시간 초과)
// 테스트 22 〉 실패 (시간 초과)
// 테스트 23 〉 실패 (시간 초과)
// 테스트 24 〉 실패 (시간 초과)
// 테스트 25 〉 실패 (시간 초과)
// 테스트 26 〉 실패 (시간 초과)
// 테스트 27 〉 실패 (시간 초과)
// 테스트 28 〉 실패 (시간 초과)
// 테스트 29 〉 실패 (시간 초과)
// 테스트 30 〉 실패 (시간 초과)
// 테스트 31 〉 실패 (시간 초과)