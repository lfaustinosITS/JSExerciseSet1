function countVowelsAndDigits(input,type = 'v') {
  let str= input.toString()
  if (type == 'v'){
    const vowelCount = (str.match(/[aeiou]/gi) || []).length;
    return vowelCount;
  }
  else if (type == 'n') {
    const digitCount = (str.match(/\d/g) || []).length;
    return digitCount;
  }
  else{
    throw new Error("The character type to count is invalid. Use 'n' for number or 'v' for vowel")
  }
}
console.log(countVowelsAndDigits(1234));
console.log(countVowelsAndDigits(1234,'n'));
console.log(countVowelsAndDigits("Hello World"));
console.log(countVowelsAndDigits("OpenAI1234",'n'));
console.log(countVowelsAndDigits("Lorem ipsum dolor sit amet",'v'));
  