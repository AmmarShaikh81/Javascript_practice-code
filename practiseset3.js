const sentence='the quick brown fox jummps over the lazy dog';
const word='fox';
console.log(`the word "${word}" ${sentence.includes(word) ? 'is present':'is not present'} in the sentence');