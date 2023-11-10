function solution(A,B){
    var answer = 0;
    let sortA = A.sort((a,b) => a-b)
    let sortB = B.sort((a,b) => b-a)
    
    for(let i = 0; i<A.length; i++) {
        answer += sortA[i]*sortB[i]
    }
    

    return answer;
}