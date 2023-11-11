function solution(s)
{
   const t = []
   
    for(let i=0;i<s.length;i++){
        if(t[t.length - 1] === s[i]){
            t.pop()
        }
        else{
            t.push(s[i])
        }
    }

    return t.length === 0 ? 1 : 0
}