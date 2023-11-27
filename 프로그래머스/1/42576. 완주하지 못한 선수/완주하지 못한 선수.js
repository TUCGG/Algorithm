function solution(participant, completion) {
    let answer = '';
    const sortParticipant = participant.sort();
    const sortCompletion = completion.sort();
    
    for(let i = 0; i<participant.length; i++) {
        if(sortParticipant[i] !==  sortCompletion[i] || completion[i] === undefined) {
            return sortParticipant[i]
        }
    }
}