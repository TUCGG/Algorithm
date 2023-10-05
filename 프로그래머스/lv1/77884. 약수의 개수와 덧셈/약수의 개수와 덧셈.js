function solution(left, right) {
    var answer = 0;

    for(let i = left; i<=right; i++){
        let num = 0;
        for(let j = 0; j<=i; j++){
            if(i%j === 0) {
                num += 1;
            }
        }
        if(num%2 == 0) {
            answer = answer + i
        }else{
            answer = answer - i
        }
    }
    return answer;
}