function calculateMoney(totalTicket){
    if(totalTicket<0){
        return "Please Input a Positive Number";
    }
    const result=(totalTicket*120)-(500+(8*50));
    return result;
}
