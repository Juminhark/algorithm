//? 문제 : 안전지대

//? 지뢰가 있는 지역의 위, 아래, 좌, 우, 대각선칸을 위험지역으로 분류할 때,
//? 지뢰가 매설 지역 1과, 지뢰 없는 지역 0 으로 구성된 
//? 2차원 배열 board의 안전구역의 칸수를 return


const solution = (board) => {
    let answer = 0;
    const len = board.length;
    const bofore_dx = [-1,-1,-1,0];
    const bofore_dy = [-1,0,1,-1];
    const after_dx = [0,1,1,1];
    const after_dy = [1,-1,0,1];

    for(let x in board) {
        for(let y in board[x] ){

            if (board[x][y] === 0) answer++;
            else if(board[x][y] === 1){

                for(let i = 0; i < 4; i++){
                    if(Number(x) + bofore_dx[i] >= 0 && Number(x) + bofore_dx[i] < len && Number(y)+ bofore_dy[i] >= 0 && Number(y)+ bofore_dy[i] < len){
                        if(board[Number(x) + bofore_dx[i]][Number(y)+ bofore_dy[i]] === 0){
                            board[Number(x) + bofore_dx[i]][Number(y)+ bofore_dy[i]] = 2;
                            answer--;
                        }
                    }
                    if(Number(x) + after_dx[i] >= 0 && Number(x) + after_dx[i] < len && Number(y)+ after_dy[i] >= 0 && Number(y)+ after_dy[i] < len){
                        
                        if(board[Number(x) + after_dx[i]][Number(y)+ after_dy[i]] === 0){
                            board[Number(x) + after_dx[i]][Number(y)+ after_dy[i]] = 2;
                        }
                    }
                }

            }
        }
    }
    
    return answer;
}

console.log(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]])) // 16
console.log(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]])) // 13
console.log(solution([[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]])) // 0
