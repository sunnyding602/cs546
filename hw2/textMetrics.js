"use strict";

exports.createMetrics = (data) => {
    if(!data) throw "text should not be none";
    let result = {}
    result.totalLetters = data.match(/[A-Za-z]/g).length;
    let words = data.match(/[A-Za-z]+\b/g);
    result.totalWords = words.length;
    let uniqueWords = new Set();
    let longWords = [];
    let wordOccurrences = {};

    let totalWordsLength = 0;
    for (let index in words) {
        let word = words[index].toLowerCase();
        uniqueWords.add(word);
        if (word.length >= 6) {
            longWords.push(word);
        }
        totalWordsLength += word.length;

        if (!wordOccurrences[word]) {
            wordOccurrences[word] = 1;
        } else {
            wordOccurrences[word]++;
        }
    }

    result.uniqueWords = uniqueWords.size;
    result.longWords = longWords.length;
    result.averageWordLength = totalWordsLength / result.totalWords
    result.numberOfSentences = data.match(/[^\.!\?]+[\.!\?]+/g).length;
    result.textComplexity = result.totalWords / result.numberOfSentences + (result.longWords * 100) / result.totalWords;
    result.wordOccurrences = wordOccurrences;
    return result;
}
