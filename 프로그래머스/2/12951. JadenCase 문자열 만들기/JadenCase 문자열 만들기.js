function solution(s) {
    const temp = s.toLowerCase();
    const answer =[];

    for(let i = 0; i<s.length; i++) {
        if(temp[i-1] === undefined || temp[i-1] === ' ') {
            answer.push(temp[i].toUpperCase())
        }else{
            answer.push(temp[i])
        }
    }
    console.log(answer)
    return answer.join('')
}