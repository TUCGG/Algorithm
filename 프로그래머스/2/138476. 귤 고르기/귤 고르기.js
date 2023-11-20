function solution(k, tangerine) {
    let answer = 0;
    const count = {}
    tangerine.forEach((data)=>{
        if(count[data] === undefined){
            count[data] = 1
        }
        else{
            count[data]++
        }
    })

    const tangerineGroup = Object.entries(count).map(([key,value])=>({key,value}))
    tangerineGroup.sort((a,b)=>b.value - a.value)
    for(let i=0;i<tangerineGroup.length;i++){
        if(k - tangerineGroup[i].value <= 0){
           answer++
            break;
        }
        else{
            k -= tangerineGroup[i].value
            answer++
        }
    }
    return answer;
}