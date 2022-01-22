// 509. 斐波那契数
// 斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，
// 后面的每一项数字都是前面两项数字的和。也就是：


/**
 * @param {number} n
 * @return {number}
 */
 var fib = function (n) {
    if (n < 2) return n;
    let F = [];
    F[0] = 0;
    F[1] = 1;
    for (let i = 2; i <= n; i++) {
        F[i] = F[i - 1] + F[i - 2]
    }
    return F[n]
};

console.log(fib(0));