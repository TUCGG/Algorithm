function solution(numbers) {
    var answer = -1;
    var sumValue = 0;
    for(let i=0; i<numbers.length; i++){
        sumValue += numbers[i]
    }
    return 45-sumValue;
}