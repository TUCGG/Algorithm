function solution(n) {
    let answer = 0;
    let result = []
    let index = 1;
    while (index <= Math.sqrt(n)) {
      if (n % index === 0) {
        result.push(index)
        if (n / index !== index) result.push(n / index)
      }
      index++
    }
    result.forEach((data) => { answer += data})
    
    
    return answer;
}