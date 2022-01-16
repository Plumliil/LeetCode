// 118. 杨辉三角
// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

// 在「杨辉三角」中，每个数是它左上方和右上方的数的和。

/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function (numRows) {
    let res = [];
    for (let i = 0; i < numRows; i++) {
        let arr=new Array(i);
        arr[0]=1;
        arr[i]=1;
        for(let j=1;j<i;j++){
            arr[j]=res[i-1][j-1]+res[i-1][j];
        }
        res.push(arr);
    }
    return res
}
console.log(generate(5));
// console.log(1);