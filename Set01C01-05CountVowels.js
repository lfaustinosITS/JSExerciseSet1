function countVowelsOrDigits(input) {
    let str = input.toString()
    if (typeof input === "number") {
        const digitCount = (str.match(/\d/g) || []).length;
        return digitCount;
    }
    else if (typeof input === "string") {
        const vowelCount = (str.match(/[aeiou]/gi) || []).length;
        return vowelCount;
    }
    else {
        throw new Error("The input type is invalid")
    }
}
console.log(countVowelsOrDigits(1234));
console.log(countVowelsOrDigits(374839));
console.log(countVowelsOrDigits("Hello World"));
console.log(countVowelsOrDigits("OpenAI1234"));
console.log(countVowelsOrDigits("Lorem ipsum dolor sit amet"));
