// 844. 比较含退格的字符串
// 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，
// 如果两者相等，返回 true 。# 代表退格字符。
// 注意：如果对空文本输入退格字符，文本继续为空。
var backspaceCompare = function (s, t) {
    function fn(arg) {
        let ans = '';
        let n=0;
        for(let i=arg.length-1;i>=0;i--){
            if(arg[i]==='#'){
                n++
            }else if(n>0){
                n--
            }else{
                ans=ans+arg[i]
            }
        }
        return ans;
    }
    return fn(s)===fn(t)
};
// var backspaceCompare = function(s, t) {
//     function fn(arg) {
//         let str=[...arg];
//         let res=[];
//         for(let i=0;i<str.length;i++){
//             if(str[i]!=='#'){
//                 res.push(str[i])
//             }else{
//                 res.pop()
//             }
//         }
//         return res.join('')
//     }
//     let strs=fn(s);
//     let strt=fn(t);
//     return strs===strt
// };
// s = "ab##", t = "c#d#"
// s = "a#c", t = "b"
// s = "ab#c", t = "ad#c"
s="bxj##tw"
t="bxj###tw"
console.log(backspaceCompare(s, t));