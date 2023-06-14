function sortWords(words, sortOrder = 'ascending') {
  const sortOrders = {
    ascending: (a, b) => a.localeCompare(b),
    descending: (a, b) => b.localeCompare(a),
    lengthAscending: (a, b) => a.length - b.length,
    lengthDescending: (a, b) => b.length - a.length,
    consonantsAscending: (a, b) => countConsonants(a) - countConsonants(b),
    consonantsDescending: (a, b) => countConsonants(b) - countConsonants(a)
  };  
  return words.sort(sortOrders[sortOrder]);
}
  
function countConsonants(word) {
  const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
  let count = 0;  
  for (let i = 0; i < word.length; i++) {
    if (consonants.includes(word[i])) {
      count++;
    }
  }  
  return count;
}
  
const words = ['apple', 'banana', 'cherry', 'date','four','programming','javascript','waterloo','aeronautic'];
  
console.log(sortWords(words));
console.log(sortWords(words, 'descending'));
console.log(sortWords(words, 'lengthAscending'));
console.log(sortWords(words, 'lengthDescending'));
console.log(sortWords(words, 'consonantsAscending'));
console.log(sortWords(words, 'consonantsDescending'));
  