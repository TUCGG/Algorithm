function solution(price, money, count) {
    var payed = 0;
    for(let i = 1; i<=count; i++){
        payed += price*i
    }
    if(payed-money < 0) {
        return 0
    }else{
    return payed-money;    
    }
    
    
}