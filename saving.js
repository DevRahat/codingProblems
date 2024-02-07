function monthlySavings(arr,livingCost){
   if((!Array.isArray(arr)) && (typeof livingCost !=='number')){
    return "invalid input";
   }
   const overIncome=[];
   const underIncome=[];
   for(const item of arr){
    if(item>3000){
        overIncome.push(item);
        }
    else{
        underIncome.push(item);
        }

   }
   let sum=0;
   for(const arr of overIncome){
    sum=sum+arr;
   }
   const sumAfterTex=sum-(sum*20/100);
   let sum02=0;
   for(const arr2 of underIncome){
    sum02=sum02+arr2;
   }
   const grandIncome=sumAfterTex+sum02;
   
   const saving=grandIncome-livingCost;
   if(saving>0){
    return saving;
   }else if(saving<0){
    return 'earn more';
   }else{
    return 'Equal';
   }
//    const totalTicketIncome=overIncome.concat(underIncome);
//    return totalIncome;
   
}
