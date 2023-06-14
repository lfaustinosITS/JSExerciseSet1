function countVowelsAndDigits(str) {
  const vowelCount = (str.match(/[aeiou]/gi) || []).length;
  const digitCount = (str.match(/\d/g) || []).length;
  return {
    vowelCount,
    digitCount
  };
}
  
console.log(countVowelsAndDigits("Hello World")); // { vowelCount: 3, digitCount: 0 }
console.log(countVowelsAndDigits("OpenAI1234")); // { vowelCount: 4, digitCount: 4 }
console.log(countVowelsAndDigits("Lorem ipsum dolor sit amet")); // { vowelCount: 9, digitCount: 0 }
  