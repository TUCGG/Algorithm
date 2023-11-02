function solution(n) {
    var answer = 0;
    let value = 0;
    
    for(let i = 1;i<=n;i++){
        for(let j = i;j<=n;j++){
           value += j;   
            if(value===n) {
                answer += 1;
                value = 0;
                break;
            }else if(value>n) {
                value = 0;
                break;
            }
        }
    }
    return answer;
}