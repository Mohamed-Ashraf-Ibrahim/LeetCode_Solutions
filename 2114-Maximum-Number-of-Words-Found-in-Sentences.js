/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    let longestWord = 0;

    for (let i = 0; i < sentences.length; i++) {
        let wordCount = sentences[i].split(' ').length;
        if (wordCount > longestWord) {
            longestWord = wordCount;
        }
    }
    return longestWord;
};