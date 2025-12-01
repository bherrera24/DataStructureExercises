/*
Problem: Coin Change
30 min



Statement
Given an integer total that represents the target amount of money and a list of integers coins that represents different coin denominations, find the minimum number of coins required to make up the total amount. If it’s impossible to achieve the target amount using the given coins, return -1. If the target amount is 0, return 0.
*/

const coinsChange=(coins, total)=>{
    //crear un arreglo dp con el tamaño total+1, inicializando con infinity
        const dp= new Array(total+1).fill(Infinity)
        for(const i=0; i<=total; i++){
            for(coin of coins){
                if(coin<=i){
                    dp[i]=Math.min(dp, dp[i-coin]+1)
                }
            }
        }
        return dp[total]===Infinity?-1:dp[total]
}