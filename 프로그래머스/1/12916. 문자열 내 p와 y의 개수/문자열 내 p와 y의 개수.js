function solution(s){
    const p = s.replace(/[^p]/gi,'').length;
    const y = s.replace(/[^y]/gi,'').length;
    return p === y;
}