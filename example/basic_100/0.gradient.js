//? 문제 : 평행

//? 점 네 개의 좌표를 담은 이차원 배열 dots에서 
//? 주어진 네 개의 점을 두 개씩 이었을 때, 
//? 두 직선이 평행되는 경우가 있으면 1 없으면 0을 return

const solution = (dots) => {
    let answer = 0;
    let len = dots.length;
    let gra = []

    // 기울기가 같으면 평행
    for(let i = 0; i < len; i++){
        for(let j = i+1; j < len; j++) {
            let [x1, y1] = dots[i]
            let [x2, y2] = dots[j]
            
            if(y2 === y1){
                if(gra.includes(999)){
                    return 1
                } else {
                    gra.push(999)
                }
            } else {
                if(gra.includes((x2-x1)/(y2-y1))){
                    return 1
                } else {
                    gra.push((x2-x1)/(y2-y1))
                }
            }
        }
    }


    return answer;
}

console.log(solution([[1, 4], [9, 2], [3, 8], [10, 4]])) // 1
// console.log(solution([[3, 5], [4, 1], [2, 4], [5, 10]])) // 0