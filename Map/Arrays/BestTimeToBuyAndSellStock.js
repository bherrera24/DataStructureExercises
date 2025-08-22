//Best time to buy and sell stock (121)
const maxProfit=(prices)=>{
    let minPrice= Infinity;
    let maxProfit=0
    for(let i=0; i<prices.length; i++){
        if(prices[i]<minPrice)
            minPrice= prices[i]
        else{
           let currentProfit= prices[i]-minPrice
           if(maxProfit<currentProfit) maxProfit=currentProfit
        }
    }
    return maxProfit
}