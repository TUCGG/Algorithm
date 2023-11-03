function solution(n) {
    var answer = 0;
    var nCount = n.toString(2).split('').filter((data) => data === '1').length
    
    for(let i = n+1; i ;i++) {
        if(nCount === i.toString(2).split('').filter((data) => data === '1').length) {
            answer = i;
            break;
        }
    }
    return answer;
}