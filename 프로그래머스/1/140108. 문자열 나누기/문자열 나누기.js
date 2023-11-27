function solution(s) {
    let answer = 0;
    let count = 0;
    let diffCount = 0;
    let sameText;
    
    s.split('').forEach((data)=>{
        if(sameText === undefined) {
            sameText = data
            count++
        } else if(sameText === data) {
            count++
        } else {
            diffCount++
        }
        
        if(count === diffCount) {
            count = 0
            diffCount = 0
            sameText = undefined
            answer++
        }
    })
    if(count !== 0 || diffCount !== 0) answer++;

    return answer
}