// 2129:给你一个字符串 title ，它由单个空格连接一个或多个单词组成，每个单词都只包含英文字母。请你按以下规则将每个单词的首字母 大写 ：

// 如果单词的长度为 1 或者 2 ，所有字母变成小写。
// 否则，将单词首字母大写，剩余字母变成小写。
// 请你返回 大写后 的 title 。

/**
 * @param {string} title
 * @return {string}
 */
 var capitalizeTitle = function (title) {
    title = title.toLowerCase().split(' ');
    for (let i = 0; i < title.length; i++) {
        if (title[i].length > 2) {
            title[i] = title[i][0].toUpperCase() + title[i].slice(1, title[i].length)
        } else {
            title[i] = title[i]
        }
    }
    return title.join(' ');
};
// let title = "i capiTalIze tHe titLe";
// console.log(capitalizeTitle(title));
