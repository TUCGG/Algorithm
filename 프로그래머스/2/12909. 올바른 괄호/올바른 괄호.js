function solution(s){
    const stk = []

    s.split('').map(string=>{
        if(string === ')' && stk[stk.length-1] === '('){
            stk.pop()
        }
        else{
            stk.push(string)
        }
    })

    return stk.length === 0
}
   