function toTitleCase(str) {
    return str.replace(/\b\w/g, l => l.toUpperCase());
}

let text = "hello world! this is a test.";
console.log(`Capitalized Text of ${text} is: `, toTitleCase(text));
