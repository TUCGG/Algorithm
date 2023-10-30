function solution(s) {
    var answer = [];
    let val = s;
    let count = 0
    let sum = 0
    
    while(val!="1") {
        sum += val.length-val.replace(/0/g, '').length
        val = val.replace(/0/g, '').length.toString(2)
        count += 1;
    }
    answer = [count, sum]
 
    return answer;
}