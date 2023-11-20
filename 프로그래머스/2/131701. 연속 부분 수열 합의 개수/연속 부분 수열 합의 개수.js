function solution(elements) {
    let answer = []
    
    const doubleElements = [...elements, ...elements]

    elements.forEach((element,idx)=>{
        if(idx < elements.length ){
            for(let i = 0; i<elements.length; i++) {
                const slice = doubleElements.slice(i,i+1+idx)
                
                answer.push(slice.reduce((acc,val)=>acc+val,0))
            }
        }
    })

    const real = new Set(answer)
    return [...real].length;
}