function climbStairs(n: number): number {

    if (n <= 3)
        return n

    let ways = 0
    let lastWay = 2
    let penultimateWay = 3

    for (let i = 3; i < n; i++) {
        ways = lastWay + penultimateWay
        lastWay = penultimateWay
        penultimateWay = ways
    }

    return ways;
};