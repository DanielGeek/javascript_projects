/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
    let dp = new Array(amount + 1).fill(-1);
    dp[0] = 0;
    
    for (let i = 0; i < coins.length; i++) {
        let coin = coins[i];
        for (let j = coin; j <= amount; j++) {
            if (dp[j - coin] !== -1) {
                if (dp[j] === -1) {
                    dp[j] = dp[j - coin] + 1;
                } else {
                    dp[j] = Math.min(dp[j], dp[j - coin] + 1);
                }
            }
        }
    }
    
    return dp[amount];
}
