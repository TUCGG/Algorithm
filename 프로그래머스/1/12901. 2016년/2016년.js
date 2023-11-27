function solution(a, b) {
    let count = 0;
    const daysOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const startInx = 5; // 1월 1일이 금요일이라 5
    const month = {
        1 : 31,
        2 : 29,
        3 : 31,
        4 : 30,
        5 : 31,
        6 : 30,
        7 : 31,
        8 : 31,
        9 : 30,
        10 : 31,
        11 : 30,
        12 : 31
    };
    
    Object.entries(month).map(([key,value]) => {
        if(Number(key) < a){
            count += value
        } else if(Number(key) === a) {
            count += b
        }
    })
    return daysOfWeek[(count+startInx-1) % 7];
}