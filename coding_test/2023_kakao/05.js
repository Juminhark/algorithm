function solution(commands) {

    var answer = [];
    let matrix = Array.from(Array(50), () => Array(50).fill('EMPTY'));

    const dx = [0, 0, 1, -1]
    const dy = [1, -1, 0 , 0]

    const DFS = (x, y) => {
        
        matrix[x][y] = 'EMPTY'

        for(let i =0; i< 4; i++){
            if(typeof matrix[x +dx[i]][y+dy[i]] === 'object'){
                DFS(x+ dx[i], y+dy[i])
            }
        }

    }

    for(let i of commands) {
        let tmp = i.split(' ')

        if(tmp[0] === 'UPDATE') {
            if(tmp.length === 4){
                let a =tmp[1]
                let b =tmp[2]
    
                if(typeof matrix[a][b] === 'object'){
    
                    while(typeof matrix[a][b] !== 'string'){
                        let add = matrix[a][b]
                        a = add[0]
                        b = add[1]
                    }    
                } 

                matrix[a][b] = tmp[3]


            } else {
                for(let i of matrix){
                    while(i.includes(tmp[1])){
                        let a = i.indexOf(tmp[1])
                        i[a] = tmp[2]
                    }
                }
            }
        } else if (tmp[0] === 'MERGE'){

            let value = matrix[tmp[1]][tmp[2]]

            let a = tmp[1]
            let b = tmp[3]
            let c = tmp[2]
            let d = tmp[4]

            if( b >= a) {
                for(let x = a; x <= b; x++){

                    if( d >= c) {
                        for(let y = c; y <= d; y++){
                            matrix[x][y] = [a,c]
                        }
                    } else {
                        for(let y = d; y <= c; y++){
                            matrix[x][y] = [a,c]
                        }
                    }
                    
                }
            } else {
                for(let x = b; x <= a; x++){
                    if( d >= c) {
                        for(let y = c; y <= d; y++){
                            matrix[x][y] = [a,c]
                        }
                    } else {
                        for(let y = d; y <= c; y++){
                            matrix[x][y] = [a,c]
                        }
                    }
                }
            }
            
            matrix[tmp[1]][tmp[2]] = value
         

        } else if (tmp[0] === 'UNMERGE'){


            // 1 4
            let a =tmp[1]
            let b =tmp[2]

            console.log(a, b)
            if(typeof matrix[a][b] === 'object'){

                while(typeof matrix[a][b] !== 'string'){
                    let add = matrix[a][b]
                    a = add[0]
                    b = add[1]
                }

                let value = matrix[a][b]
                matrix[a][b] = 'EMPTY'
                DFS(Number(tmp[1]),Number(tmp[2]))
                matrix[tmp[1]][tmp[2]] = value
            } else {
                let value = matrix[a][b]
    
                DFS(Number(a),Number(b))
                matrix[a][b] = value
            }




        } else if (tmp[0] === 'PRINT'){
            let a = tmp[1]
            let b = tmp[2]
            if(typeof matrix[a][b] === 'object'){
                while(typeof matrix[a][b] !== 'string'){
                    let add = matrix[a][b]
                    a = add[0]
                    b = add[1]
                }
                answer.push(matrix[a][b])
            } else {
                answer.push(matrix[a][b])
            }
        }
    }

    console.log(matrix)

    return answer;
}


console.log(solution(['UPDATE 1 1 menu', 'UPDATE 1 2 category', 'UPDATE 2 1 bibimbap', 'UPDATE 2 2 korean', 'UPDATE 2 3 rice','UPDATE 3 1 ramyon','UPDATE 3 2 korean','UPDATE 3 3 noodle','UPDATE 3 4 instant','UPDATE 4 1 pasta', 'UPDATE 4 2 italian', 'UPDATE 4 3 noodle', 'MERGE 1 2 1 3', 'MERGE 1 3 1 4', 'UPDATE korean hansik', 'UPDATE 1 3 group', 'UNMERGE 1 4', 'PRINT 1 3', 'PRINT 1 4']))
// console.log(solution(['UPDATE 1 1 a', 'UPDATE 1 2 b', 'UPDATE 2 1 c', 'UPDATE 2 2 d', 'MERGE 1 1 1 2', 'MERGE 2 2 2 1','MERGE 2 1 1 1', 'PRINT 1 1','UNMERGE 2 2', 'PRINT 1 1']))


//* let matrix = Array.from(Array(5), () => Array(5).fill(0));
//* let matrix = Array(5).fill(Array(5).fill(0)) => 같은 참조주소값을 갖으므로 값이 같이 바뀐다
