function solution(people, limit) {
    let sortedPeople = people.sort((a, b) => b - a);
    let count = 0;
    
    sortedPeople.forEach((data)=>{
        if(data + sortedPeople.at(-1) > limit){
            count++
        }
        else{
            sortedPeople.pop()
            count++
        }
    })
    return count
    
    
}