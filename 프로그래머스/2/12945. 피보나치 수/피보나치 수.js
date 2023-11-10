function solution(n) {
    if(n === 2) return 1;
    
    const memo = [0, 1, 1];
    
    for (let i = 3; i <= n; i++) {
        memo[i] = (memo[i-1]%1234567 + memo[i-2]%1234567);
    }
    return memo[n]%1234567;
    
}